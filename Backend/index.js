const express = require('express')
const cors = require('cors')

const server = express()

const dataService = require('./dataService')

server.use(cors({
    origin: 'http://localhost:3000'
}))

server.use(express.json())

server.listen(8000,()=>{
    console.log('server started at 8000');  
})

server.get('/get-cart-items',(req,res)=>{
    dataService.getCart().then((result)=>{
        res.status(result.statusCode).json(result);
    })
})

server.post("/add-to-cart", (req,res) => {
    dataService.addtoCart(
      req.body.description,
      req.body.id,
      req.body.image,
      req.body.ingredients,
      req.body.name,
      req.body.price,
      req.body.spicy,
      req.body.vegetarian,
      req.body.num
    ).then((result)=>{
        console.log(result);
      res.status(result.statusCode).json(result);
  
    })
  });

  server.post("/increase-cart",(req,res)=>{
    dataService.increaseCart( req.body.description,
      req.body.id,
      req.body.image,
      req.body.ingredients,
      req.body.name,
      req.body.price,
      req.body.spicy,
      req.body.vegetarian,
      req.body.num).then((result)=>{
      res.status(result.statusCode).json(result);

    })
  })

  server.post("/decrease-cart",(req,res)=>{
    dataService.decreaseCart( req.body.description,
      req.body.id,
      req.body.image,
      req.body.ingredients,
      req.body.name,
      req.body.price,
      req.body.spicy,
      req.body.vegetarian,
      req.body.num).then((result)=>{
      res.status(result.statusCode).json(result);

    })
  })

  server.delete("/delete-employee/:name",(req,res)=>{
    dataService.deleteCart(req.params.name).then((result)=>{
        res.status(result.statusCode).json(result);

    })
})

server.delete("/delete-all",(req,res)=>{
  dataService.deleteallCart().then((result)=>{
    res.status(result.statusCode).json(result);

  })
})

