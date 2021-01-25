/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.getElementsByClassName("target");

    for (let i = 0; i <=5; i++) {
        let changeText = target[i].innerHTML = "Owned";
    }

    /*
    let changeText2 = target[1].innerHTML = "Owned";
    let changeTex3 = target[2].innerHTML = "Owned";
    let changeText4 = target[3].innerHTML = "Owned";
    let changeText5= target[5].innerHTML = "Owned";

     */

})();
