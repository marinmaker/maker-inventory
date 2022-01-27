var mongoose = require ("mongoose");

var Schema = mongoose.Schema;
var KitsSchema = new Schema({
   title: {
       type: String,
       required: true
   },
   quantity: {
       type: Number,
       required: true,
       default: 0
   }
});

var Kit = mongoose.model("Kit", KitsSchema);

module.exports = Kit;