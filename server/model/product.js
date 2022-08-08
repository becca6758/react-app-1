const { Schema, model } = require("mongoose");

const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 100
        },
        ingredientList: {
            type: Array,
            required: true,
            items: {
                "type": "string"
            },
            minItems: 1,
        },
        categories: [
            {
                type: Schema.Types.ObjectId,
                required: true,
                ref: "Category"
            }
        ],
        brands: [
            {
                type: Schema.Types.ObjectId,
                required: true,
                ref: "Brand"
            }
        ]
    }
);

const Product = model("Product", productSchema);

module.exports = Product;