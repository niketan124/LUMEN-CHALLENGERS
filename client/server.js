const express = require('express')
const ejs = require('ejs')
const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))
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


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
