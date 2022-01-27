const router = require("express").Router();
const UserController = require("../../controller/UserController");

//localhost:3001/api/users/
// find all users, create a new user
router
.route("/")
.get(UserController.findAll)
.post((req, res) => {
    //console.log("req.body:", req.body);
    UserController.create(req, res);
});

//localhost:3001/api/users/login
//login a user

//localhost:3001/api/users/:id
//find user by id
router
.route("/:id")
.get(UserController.findById)
.put(UserController.update);

//localhost:3001/api/users/addkit/:id
//add a kit to a user by id

module.exports = router;