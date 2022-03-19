const express = require('express');
const https = require("https");
const app = express();

app.set("view engine","ejs");
app.use(express.static("public"));

const path = "https://api.adviceslip.com/advice";

app.get("/",function(req,res){
    https.get(path,function(response){

        response.on("data",function(chunk){
            const {slip} = JSON.parse(chunk);
            const id = slip.id;
            const advice = slip.advice;

            res.render("index",{adviceId: id,advice: advice});
        });
    });
}).on('error',function(){
    console.log("error");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port,function(){
    console.log("Listening....");
});