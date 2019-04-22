var mongoose = require("mongoose");

var ServiceSchema = mongoose.Schema({
    title: String,
    img: String,
    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Section'
    },
    type: [{String}]
})

module.exports = mongoose.model('Service', ServiceSchema);