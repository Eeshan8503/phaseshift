const express=require("express");
let cors = require("cors");
const app=express();
app.use(cors());
app.listen(8000,()=>{
    console.log("set")
})
const a={
    status:"false",
    key:""
};
app.get('/',function(req,res){
    givenAns=req.query.answer;
    qnum=req.query.qnum;
    theme=req.query.theme;
    if(qnum==1&&givenAns=='eeshan'&&theme==1){
        a.status="true";
        a.key="part1OfKey"
        res.send(a);
    }
    else{
        a.status="false";
        a.key="";
        res.send(a);
    }
    
})