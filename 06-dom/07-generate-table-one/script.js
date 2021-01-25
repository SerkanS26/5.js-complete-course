/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.querySelectorAll("#target");
    let table = document.createElement("table");
    let tBody = document.createElement("tbody")

    target[0].appendChild(table);
    table.appendChild(tBody);

    for (let i = 0; i <10 ; i++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        tBody.appendChild(tr)
        tr.appendChild(td).innerText = "Test"

    }






})();
