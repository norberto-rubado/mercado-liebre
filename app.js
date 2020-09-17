const express = require("express")
const path = require("path")

const app = express()

app.get("/",function(req,res) {
    let file = path.resolve("vistas/index.html")
    console.log(file)
    res.sendFile(file)
})

app.get("*",function(req,res) {

/*     if (req.url.endsWith('.css')) {
        let file = path.resolve('public/styles' + req.url)
        res.sendFile(file)
    }

    let images = ["jpg","jpeg","gif","png","bmp","webp","svg"]

    let ext = req.url.split(".")[1]

    if (images.includes(ext)) {
        let file = path.resolve('public/images' + req.url)
        res.sendFile(file)
    } */

    if (req.url.includes(".")) {
        let file = path.resolve("public" + req.url)
        console.log(file)
        res.sendFile(file)
    }
    /* res.send("Not Found") */ 
})

app.listen(3000, () => {
    console.log ("Running")
})

