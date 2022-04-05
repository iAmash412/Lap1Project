const express = require ('express');
const app = express();
const cors = require('cors');
const jsonfile = require('jsonfile');
app.use
const port = 5000;

app.get("/",(req,res)=>{
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


module.exports = app;
