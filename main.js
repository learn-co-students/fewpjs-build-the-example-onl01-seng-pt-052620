// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  // hidden model
  const model = document.getElementById("modal")
  model.className = 'hidden'
  // gather ALL the hearts by class name
  const hearts = document.getElementsByClassName("like-glyph")
  // console.log(hearts)
  // add event listener to each heart (iterate over collection)
  for (const heart of hearts) {
    // pass in event to use that
    heart.addEventListener("click", (e) => {
      // make server call - success = change the heart
      // if empty make it full, add new class for this
      // if full make empty
      mimicServerCall() //see code below for explanation
      // when successful change the heart status
        .then(() => {
          if (heart.innerHTML == EMPTY_HEART) {
            heart.innerHTML = FULL_HEART
            heart.className = "activated-heart"
          } else {
            heart.innerHTML = EMPTY_HEART
            heart.className = "like-glyph"
          }
        })
        .catch(error => {
          model.hidden = false
          const modalMessage = document.querySelector("#modal-message")
          modalMessage.innerText = error
          setTimeout(() => { 
            modal.hidden = true
          }, 5000)
      })
    })
  }
})

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
