const { gql } = require("apollo-server-express");

const typeDefs = gql`

type Product {
    _id: ID!
    productName: String!
    ingrediantList: String!
    categories: [Category]!
    brands: {Brand}!
}

type Category {
    _id: ID
    categoryName: String
}

type Brand {
    _id: ID
    brandName: String
}

type Query {
    categories: [Category]
    brands: [Brand]
    product: [Product]
    category(id: ID!): Category
    brand(id: ID!): Brand
    product(_id: ID!): Product
}

`;

module.exports = typeDefs;

