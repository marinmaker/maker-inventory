const mongoose = require("mongoose");
const db = require("../models");

//This is a sample database of makerspace kits
// this file removes all kits and inserts the sample seeds listed below

mongoose.connect(process.env.MONGODB_URI || "mongod://localhost/maker-inventory");

const kitSeed = [
    {
        title: "Monster Plushies",
        quantity: 20
    },
    {
        title: "Paper Circuit Cards",
        quantity: 14
    },
    {
        title: "CD Mosasics",
        quantity: 5
    },
    {
        title: "strawbees",
        quantity: 10
    }
];

db.Kits.remove({})
.then(() => db.Kits.collection.insertMany(kitSeed))
.then(data => {
    console.log(data.result.n + "records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});