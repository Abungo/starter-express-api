const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Hello There, Welcome to the Nodejs Webpage')
})
app.listen(process.env.PORT || 3000)
