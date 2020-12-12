const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("Succesfully connected to DB");
    } catch (error){
        console.log("Error connecting DB", error);
    }
};

module.exports = connectDB;
