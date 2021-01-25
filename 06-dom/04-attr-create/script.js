/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let myElement = document.createElement("img");
    myElement.setAttribute("src", "http://www.randomkittengenerator.com/cats/rotator.php");

    let target = document.getElementById("target");
    target.appendChild(myElement);

    document.getElementById("source").remove();


})();
