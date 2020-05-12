const express = require("express");
const bodyParser= require("body-parser")
const port = 3010;
const app = express();

var items=["pick Ibrakim"," bay milk","sport"];

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
var currentDay = today.toLocaleDateString("en-US", options);

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("pubic"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  
  res.render("list", {toDay: currentDay , newitems:items});
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
