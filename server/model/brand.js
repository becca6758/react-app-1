const { Schema, model } = require("mongoose");

const brandSchema =  new Schema(
    {
        brandName: {
            type: String,
            required: true,
        }
    }
);

const Brand = model("Brand", brandSchema);

module.exports = Brand;