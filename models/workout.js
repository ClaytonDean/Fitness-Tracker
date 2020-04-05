//creating workout model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating workout schema
const Exercises = new Schema({
    day: {
        type: Date
    },
    exercises:[{
       type: {
            type: String,
            required: "What type of exercise?"
        },
       name: {
            type: String,
            required: "What's the name of the exercise?"
        },
       duration: {
            type: String,
            required: "What's the duration(Minutes)?"
        },
       weight: {
            type: String,
            required: "How much weight?"
       },
       reps: {
            type: String,
            required: "How many reps?"
        },
       sets: {
            type: String,
            required: "How many sets?"
        },
       distance: {
            type: String,
            required: "How long is the distance?"
        },
    }],

});

//exporting workout model
const Workout = mongoose.model("Workout", Exercises);

module.exports = Workout;