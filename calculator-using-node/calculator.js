const server = require("express");
const parser = require("body-parser");

const app = server();
app.use(parser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/bmi_calculator.html");
});

app.post("/bmicalculator", function(req, res) {

    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = weight + height;

    res.send("Your total is " + result);

});

app.listen(3000);