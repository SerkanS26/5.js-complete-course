/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function getConfirm() {
    let userAge = prompt("What is your age ?:");
    let userGender = prompt("What is your Gender ?:");
    let userTown = prompt("In what town do you live ?:");

    let result = confirm ("You are " + userAge + " years old\n" + " you are a " + userGender + "\nyou live in " + userTown + "\nIf this correct press OK!");
    if (result === false) {
        getConfirm();
    }
})();
