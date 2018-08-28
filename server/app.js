const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const port = process.env.PORT || 9000
const book = require("./routes/books")
const authors = require("./routes/authors")


app.use(cors())
app.use(bodyParser.json())

app.use("/book", book)
app.use("/authors", authors)


app.listen(port, () => {
    console.log(`I am listening on ${port}`)
})
