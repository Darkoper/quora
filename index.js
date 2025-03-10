const express = require("express")
const app = express();
const port = 8080;
const path = require("path");
let posts = [
    {
        username: "Sumit Sharma",
        content: "Bank po"
    },
    {
        username: "Bhumi Mishra",
        content: "IIM Ahamdabad"
    },
    {
        username:"Sankalp Asthana",
        content:"IIM Banglore"
    },
    {
        username: "Vaibhav Gupta",
        content: "Animator"
    }
]
app.use(express.urlencoded({extended:true}));

app.get("/posts", (req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new", (req, res)=>{
    res.render("new.ejs")
})

app.post(("/posts",(req, res)=>{
    let {username, content} = req.body;
    posts.push({username, content});
    res.redirect("/post");
}))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.listen(port,()=>{
    console.log("listening on port: 8080");

})
