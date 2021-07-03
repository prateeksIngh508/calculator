const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var n1=Number(req.body.num1);
  var n2=Number(req.body.num2);
  var r=n1+n2;

  res.send("ANSWER ="+r);

});
app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmicalculator",function(req,res){
  var h=parseFloat(req.body.h1);
  var w=parseFloat(req.body.h2);
  var r=w/(h*h);
  res.send("Answer="+r);
});
app.listen(3000,function(){
  console.log("server port 3000");
});
