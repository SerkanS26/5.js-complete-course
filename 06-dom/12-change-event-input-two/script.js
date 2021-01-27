/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("pass-one").addEventListener("input", function (){
        let password = document.getElementById("pass-one");
        let passInput = password.value.substring(0,8);
        let passwordLength = passInput.length;

        let regex = /.*\d.*\d.*/g;
        let numbers = passInput.match(regex);

        if(passwordLength > 7 && numbers != null){
            password.value = passInput;
            document.getElementById("validity").innerHTML = "Ok";
        }else{
            document.getElementById("validity").innerHTML = "Not Ok"
        }

    })

})();
