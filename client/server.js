const express = require('express')
const ejs = require('ejs')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

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

app.get("/", (req, res) => {
    res.render("home")
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


app.post("/register", (req, res) => {
    const fName = req.body.firstname
    const lName = req.body.lastname
    const address = req.body.address
    const place = req.body.place
    const date = req.body.date
    const time = req.body.time
    const events = req.body.events
    console.log(fName, lName, address, place, date, time, events)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
