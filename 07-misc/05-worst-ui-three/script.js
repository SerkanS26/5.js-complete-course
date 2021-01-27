/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let output = document.querySelector("#target");

    let btn1 = document.querySelector("#fix-part-one");
    let btn2 = document.querySelector("#fix-part-two");
    let btn3 = document.querySelector("#fix-part-three");
    let btn4 = document.querySelector("#fix-part-four");

    let btn1Display = document.querySelector("#part-one");
    let btn2Display = document.querySelector("#part-two");
    let btn3Display = document.querySelector("#part-three");
    let btn4Display = document.querySelector("#part-four");

    let allInputs = document.querySelectorAll("input");

    let maxValue = allInputs.dataset.max;


    let allButtons = document.querySelectorAll("button");

    allButtons.forEach((button) =>button.addEventListener("click", function (){
        let minValue = allInputs.dataset.min;



    }));

})();
