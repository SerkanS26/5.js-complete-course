/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("pass-one").addEventListener("input", function (){
        let passOne = document.getElementById("pass-one");
        let counter = document.getElementById("counter");

        let passInput = passOne.value.substring(0,10);
        let passCount = passInput.length;

        if(passCount > 9){
            passOne.value = passInput;
        }

        counter.innerText = passCount + "/10";
    })




})();
