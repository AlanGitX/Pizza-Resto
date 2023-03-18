const db = require("./db");

const getCart = () => {
  return db.Items.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        items: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "no data is available.",
      };
    }
  });
};

const addtoCart = (
  description,
  id,
  image,
  ingredients,
  name,
  price,
  spicy,
  vegetarian,
  num
) => {
  return db.Items.findOne({
    name,
  }).then((result) => {
    if (result) {
      return {
        statusCode: 404,
        message: "id already exists",
      };
    } else {
      const Items = new db.Items({
        description,
        id,
        image,
        ingredients,
        name,
        price,
        spicy,
        vegetarian,
        num,
      });
      Items.save();
      return {
        statusCode: 200,
        message: "New Item added. ",
      };
    }
  });
};

const increaseCart = (
  description,
  id,
  image,
  ingredients,
  name,
  price,
  spicy,
  vegetarian,
  num
) => {
  return db.Items.findOne({
    name,
  }).then((result) => {
    if (result) {
      console.log(result);
      (result.description = description),
        (result.name = name),
        (result.id = id),
        (result.image = image),
        (result.ingredients = ingredients),
        (result.price = price),
        (result.spicy = spicy),
        (result.vegetarian = vegetarian),
        (result.num = num + 1);
      result.save();
      return {
        statusCode: 200,
        message: "updated",
      };
    } else {
      return {
        statusCode: 404,
        message: "error",
      };
    }
  });
};

const decreaseCart = (
  description,
  id,
  image,
  ingredients,
  name,
  price,
  spicy,
  vegetarian,
  num
) => {
  return db.Items.findOne({
    name,
  }).then((result) => {
    if (result) {
      console.log(result);
      (result.description = description),
        (result.name = name),
        (result.id = id),
        (result.image = image),
        (result.ingredients = ingredients),
        (result.price = price),
        (result.spicy = spicy),
        (result.vegetarian = vegetarian),
        (result.num = num - 1);
      result.save();
      return {
        statusCode: 200,
        message: "updated",
        num:num-1,
        name:name
      };
    } else {
      return {
        statusCode: 404,
        message: "error",
      };
    }
  });
};


const deleteCart = (name)=>{
  return db.Items.deleteOne({
    name
  }).then((result)=>{
    if(result){
      return{
        statusCode: 200,
        message:'Deleted'
      }
    }
    else{
      return{
        statusCode:404,
        message: 'failed'
      }
    }
  })
}

const deleteallCart = () => {
  return db.Items.deleteMany().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        message:'all cleared',
      };
    } else {
      return {
        statusCode: 404,
        message: "no data is available.",
      };
    }
  });
};



module.exports = {
  addtoCart,
  getCart,
  increaseCart,deleteCart,decreaseCart,deleteallCart
};
