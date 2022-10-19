import express from 'express';
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from './routes/auth.js'
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log(`🟢 DATABASE CONNECTED`);
    } catch (error) {
      console.log(`🔴 Cannot conect to database ${error}`);
    }
}

// Middlewares
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoute)
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

app.use((err,req,res,next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.status || "🔴 Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  });
})


app.listen(process.env.PORT, ()=> {
  try{
    connect()
    console.log(`🟢 Backed is succesfully connected on port ${process.env.PORT}`);
  } catch {
    console.log(`🔴 Backend not connected to any Port: ${error}`);
  }
    
})