const product = require('../models/product.model');

module.exports.findAllproducts = (req, res) => {
    product.find()
        .then((allProducts) => {
            res.json({ products: allProducts })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneproduct = (req, res) => {
    product.findOne({ _id: req.params.id })
        .then(oneSingleproduct => {
            res.json({ product: oneSingleproduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createproduct = (req, res) => {
    product.create(req.body)
        .then(newlyCreatedproduct => {
            res.json({ product: newlyCreatedproduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateproduct = (req, res) => {
    product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedproduct => {
            res.json({ product: updatedproduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteproduct = (req, res) => {
    product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}