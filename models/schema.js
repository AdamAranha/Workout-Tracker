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
                    required: 'Enter an exercise type'
                },
                name: {
                    type: String,
                    trim: true,
                    required: 'Enter the name of your exercise'
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
                    type: Number,
                }
            }
        ]
    },

    {
        toJSON: {
            virtuals: true
        }
    }

);

const workout = mongoose.model("Workout", WorkoutSchema);

module.exports = workout;