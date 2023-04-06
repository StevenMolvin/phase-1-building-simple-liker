// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const msg = document.getElementById('modal')
const likeBtn = document.getElementsByClassName('like-glyph')

msg.className = ('hidden')

likeBtn.addEventListener('click', () => {
      
          if (likeBtn.innerText === 'EMPTY_HEART'){
            likeBtn.innerText = FULL_HEART;
            likeBtn.className = 'activated-heart';
          }
          else{
            likeBtn.innerText = EMPTY_HEART;
            likeBtn.className = '';
          }
         
        })
        .catch((error) =>  {

          msg.className = ""
          msg.innerText = error;
          setTimeout(() => msg.className = 'hidden', 3000);
        })
  








//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
