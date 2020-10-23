const express = require("express")
const path = require("path")

const app = express()

app.get("/",function(req,res) {
    let file = path.resolve("vistas/index.html")
    console.log(file)
    res.sendFile(file)
})


app.get("/register",function(req,res) {
    let file = path.resolve("vistas/register.html")
    console.log(file)
    res.sendFile(file)
})

app.get("/login",function(req,res) {
    let file = path.resolve("vistas/login.html")
    console.log(file)
    res.sendFile(file)
})

app.get("*",function(req,res) {
    if (req.url.includes(".")) {
        let file = path.resolve("public" + req.url)
        console.log(file)
        res.sendFile(file)
    } else {
        res.send("Not Found")   
    }
})

app.listen(3030, () => {
    console.log ("Running")
})

