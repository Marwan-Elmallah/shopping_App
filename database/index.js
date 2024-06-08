// app.js
const mongoose = require('mongoose');
const User = require('./user');
const Product = require('./product');

// Connection promise
const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to MongoDB Atlas');
    }).catch((err) => {
        console.error('Error connecting to MongoDB Atlas:', err);
    });
}



module.exports = {
    dbConnection,
    User,
    Product
};



