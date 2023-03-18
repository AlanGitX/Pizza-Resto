const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Cart");

const Items = mongoose.model("Items", {
  description: String,
  id: Number,
  image: String,
  ingredients: [],
  name: String,
  price: Number,
  spicy: Boolean,
  vegetarian: Boolean,
  num:Number
})


module.exports={
    Items
}

