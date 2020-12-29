// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let error = document.getElementById("modal")
error.classList.add("hidden");

let hearts = document.getElementsByClassName("like-glyph")
for (let heart of hearts) {
  heart.addEventListener("click", () => {
    if (heart.innerHTML == EMPTY_HEART)  {
    mimicServerCall()
    .then( () => {
      heart.innerHTML = FULL_HEART
      heart.classList.add("activated-heart")
    } )
    .catch(() => {
      error.classList.remove("hidden")
      setTimeout( () => {error.classList.add("hidden")}, 5000)
    })
    } 
    else {
      heart.innerHTML = EMPTY_HEART
      heart.classList.remove("activated-heart")
    }

    
  }) 
  
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
