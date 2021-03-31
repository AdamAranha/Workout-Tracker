// require built in router in express.js
const router = require("express").Router();
const Workout = require("../models/schema");




router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                },
            },
        },
    ]).then((workoutDB) => {
        res.json(workoutDB)
    }).catch((err) => {
        res.json(err)
    })
});


router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                },
            },
        },
    ]).sort({ _id: -1 })
        .limit(7)
        .then((workoutDB) => {
            res.json(workoutDB)
        }).catch((err) => {
            res.json(err)
        })
});



router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(workoutDB => {
            res.json(workoutDB)
        })
        .catch((err) => {
            res.json(err)
        })
});


router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        // this checks and ensures the new exercises added meets schema requirements
        { new: true, runValidators: true }
    )
        .then((workoutDB) => {
            res.json(workoutDB);
        })
        .catch((err) => {
            res.json(err);
        });
});


module.exports = router;