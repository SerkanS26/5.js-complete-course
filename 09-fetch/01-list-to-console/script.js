/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function (){
        fetch("http://localhost:63342/5.js-complete-course/09-fetch/01-list-to-console/index.html?_ijt=gdla8pgqcjmnc4udrt3fl31hma/heroes?data=X-Men")
            .then( res =>{
                if(res.ok ){
                    console.log("Succes")
                }else{
                    console.log("Not Success")
                }
                console.log(res);
            }).then(data =>{
            let jsonData = JSON.stringify(data);
            console.log(jsonData)
        })

    })();
