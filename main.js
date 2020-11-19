// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hiddenModal = document.getElementById('modal');
hiddenModal.className = 'hidden';

function userClickOnHeart() {
  const likeButtons = document.getElementsByClassName('like');
  for (let button of likeButtons) {
    button.addEventListener('click', () => {
      if(button.querySelector('span').innerHTML == EMPTY_HEART) {
        mimicServerCall()
          .then(() => {
            button.querySelector('span').innerHTML = FULL_HEART;
            button.querySelector('span').className = 'activated-heart';
          })
          .catch((error) => {
            hiddenModal.innerTEXT = error.message;
            hiddenModal.className = '';
            setTimeout(() => {
              hiddenModal.className = 'hidden';
            }, 5000);
          })
      } else {
        button.querySelector('span').innerHTML = EMPTY_HEART;
        button.querySelector('span').className = '';
      }
    })
  }
}

userClickOnHeart();

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
