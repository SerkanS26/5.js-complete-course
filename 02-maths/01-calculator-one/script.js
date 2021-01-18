/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function calCulator() {
    let total;
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        let num1 = parseInt(document.getElementById("op-one").value);
        let num2 = parseInt(document.getElementById("op-two").value);
        total = num1 + num2;
        alert( "Total: " + total);
        // perform an addition
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let num1 = parseInt(document.getElementById("op-one").value);
        let num2 = parseInt(document.getElementById("op-two").value);
        total = num1 - num2;
        alert("Total: " + total);
        // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let num1 = parseInt(document.getElementById("op-one").value);
        let num2 = parseInt(document.getElementById("op-two").value);
        total = num1 * num2;
        alert("Total: " + total);
        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {
        let num1 = parseInt(document.getElementById("op-one").value);
        let num2 = parseInt(document.getElementById("op-two").value);
        total = num1 / num2;
        alert("Total: " + total);
        // perform an division
    });
})();
