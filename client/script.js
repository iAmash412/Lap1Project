//************************************************************************************************//
//Event listener for CREATE POST//
//************************************************************************************************/
const form = document.querySelector("form");
const API_URL = "http://localhost:3000/journal";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const title = formData.get("postTitleContent");
  const Content = formData.get("postBodyContent");

  const post = {
    title,
    Content,
  };
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "content-type": "application/json",
    },
  });
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

//************************************************************************************************//
// Emoji counter logic//
//************************************************************************************************//

function emojiCounter1() {
  let x;
  let emojiCounter = parseInt(
    document.querySelector(".vEmojiCounterText1").innerText
  );
  if (emojiCounter > 0) {
    x = emojiCounter;
  } else {
    x = 0;
    document
      .getElementById("vEmojiBtn1")
      .classList.toggle("btn-outline-primary");
    document
      .getElementById("hEmojiBtn1")
      .classList.toggle("btn-outline-primary");
  }
  x = x + 1;
  document.querySelector(".vEmojiCounterText1").innerText = x;
  document.querySelector(".hEmojiCounterText1").innerText = x;
}

function emojiCounter2() {
  let x;
  let emojiCounter = parseInt(
    document.querySelector(".vEmojiCounterText2").innerText
  );
  if (emojiCounter > 0) {
    x = emojiCounter;
  } else {
    x = 0;
    document
      .getElementById("vEmojiBtn2")
      .classList.toggle("btn-outline-primary");
    document
      .getElementById("hEmojiBtn2")
      .classList.toggle("btn-outline-primary");
  }
  x = x + 1;
  document.querySelector(".vEmojiCounterText2").innerText = x;
  document.querySelector(".hEmojiCounterText2").innerText = x;
}

function emojiCounter3() {
  let x;
  let emojiCounter = parseInt(
    document.querySelector(".vEmojiCounterText3").innerText
  );
  if (emojiCounter > 0) {
    x = emojiCounter;
  } else {
    x = 0;
    document
      .getElementById("vEmojiBtn3")
      .classList.toggle("btn-outline-primary");
    document
      .getElementById("hEmojiBtn3")
      .classList.toggle("btn-outline-primary");
  }
  x = x + 1;
  document.querySelector(".vEmojiCounterText3").innerText = x;
  document.querySelector(".hEmojiCounterText3").innerText = x;
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

//************************************************************************************************//
// GIPFY API//
//************************************************************************************************//
const GIPFY_KEY = "evn6IsMCnnpMUchrWJgF1HYW5uHwjuxM"
