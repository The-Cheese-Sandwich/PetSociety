const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require('./models/post');

const app = express();

mongoose.connect('mongodb://localhost:27017/PetSociety')
  .then(() => {
  console.log('Connected to database!')
  })
  .catch(() => {
    console.log('Connection failed!')
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.post("/api/posts", (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    console.log(post);
    res.status(201).json({
        message: 'Post added successfully'
    })
});

app.get("/api/posts",(req, res, next) => {
    const posts = [
        {
            id: "1234",
            title: "First post",
            description: "This is the description",
            image: "Something.png"
        },
        {
            id: "1235",
            title: "Second post",
            description: "This is the description",
            image: "Something2.png"
        }
    ];
    res.status(200).json({
        message: 'Posts fetched succesfully',
        posts: posts
    })
});


module.exports = app;