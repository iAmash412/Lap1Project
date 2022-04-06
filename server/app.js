const express = require('express');
const app = express();
const cors = require('cors');
const jsonfile = require('jsonfile');
const fs = require('fs')

    
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Penguin journals'
    });
});
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Penguin journals'
    });
});

// app.get('/journal', (req, res) => {
//     const data = jsonfile.readFile('posts.json') 
//     console.log(data)
// });


app.post('/journal', (req, res) => {
    function isValidPost(post) {
        return post.title && post.title.toString().trim() !== '' &&
            post.Content && post.Content.toString().trim() !== '';
    
    }
    if (isValidPost(req.body)) {
        const post = {
            title: req.body.title.toString(),
            Content: req.body.Content.toString(),
        }
        const data = jsonfile.readFile('posts.json',(err, data) => {
            data.push(post)
            jsonfile.writeFile("posts.json", data)
        });  
    } else {
        res.status(422);
        res.json({
            message: 'Sorry! Title and Journal are required!'
        });
}
});
// app.get('/journal', (req, res) => {
//     const data = jsonfile.readFile('posts.json') 
//     console.log(data)
// });


app.post('/journal', (req, res) => {
    function isValidPost(post) {
        return post.title && post.title.toString().trim() !== '' &&
            post.Content && post.Content.toString().trim() !== '';
    
    }
    if (isValidPost(req.body)) {
        const post = {
            title: req.body.title.toString(),
            Content: req.body.Content.toString(),
        }
        const data = jsonfile.readFile('posts.json',(err, data) => {
            data.push(post)
            jsonfile.writeFile("posts.json", data)
        });  
    } else {
        res.status(422);
        res.json({
            message: 'Sorry! Title and Journal are required!'
        });
}
});

module.exports = app;
