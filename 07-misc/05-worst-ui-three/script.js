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
    let btn1Display = document.querySelector("#part-one");
    let btn1Min = btn1Display.dataset.min;
    let btn1Max = btn1Display.dataset.max;
    let btn1Value = btn1Display.value;

    let interval1 = setInterval(function (){
        if(btn1Value < btn1Max){
            btn1Value++
        }else{
            btn1Value = btn1Min;
        }
        btn1Display.value = btn1Value;
    },50);


    let btn2 = document.querySelector("#fix-part-two");
    let btn2Display = document.querySelector("#part-two");
    let btn2Min = btn2Display.dataset.min;
    let btn2Max = btn2Display.dataset.max;
    let btn2Value = btn2Display.value;

    let interval2 = setInterval(function (){
        if (btn2Value < btn2Max){
            btn2Value++
        }else{
            btn2Value = btn2Min
        }
        btn2Display.value = btn2Value;
    },50)


    let btn3 = document.querySelector("#fix-part-three");
    let btn3Display = document.querySelector("#part-three");
    let btn3Min = btn3Display.dataset.min;
    let btn3Max = btn3Display.dataset.max;
    let btn3Value = btn3Display.value;

    let interval3 = setInterval(function (){
        if (btn3Value < btn3Max){
            btn3Value++
        }else {
            btn3Value = btn3Min
        }
        btn3Display.value = btn3Value;
    },50)


    let btn4 = document.querySelector("#fix-part-four");
    let btn4Display = document.querySelector("#part-four");
    let btn4Mmin = btn4Display.dataset.min;
    let btn4Max = btn4Display.dataset.max;
    let btn4Value = btn4Display.value;

    let interval4 = setInterval(function (){
        if (btn4Value < btn4Max){
            btn4Value++
        }else {
            btn4Value = btn4Mmin;
        }
        btn4Display.value = btn4Value;
    },50)

    btn1.addEventListener("click", function (){
        clearInterval(interval1);
        output.innerHTML = "0" + btn1Value + btn2Value + btn3Value + btn4Value;

    });

    btn2.addEventListener("click", function (){
        clearInterval(interval2);
        output.innerHTML = "0" + btn1Value + btn2Value + btn3Value + btn4Value;
    });

    btn3.addEventListener("click", function(){
        clearInterval(interval3)
        output.innerHTML = "0" + btn1Value + btn2Value + btn3Value + btn4Value;
});

    btn4.addEventListener("click", function (){
        clearInterval(interval4);
        output.innerHTML = "0" + btn1Value + btn2Value + btn3Value + btn4Value;
    });


})();
