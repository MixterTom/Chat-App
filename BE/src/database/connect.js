import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const client = mongoose
    .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => {
    console.log("DB Connetion Successfull");
    })
    .catch((err) => {
    console.log(err.message);
});