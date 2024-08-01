import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoute from './routes/user.route.js';


const app = express()

dotenv.config();

// MIDDLEWARE (we are doing this so that we can do req.body)
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

const URI = process.env.MONGODB_URI;

try {
  mongoose.connect(URI)
  console.log("CONNECTED TO MONGODB")

} catch (error) {
  console.log(error);
}

app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})