let mongoose = require("mongoose");
const Chat = require("./models/chat.js");


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


let  allChats = [
    { 
        from: "Saim", 
        to: "Farhan", 
        msg: "Best of luck buddy", 
        created_at: new Date() 
    
    },
    { 
        from: "Afridi", 
        to: "Sultan", msg: "Please focus on your career", 
        created_at: new Date() 
    
    },
    
    { 
        
        from: "Dad", 
        to: "Sultan", 
        msg: "Dadu mein light chali gayi hai", 
        created_at: new Date() 
    
    },
    
    
    { 
        
        from: "Mentor", 
        to: "Sultan", 
        msg: "8 hours coding target poora karo", 
        created_at: new Date() 
    
    },
  
    { 
        
        from: "Ali", 
        to: "Sara", 
        msg: "React seekhna mushkil hai", 
        created_at: new Date() },
    
    
    {   
        
        from: "Zain", 
        to: "Hamza", 
        msg: "Gym kab chalna hai?", 
        created_at: new Date() 
    
    },
   
    { 
        from: "Boss", 
        to: "Employee", 
        msg: "Project deadline is tomorrow", 
        created_at: new Date() 
    
    },
    
    {   from: "Admin", 
        to: "User", 
        msg: "Welcome to our MERN stack app", 
        created_at: new Date() 
    },
    
    {   
        from: "Sultan", 
        to: "Mentor", 
        msg: "Main 7kg wazan kam karoon ga", 
        created_at: new Date() 
    
    },
    
    {   
        from: "Hassan", 
        to: "Bilal", 
        msg: "Node.js is powerful!", 
        created_at: new Date() 
    
    }
];


Chat.insertMany(allChats);