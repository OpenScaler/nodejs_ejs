const express = require("express");
const port = 3010;

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tursday ";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thusday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
      default:
          console.log(`Error current date is ${currentDay}`);
  }
  res.render("list", { kindOfDay: day, toDay: Date()});
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () =>
  console.log(`Example app listening on port port! http://localhost:${port}`)
);
