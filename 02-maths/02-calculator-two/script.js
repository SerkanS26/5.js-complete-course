/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    let performOperation = function(operation) {
        let num1 = parseInt(document.getElementById("op-one").value,);
        let num2 = parseInt(document.getElementById("op-two").value,);
        let total;

        switch (operation){
            case "addition":
                total = num1 + num2;
                break;
            case "substraction":
                total = num1 - num2;
                break;
            case "multiplication":
                total = num1 * num2;
                break;
            case "division":
                total= num1 / num2;
                break;
        }
        alert("Total: " + total);
        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
