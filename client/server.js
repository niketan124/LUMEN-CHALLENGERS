const express = require('express')
const ejs = require('ejs')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const eventSchema = require('./models/eventSchema')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.use(express.static("public"))

//databse
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://localhost:27017/eventsDB").then(() => {
    console.log("DB is sucesfully connected")
})


//API

app.get("/", async (req, res) => {
    const events = await eventSchema.find()
    console.log(events);
    res.render("home", { event: events })
})
app.get("/home", (req, res) => {
    res.render("home")
})

app.get("/booking", (req, res) => {
    res.render("booking")
})
app.get("/eventRegister", (req, res) => {
    res.render("eventRegister")
})


app.post("/register", async (req, res) => {
    const firstName = req.body.firstname
    const lastName = req.body.lastname
    const address = req.body.address
    const place = req.body.place
    const date = req.body.date
    const time = req.body.time
    const events = req.body.events
    console.log(firstName, lastName, address, place, date, time, events)
    const newEvent = await eventSchema.create({
        firstName, lastName, address, place, date, time, events
    })
    console.log(newEvent);
    const allEvents = await eventSchema.find()
    res.render("home", { event: allEvents })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
