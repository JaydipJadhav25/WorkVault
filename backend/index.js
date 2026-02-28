import dotenv from "dotenv"
dotenv.config();
import express from "express"
import cors from "cors"
import cookieParser  from "cookie-parser"
import mongoose from "mongoose";
import userRouter from "./routes/user.routes.js"




const app = express();




// DB Connection
const connectDB = async () => {
    try {
      
        await mongoose.connect(process.env.DB_URL);
        console.log("✅ MongoDB Connected: DApp");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err.message);
        process.exit(1);
    }
};


// Trust proxy (Required for Render/Heroku SSL termination)
app.set('trust proxy', 1);


//middlerawre congih
app.use(cors({
    origin : process.env.APP_URL,
    credentials : true
}));
app.use(express.urlencoded({extended : true}))
app.use(express.json());
app.use(cookieParser());







app.get("/" , (req , res)=>{

     return res.send("<h1>This is server side of WorkVault!</h1>")
})



app.use("/api/auth" , userRouter);









// Start Server
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
});

