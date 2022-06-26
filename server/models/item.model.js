const mongoose = require("mongoose");

const ItemsSchema = {
    item: {
        type: String,
        required: [true, "name is required"],
        minLength: [3, "Name must be at least 3 characters"],
    },
    price: {
        type: String,
        required: [true, "type is required"],
        minLength: [3, "Type must be at least 3 characters"],
    },
    seller: {
        type: String,
        required: [true, "A seller is required"],
        minLength: [3, "Type must be at least 3 characters"],
    },
    desc: {
        type: String,
        required: [true, "description is required"],
        minLength: [3, "Type must be at least 3 characters"],
    },
    venmo: {
        type: String,
        required: [true, "description is required"],
        minLength: [3, "Type must be at least 3 characters"],
    },
};

module.exports = mongoose.model("Item", ItemsSchema);