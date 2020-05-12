const express = require("express");
const bodyParser= require("body-parser");
const date=require(__dirname+"/modules.js") ;
const port = 3010;
const app = express();


var items=["Pick barhouma "," bay milk","sport"];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("pubic"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  
  res.render("list", {toDay: date.getDate() , newitems:items});
});

app.post("/",function(req,res){ 
    var item = req.body.item;
    items.push(item);
    res.redirect("/");
     console.log(item);   
})

app.get("/about",function(req,res){ res.render("about")});

app.listen(port, () =>
  console.log(`Example app listening on port port! http://localhost:${port}`)
);
