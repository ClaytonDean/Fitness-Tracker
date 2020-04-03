const router = require("express").Router();
const path = require("path")

//creating html file path routes
router.get("/exercises", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router
