const express = require('express')
const mongoose = require('mongoose')
const apiRoutes = require('./routes/characters')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.json())
app.use(cors({
    origin: ["https://chinese-j0watp27a-timothy-lus-projects.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use('/api/characters', apiRoutes)
mongoose.connect(process.env.MONGO_URI, )
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log("hey")
        console.log(error)
    })
