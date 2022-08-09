const express = require('express')
const app = express()
const router = require("./routes")
//const serverless = require("serverless-http");

// const middleware1 = require("./middlewares/middleware1");
// const errorHandler = require("./handlers/error")




app.use(express.json());
app.use(express.urlencoded({extended:true}))

//require('dotenv').config()
const port = process.env.PORT || 3000

//app.use(middleware1);
app.use(router);



//app.use(errorHandler);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

