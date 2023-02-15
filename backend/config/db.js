const mongoose = require('mongoose')


const ConnectDB = async()=>{

    try {
        const conn =  mongoose.connect(process.env.DB_URI)
    
        console.log(`MongoDB connected `)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = ConnectDB