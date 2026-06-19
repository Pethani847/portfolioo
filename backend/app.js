const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact = require("./models/contact");
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());


const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

mongoose
  .connect(process.env.MONGO_URI, {
    family: 4
  })
  .then(() => console.log("mongo connected"))
  .catch((err) => console.log(err));
  
app.get('/', (req, res) => {
    res.send('hellow');
});

const port = process.env.PORT;

app.post("/contact", async (req, res) => {
  try {
    const { name, email, remark } = req.body;

    if (!name || !email || !remark) {
      return res.status(400).json({
        success: false,
        message: "Please fill out all fields.",
      });
    }

    const newContact = new Contact({
      name,
      email,
      remark,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Data Saved",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(port, () => {
    console.log("hellow from 5000");
}); 