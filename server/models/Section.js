var mongoose = require("mongoose");

var SectionSchema = mongoose.Schema({
    title: String,
    img: String,
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    }]
})

module.exports = mongoose.model('Section', SectionSchema);