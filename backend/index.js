const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017")

const userScheme = new mongoose.Schema({
  email: { type: String, required: true},
  password: { type: String, required: true },
});

const User = mongoose.model("user", userScheme);

app.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;

    const user = await User.create(req.body);
    res.json({ message: "user created sucessfully" });
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
  if(user){
    const password = await bcrypt.compareSync(req.body.password,user.password)
    if(password){
        const token = jwt.sign({id:user._id}, process.env.SECRET_KEY,{expiresIn:"1d"})
        res.json({ message: "login sucessful", token });
    }
  
  }
  } catch (error) {
    console.log(error)
  }
});

app.listen(4050, () => {
  "server started in port localhost:4050";
 });