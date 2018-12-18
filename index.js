var express = require("express");
var app = express();

app.get("/",function(req,res){
    console.log("this is homepage");
    res.send("This is my first assingment");
});

app.get("/speak/:animal",function(req,res){
    var sounds = {
        dog:"bhoo bhoo",
        cat:"meow meow"
    };
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound +"'");
});

app.get("/repeat/:message/:times",function(req,res){
    var message = req.params.message;
    var times =  Number(req.params.times);
    var result = "";
    for(i=0;i<times ; i++)
     {
         result+=message + " ";
     }
    
    res.send(result);
})

app.get("*",function(req,res){
    console.log("page not defined");
    res.send("Sorry...Page not found");
});


app.listen(3000,function(){
    console.log("Server is running");
});