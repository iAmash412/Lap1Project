//************************************************************************************************//
//Event listener for CREATE POST//
//************************************************************************************************//
const section = document.getElementById('newPostSection');

section.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(section);
    const title = formData.get('postTitleContent');
    const Content = form.get('postBodyContent');
    
    const post = {
        title,
        Content
    }

    console.log(post)
});


//************************************************************************************************//
// SHOW/HIDE toggle for individual post//
//************************************************************************************************//
function toggleComments() {
  document.getElementById("commentsSection").classList.toggle("hide");
}

function togglePostBody() {
  document.getElementById("postBodySection").classList.toggle("min");

  let btn = document.querySelector(".readMoreBtn").innerHTML;

  if (btn === "Read More") {
    btn.innerHTML = "Read Less";
  } else {
    btn.innerHTML;
  }
}






/*const data = {postTitle, posttext};
const options ={
    method: "POST",
    headers:{
        'Content-Type': 'application/jsom'
    },
    body: JSON.stringify(data)
};

fetch("/newpost", options)*/


