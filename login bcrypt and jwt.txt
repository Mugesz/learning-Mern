
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

const db = mongoose.connect("mongodb://localhost:27017");

const crudScheme = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  mobile: { type: String },
});

const Crud = mongoose.model("Crud", crudScheme);

app.post("/create", async (req, res) => {
  try {
    const x = new Crud({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      mobile: req.body.mobile,
    });

    const createTask = await x.save();
    res.send(createTask);
  } catch (error) {
    console.log(error);
  }
});

app.get("/getAll", async (req, res) => {
  try {
    const viewAll = await Crud.find();
    res.send(viewAll);
  } catch (error) {
    console.log(error);
  }
});

app.get("/getOne/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const viewOne = await Crud.findById(id);
    res.send(viewOne);
  } catch (error) {
    console.log(error);
  }
});

app.put("/edit/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateFields = {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      mobile: req.body.mobile,
    };
    const edit = await Crud.findByIdAndUpdate(id, updateFields);
    res.send(edit);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Crud.findByIdAndDelete(id);
    res.json({ mesage: "deleted Sucessfully" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(6500, () => {
  console.log("server works in localhost 6500");
});
