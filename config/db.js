const mongoose = require("mongoose");
const color = require ("colors");

let dbUrl;
if (process.env.NODE_ENV === "development"){
    dbUrl = process.env.MONGO_URI_DEV;
} else{
    dbUrl = process.env.MONGO_URI_PROD;
}

// process.env.NODE_ENV =="development"? dbUrl=process.env.MONGO_URI_DEV:dbUrl=process.env.MONGO_URI_PROD; 
exports.connDb = async() => {
    try {
        await mongoose.connect(dbUrl);
        console.log("DB connected successfully".yellow);
    } catch (error) {
        console.log(error);
    }
}