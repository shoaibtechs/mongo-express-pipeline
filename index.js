const express =  require("express");
const app = express();
const port = 8080;
const mongoose =  require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");



 app.set("views", path.join(__dirname, "views"));


app.set("views engine", "ejs");

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended:true}));


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




// let chat1 =  new Chat({

//     from : "Shoaib",
//     to : "Farhan",
//     msg : "Hello, brother how is yoour job going on ?????",
//     created_at : new Date()

// });

// chat1.save()

//     .then((res)=>{

//         console.log(res);


//     })

//     .catch((err)=>{

//         console.log(err);

//     })





app.listen(port, ()=>{

    console.log(`The server is listening at port ${port}`);


})



app.get("/", (req, res)=>{

    res.send("You contacted the root path ");


})


app.get("/chats", async (req, res)=>{


    let chats = await Chat.find();
    res.render("index.ejs", {chats});




})



//new Route 


app.get("/chats/new", (req, res)=>{


    res.render("new.ejs");

})




// Create Route 


app.post("/chats", (req, res)=>{


    let {from,to,msg} = req.body;

    let newChat = new Chat({

        from: from, 
        to: to,
        msg:msg,
        created_at : new Date()


    });

    newChat.save()

    .then((res)=>{

        console.log("Chat was saved!!");

    })

    .catch((err)=>{

        console.log(err);

    })


    res.redirect("/chats");

})