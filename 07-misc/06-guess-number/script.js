/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let number = Math.floor(Math.random() *100 + 1)
    let userInput;

    console.log(number);

    while (userInput !== number){
        userInput = prompt(" Guess the number")
        if(userInput > number){
            alert("Lower !")

        }else if (userInput < number){
            alert("Higher !")
        }else{
            alert("That's it!")
        }
    }


})();
