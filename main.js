// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};
let articleHearts = document.querySelectorAll(".like");

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall("localhost:8000")
    .then(function(serverMessage){
      // STEP 2: Uncomment the next 3 lines.
      // We'll use Pillar 1 (DOM Manipulation) to update the screen and
      // mimic Pillar 3 (Server Communication) to only update the screen if the
      // sending of information to the server succeeds.
      alert("You notified the server!");
      alert(serverMessage);
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
      // alert(serverMessage);
      // heart.innerText = glyphStates[heart.innerText];
      // heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      //alert("Something went wrong!");
      //});
    document.getElementById("modal").className = "";
    });
}
for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
