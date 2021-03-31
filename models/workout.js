const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter the exercise type "
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter theexercise name"
                },

                duration: {
                    type: Number,
                },
                weight: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                distance: {
                    type: Number
                }
            }
        ]
    });

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;