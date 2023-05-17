const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

app.get("/", cors(), (req, res) => {});

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

app.post("/details", async (req, res) => {
  try {
    const type = req.body.selectedOption;
    const name = req.body.name;

    if (type == "All") {
      const allProductsPromise = await Announce.find({});
      const data = {
        allProducts: allProductsPromise,
      };
      res.json(data);
    } else {
      const allProductsPromise = await Announce.find({ name: name });
      const data = {
        allProducts: allProductsPromise,
      };
      res.json(data);
    }
  } catch (e) {
    res.json("fail");
  }
});

app.get("/api/details/:productId", async (req, res) => {
  const requestedProduct = req.params.productId;
  try {
    const product = await Announce.findById(requestedProduct);
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch product details" });
  }
});

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = req.body;
  const data = {
    email: email,
    password: password,
  };
  try {
    const check = await User.findOne(user);
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
    const newProduct = await new Announce(data);
    await newProduct.save();
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, function () {
  console.log("Server started on port 5000");
});
