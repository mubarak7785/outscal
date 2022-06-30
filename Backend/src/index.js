const express = require ("express")

const app = express()
const port=process.env.PORT || 3456
app.use(express.json())
const connect = require("./configs/db")



// const userController = require ("./controllers/user.controller")
// const postController = require("./controllers/post.controller");

// app.use("/post", postController);
// app.use ("users",userController)

const dataController=require("./controllers/data.controller")
app.use("/data",dataController)
app.listen(port,async function (req,res){
    try{
        connect();
        console.log ("Listening Port 3456 ")
    }catch(err){
        console.log(err.message)
    }
})