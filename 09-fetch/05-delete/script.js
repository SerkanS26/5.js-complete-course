/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
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
            .then(res=>{
                return res.json()
            }).then(data => {
                let heroes = data.heroes; // list of heroes
                // console.log(heroes)
                let searchId = parseInt(document.getElementById("hero-id").value);
                let result = heroes.findIndex(hero => hero.id === searchId) // id result
                // console.log(result)
                heroes.splice(result, 1);
                console.log(heroes)

        })
    })
})();
