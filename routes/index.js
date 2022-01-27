const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./authRoutes ");

//localhost:3000/
//API Routes
router.use("/api", apiRoutes);

//use auth routes

//if no API routes are hit, send React App
router.use(function (req, res){
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
