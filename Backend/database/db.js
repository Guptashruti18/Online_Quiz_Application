require('dotenv').config()
const mongoose = require('mongoose')
function connectDb() 
{

    mongoose.Promise = global.Promise
    mongoose.connect('mongodb+srv://shrutigupta18:Fdxidc1yatK9NcSa@cluster0.ibxz011.mongodb.net/?retryWrites=true&w=majority',process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    const con = mongoose.connection
    con.on('open', () => {
        console.log("database connected in mongo atlas (#cloud)");
    })
}

module.exports = connectDb