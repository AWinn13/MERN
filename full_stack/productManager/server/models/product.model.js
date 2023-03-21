const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Must have a title'],
        minlength: [3, 'Title must be at least 3 characters']
    },
    price: {
        type: Number,
        required: [true, 'Must have a price'],
        min: [0, 'Price must be greater than 0']
    },
    description: {
        type: String,
        required: [true, 'Must have a description'],
        minlength: [5, 'Description must be at least 5 characters']
    }

},
    { timestamps: true }
);

const product = mongoose.model('product', ProductSchema);

module.exports = product;