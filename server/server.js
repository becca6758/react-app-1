const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { authMiddleware } = require("./util/auth");
const { urlencoded } = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

app.use(express,urlencoded({ extended: true }));
app.use(express.json());

if (process.env.Node_ENV === "production") {
    app.use(express.static(path.join(_dirname, "../clientbuild")));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "../client/build/index.html"));
});

const startApolloServer = async () => {
    await server.start();
    server.applyMiddleware({ app });

    db.once("open", () => {
        app.listen(PORT, () => {
            console.log('listening on localhost:${PORT}');
            console.log('use graphql at http://localhost:${PORT}${server.graphqlPath}');
        });
    });
};

startApolloServer();