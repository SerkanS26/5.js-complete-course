/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function (){
        const input = document.getElementById("year").value;
        let result = [];
        for( let m = 0; m < 12; m++){
            let date = new Date(input, m, 13);
            if(date.getDay() === 5){
                let options = {
                    month:"long"
                };
                let month = date.toLocaleDateString("en-GB", options);
                result.push(month);
            }
        }
        alert (result);

    })

    // your code here

})();
