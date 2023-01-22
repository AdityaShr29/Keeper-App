const express = require('express');
const bP = require('body-parser');S
const  mongoose = require('mongoose');

const app = express();

app.use(bP.urlencoded({extended: false}));
app.use(bP.json());

mongoose.connect("mongodb://127.0.0.1:27017/Keeper-App");

const noteSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Note = mongoose.model("Note", noteSchema);

app.get("/", function(req, res){
    console.log("On the react page now");
});

app.post("/" ,function(req, res){
    console.log("My react app");

    console.log(req.body);

    const notes = new Note({
        title: req.body.title,
        content: req.body.content
    });

    Note.insertMany({title: notes.title, content: notes.content}, function(err){

        if(err){
            console.log(err);
        }else{
            console.log("Note added to your database");
            res.redirect("/");
        }
    })

});

app.listen(5000 , function(){
    console.log("Server is running on port 3000");
});