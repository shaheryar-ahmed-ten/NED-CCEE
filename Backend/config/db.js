const mongoose = require('mongoose');

const MONGOURI = 'mongodb+srv://shaheryarahmed:admin123@cluster0.l0tmu.mongodb.net/sample_mflix'


const connectMONGODB = async() => {
try {
    await mongoose.connect(MONGOURI)
    console.log('mongodb connected')
} catch (error) {
    console.log("error connecting mongodb: " + error.message);
}
}

module.exports = connectMONGODB;