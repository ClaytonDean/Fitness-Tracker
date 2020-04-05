const Workout = require("../models/workout.js")
const router = require("express").Router();

//api workouts
router.get("/api/workouts", function (req, res){
    Workout.find().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
});
//creating workouts api
router.post("/api/workouts", function (req, res){
    Workout.create({}).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
});
//updating workouts api
router.put("/api/workouts/:id", function (req, res){
    Workout.findByIdAndUpdate(
        req.params.id, {$push: {exercises: req.body}},
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
});
//limiting 7 day chart and display
router.get("/api/workouts/range", function (req, res){
    Workout.find().limit(7).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
});

module.exports = router