/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function (){
        let array = []
        let sumArray = 0;

        for (let i = 0; i < 10; i++) {
            array.push(Math.floor(Math.random()* 100));
            sumArray+= array[i];
        }

        for (let i = 1; i <=10; i++) {
            document.getElementById("n-" + i).innerHTML = array[i-1];
        }
/*
         document.getElementById("n-1").innerHTML = array[0];
         document.getElementById("n-2").innerHTML = array[1];
         document.getElementById("n-3").innerHTML = array[2];
         document.getElementById("n-4").innerHTML = array[3];
         document.getElementById("n-5").innerHTML = array[4];
         document.getElementById("n-6").innerHTML = array[5];
         document.getElementById("n-7").innerHTML = array[6];
         document.getElementById("n-8").innerHTML = array[7];
         document.getElementById("n-9").innerHTML = array[8];
         document.getElementById("n-10").innerHTML = array[9];
*/

         document.getElementById("min").innerHTML = Math.min(...array);
         document.getElementById("max").innerHTML = Math.max(...array);
         document.getElementById("sum").innerHTML = sumArray;
         document.getElementById("average").innerHTML =sumArray/array.length;


    })

})();
