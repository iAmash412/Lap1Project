const express = require('express');
const app = express();
const cors = require('cors');
const jsonfile = require('jsonfile');
const fs = require('fs')
const data = fs.readFileSync('posts.json');
const posts = JSON.parse(data); 
    
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Penguin journals'
    });
});

app.get('/journal', (req, res) => {
    
});


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
        fs.writeFile("posts.json", JSON.stringify(post),(err)=>{
            if(err) throw err;
            console.log("your post has been sent.")
        })
    } else {
        res.status(422);
        res.json({
            message: 'Sorry! Title and Journal are required!'
        });
}
});

/*app.get("/",(req,res)=>{
    res.send("All posts")
})


app.get("/newpost",(req,res)=>{
    res.send("All new posts")
})


app.post('/sendPost', (req,res) =>  {
    const data = req.body 
    jsonfile.readFile('./data/posts.json', (err, allPosts) => {
        if (error){
             console.log(`Error recieving Data from file: ${error}`)
        }else{
            try{
                const postObj = {
                postUser: data.postUser,
                postDateTime: Date.now(),
                postTest: data.postText
            }
            switch(data['postTopic']){
                case 'general':
                    postObj['postNum'] = allPosts['AllPosts'][0]['gereralPosts'].at(-1).postNum + 1;
                    jsonfile.writeFile('./data/posts', allPosts);
                    updatePostHTML(postObj);
                    res.status(201).send();
                    break
                 case 'S':
                        postObj['postNum'] = allPosts['AllPosts'][0]['gereralPosts'].at(-1).postNum + 1;
                        jsonfile.writeFile('./data/posts', allPosts);
                        updatePostHTML(postObj);
                        res.status(201).send();
                        break
                case 'general':
                    postObj['postNum'] = allPosts['AllPosts'][0]['gereralPosts'].at(-1).postNum + 1;
                    jsonfile.writeFile('./data/posts', allPosts);
                    updatePostHTML(postObj);
                    res.status(201).send();
                    break
            };
    
         }catch(error){
         console.log("Error Has occured");
         }finally{
             console.log("this is running");
         }
        }
    });
});
*/

module.exports = app;
