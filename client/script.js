//************************************************************************************************//
//Event listener for CREATE POST//
//************************************************************************************************//
const section = document.getElementById('newPostSection');

section.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(section);
    const title = formData.get('postTitleContent');
    const body = form.get('postBodyContent');
    
    const post = {
        title,
        body
    }

    console.log(post)
}); 









const data = {postTitle, posttext};
const options ={
    method: "POST",
    headers:{
        'Content-Type': 'application/jsom'
    },
    body: JSON.stringify(data)
};

fetch("/newpost", options)
