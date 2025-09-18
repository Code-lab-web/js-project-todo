import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import crypto from 'crypto'
// import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'
import dotenv from 'dotenv'
// import { MongoMemoryServer } from 'mongodb-memory-server'

dotenv.config()

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     email: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     accessToken:{
//         type:String,
//         default: () => crypto.randomBytes(128).toString('hex')
//     }
// });

// const User = mongoose.model("User", userSchema);

const port = process.env.PORT || 8080;
const app = express();

const authenticateUser = async (req, res, next) => {
    // const user = await User.findOne({accessToken: req.header('Authorization')});
    // if(user){
    //     req.user = user;
    //     next();
    // } else {
    //     res.status(401).json({loggedOut:true});
    // }
    next();
};

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello Member');
});

app.post('/users', async (req, res) => {
    res.status(201).json({
        success: true,
        message: "User created",
        id: 1,
        accessToken: "mock-access-token",
      });
  });

app.post('/sessions', async (req, res) => {
    res.json({userId: 1, accessToken: "mock-access-token"});
});

app.get("/secrets", authenticateUser);
app.get("/secrets", (req, res) => {
  res.json({ secret: 'This is a super secret message' });
});

const startServer = async () => {
    // const mongoServer = await MongoMemoryServer.create();
    // const mongoUrl = mongoServer.getUri();

    // mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    // mongoose.Promise = Promise;

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}

startServer();
