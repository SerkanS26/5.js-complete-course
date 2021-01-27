/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let output = document.querySelector("#target");

    let btn1 = document.querySelector("#part-one");
    let btn2 = document.querySelector("#part-two");
    let btn3 = document.querySelector("#part-three");
    let btn4 = document.querySelector("#part-four");

    let allButtons = document.querySelectorAll("button");

    allButtons.forEach((button) => button.addEventListener("click",function (){


        let btnValue = button.innerHTML;
        let btnMaxValue = button.dataset.max;

        if(btnValue < btnMaxValue){
            btnValue++;
            if(btnValue < 10){
                btnValue = "0" + btnValue;
            }
        }else if (btnValue === btnMaxValue){
            button.innerHTML = btnMaxValue;
        }else{
            button.innerHTML = btnValue;
        }
        button.innerHTML = btnValue.toString()
        console.log(btnValue)

        output.innerHTML = "+32" + btn1.innerHTML + btn2.innerHTML + btn3.innerHTML + btn4.innerHTML;

    }));


})();
