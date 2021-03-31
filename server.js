const logger = require("morgan")
const mongoose = require("mongoose")
const express = require("express")

const PORT = process.env.PORT || 5000

const app = express()

// app.use(logger("dev"));
// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))
app.use('/', require("./routes/page.js"))
app.use('/', require("./routes/api.js"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
})

app.listen(PORT, () => console.log(`App is listening on http://localhost:${PORT}`))