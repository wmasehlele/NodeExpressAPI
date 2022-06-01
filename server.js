require("dotenv").config()

const express = require("express")
const app = express()

app.use(express.json())

app.use("/api", require("./routes/api-routes")) 

app.use( (err, req, res, next ) => {

    console.log(err.stack)
    console.log(err.name)
    console.log(err.code)

    res.status(500).json( {
        message: "Something went really wrong"
    })

})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))