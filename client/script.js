
const data = {postTitle, posttext};
const options ={
    method: "POST",
    headers:{
        'Content-Type': 'application/jsom'
    },
    body: JSON.stringify(data)
};

fetch("/newpost", options)
