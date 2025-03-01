require("dotenv").config()
const express = require("express");
const connectMONGODB = require("./config/db")
const Comment = require("./models/Comment");
const app = express();
const router = require("./routes")
const cors = require("cors")
const moment = require("moment")
const path = require("path");
app.use(express.json())
app.use(cors())

const PORT = 3000;



app.use((req, res, next) => {
    console.log(`${req.method}:${req.url} ${moment().format("DD/MMMM/YY HH:mm")}`)

    next()
})



connectMONGODB();

app.use("/api", router)
console.log("__dirname", __dirname)
console.log("path.join(__dirname, 'Frontend/dist')", path.join(__dirname, '..', 'Frontend/dist'))
// const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "..", 'Frontend/dist')))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Frontend', 'dist', 'index.html'));
})


// app.get('/', async (req, res) => {

//     try {

//         const { name, city, uni } = req.query;
//         const comments = await Comment.find({
//             name: {
//                 $regex: name, $options: 'i'
//             }
//         }).limit(10)

//         console.log("req.query",req.query)
//         return res.status(200).json({ data: comments, message: 'OK!!!!!!!' });

//     } catch (error) {
//         return res.status(500).send("Server error",error.message)
//     }
// })

app.get('/:userId', async (req, res) => {

    try {

        // const { name} = req.params;

        console.log("req.params",req.params)
        return res.status(200).json({ data: [],message: 'OK!!!!!!!' });
        
    } catch (error) {
        return res.status(500).send("Server error",error.message)
    }
})

app.post('/', async (req, res) => {
    console.log("req.body", req.body)
    return res.status(200).json({ data: [], message: 'OK!!!!!!!' });
})
app.put('/:id', async (req, res) => {
    console.log("req.body", req.body)
    console.log("req.params", req.params)

    return res.status(200).json({ data: [], message: 'OK!!!!!!!' });
})

app.delete('/:id', async (req, res) => {
    console.log("req.params", req.params)

    return res.status(200).json({ data: [], message: 'OK!!!!!!!' });
})

app.listen(PORT,()=> {console.log("listening on port " +PORT)})

// module.exports = express