console.log('JS Ready');

$(document).ready(readyNow);
var randomNumber = Math.floor(Math.random() * 10) + 1;
    
function readyNow() {

    $('container').append('h2')



    function randomNumber () {
        if numberGuess < randomNumber {
            return 'higher';
        }
        else if numberGuess >randomNumber {
            return 'lower';
        }
        else {
            return 'correct';
        }
    }
}

    $( "#target" ).on('click', function(event) {
        console.log();
        
      });

});






