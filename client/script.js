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
