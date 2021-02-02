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
        let url = "http://localhost:63342/5.js-complete-course/_shared/api.json";
        fetch(url)
            .then(res =>{
                if(res.ok ){
                    console.log("Succes")
                    return res.json()
                }else{
                    console.log("Not Success")
                }
            }).then(data => console.log(data)).catch(error => console.error(error));

    })

    })();
