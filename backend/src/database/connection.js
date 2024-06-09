const mongoose = require("mongoose");



//DATABASE CONNECTION
const connection = async () =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/social_network");
        console.log("Database connected successfully");

    }catch(error){
        console.log(error);
        throw new Error("Database connection failed");
    }
}

module.exports = {
    connection
}