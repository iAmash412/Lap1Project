//************************************************************************************************//
//Event listener for CREATE POST//
//************************************************************************************************//
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const title = formData.get("postTitleContent");
  const Content = formData.get("postBodyContent");

  const post = {
    title,
    Content
  };

  console.log(post);
});

//************************************************************************************************//
// SHOW/HIDE toggle for individual post//
//************************************************************************************************//
function toggleComments() {
  document.getElementById("commentsSection").classList.toggle("hide");
}

function togglePostBody() {
  document.getElementById("postBodySection").classList.toggle("min");

  let btn = document.querySelector(".readMoreBtn").innerText;
  if (btn === "Read more") {
    document.querySelector(".readMoreBtn").innerText = "Read less";
  } else if (btn === "Read less") {
    document.querySelector(".readMoreBtn").innerText = "Read more";
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
