// ! require model
const Author = require('../models/authors.model');


// -------------GET ALL------------
module.exports.getAll = (req, res) => {
    Author.find()
        .then((authors) => {
            res.json({ authors })
        })
        .catch((error) => {
            res.status(400).json({ message: 'It is time to debug', error });
        });
};


// ----------------GET ONE-------------------
module.exports.getOne = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then((author) => {
            res.json({ author })
        })
        .catch((error) => {
            res.status(400).json({ message: 'It is time to debug', error });
        });
};

// --------------CREATE-----------------------
module.exports.create = (req, res) => {
    Author.create(req.body)
        .then((author) => {
            res.json({ author })
        })
        .catch((error) => {
            res.status(400).json({ message: 'It is time to debug', error });
        });
};


// ------------UPDATE----------------
module.exports.update = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true 
    })
        .then((author) => {
            res.json({ author })
        })
        .catch((error) => {
            res.status(400).json({ message: 'It is time to debug', error });
        });
};

// ---------------DELETE-------------------
module.exports.delete = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then((author) => {
            res.json({ author })
        })
        .catch((error) => {
            res.status(400).json({ message: 'It is time to debug', error });
        });
};



