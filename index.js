const express =  require("express");
const app = express();
const port = 8080;
const mongoose =  require("mongoose");

async function main()
{

     await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}


main()
    .then(()=>{

            console.log("Connection Sucessfull");


    })

    .catch((err)=>{

            console.log(err);


    })







app.listen(port, ()=>{

    console.log(`The server is listening at port ${port}`);


})

app.get("/", (req, res)=>{

    res.send("You contacted the root path ");


})