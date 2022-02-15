const express = require('express')

const authRouter = require("./routes/auth")

const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (req, res, next) => {
    res.send('Hello World!')
})

app.use("/", authRouter)

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
})