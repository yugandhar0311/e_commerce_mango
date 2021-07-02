const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose");
const connectDB = require('./db/connection')
connectDB()

// initialzation of the server
const initializeServer = () => {
    try {
        app.listen(3000, () => {
        console.log("Server Running at http://localhost:3000")
        })
    } catch (e) {
        console.log(`DB Error: ${e.message}`)
        process.exit(1)
    }
};

// starting the server
initializeServer()

//routes
function routeAll () {
    //credentials api
    app.use(require('./controllers/auth/signup'))
    app.use(require('./controllers/auth/login'))
    app.use(require('./controllers/auth/logout'))

    
    //products api
    app.use(require('./controllers/products/cartProduct'))
    app.use(require('./controllers/products/createproduct'))
    app.use(require('./controllers/products/deleteproduct'))
    app.use(require('./controllers/products/homepage'))
    app.use(require('./controllers/products/productCategory'))
    app.use(require('./controllers/products/productFilter'))
    app.use(require('./controllers/products/productstock'))
    app.use(require('./controllers/products/searchproduct'))
  
    
    //orders api
    app.use(require('./controllers/orders/deleteorder'))
    app.use(require('./controllers/orders/getorderbyid'))
    app.use(require('./controllers/orders/getorders'))
    app.use(require('./controllers/orders/order'))
    app.use(require('./controllers/orders/vouchercreation'))
    app.use(require('./controllers/orders/voucherfetch'))
    app.use(require('./controllers/orders/wishlistget'))
    app.use(require('./controllers/orders/wishlistpost'))

    //profile api
    app.use(require('./controllers/profile/getaddress'))
    app.use(require('./controllers/profile/getprofile'))
    app.use(require('./controllers/profile/updateprofile'))
    app.use(require('./controllers/profile/userdelete'))
  
}

routeAll()
