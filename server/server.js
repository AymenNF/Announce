const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

mongoose
  .connect("mongodb://127.0.0.1:27017/usersDB")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(() => {
    console.log("failed to connect");
  });

const userSchema = {
  email: String,
  password: String,
};
const announceSchema = {
  name: String,
  price: Number,
  imageUrl: String,
  description: String,
};
const User = mongoose.model("User", userSchema);
const Announce = mongoose.model("Announce", announceSchema);


app.get("/signin", cors(), (req, res) => {});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await User.findOne({ email });
    if (check) {
      res.json("exists");
    }
    res.json("not exists");
  } catch (err) {
    console.log(err);
  }
});

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const data = {
    email: email,
    password: password,
  };
  try {
    const check = await User.findOne({ email });
    if (check) {
      res.json("exists");
    } else {
      res.json("not exists");
      const newUser = await User.insertMany({
        email: email,
        password: password,
      });
      await newUser.save();
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/announce", async (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const data = {
    name: name,
    price: price,
    imageUrl: imageUrl,
    description: description,
  };

  try {
    const check = await Announce.findOne({ imageUrl });
    if (check) {
      res.json("exists");
    } else {
      res.json("not exists");
      const newProduct = await Announce.insertMany({
        name: name,
        imageUrl: imageUrl,
        description: description,
        price: price,
      });
      await newProduct.save();
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, function () {
  console.log("Server started on port 5000");
});
