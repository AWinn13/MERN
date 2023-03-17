const joke = require('../models/joke.model');

module.exports.findAllJokes = (req, res) => {
    joke.find()
        .then((allDajokes) => {
            res.json({ jokes: allDajokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneJoke = (req, res) => {
    joke.findOne({ _id: req.params.id })
        .then(oneSinglejoke => {
            res.json({ joke: oneSinglejoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createJoke = (req, res) => {
    joke.create(req.body)
        .then(newlyCreatedjoke => {
            res.json({ joke: newlyCreatedjoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateJoke = (req, res) => {
    joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedjoke => {
            res.json({ joke: updatedjoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteJoke = (req, res) => {
    joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
