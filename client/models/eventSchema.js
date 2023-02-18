const mongoose = require('mongoose')


const eventRegister = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    address: {
        type: String
    },
    place: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    events: {
        type: String
    }
})

module.exports = mongoose.model("events", eventRegister)