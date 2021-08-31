const express = require('express')
const app = express()
const mongoose = require('mongoose')
const helmet = require('helmet')
const dotenv = require('dotenv')
const morgan = require('morgan')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const multer = require('multer')
const path = require('path')

dotenv.config();

mongoose.set('useCreateIndex', true);


mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connected to MongoDB")
});

app.use("/images", express.static(path.join(__dirname, "public/images")))

// middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({storage: storage})
app.post('/api/upload', upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File uploaded successfully.")
    } catch (error) {
        res.status(500).json(error)
    }
})

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)


app.get('/', (req, res) => {
    res.send("Welcome to homepage")
})


app.listen(5000, () => console.log(`Server has been started on port 5000`))