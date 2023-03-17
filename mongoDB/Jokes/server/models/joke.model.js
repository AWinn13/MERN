const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setUp: {
        type: String,
        required: [true, 'Ya have to put something funny'],
        minlength: [10, 'Joke must be at least 10 characters']
    },
    punchline: {
        type: String,
        required: [true, 'Dont leave us hanging'],
        minlength: [3, 'Punchline must be at least 3 characters']
    }

},
    { timestamps: true }
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
