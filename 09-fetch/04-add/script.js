/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
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
                if (res.ok){
                    console.log("Succes")
                    return res.json()
                }else{
                    console.log("Not Succes")
                }

            }).then(data =>{
                let heroes = data.heroes;
                console.log(heroes)
                let hero ={
                    id: 10,
                    name: document.getElementById("hero-name").value,
                    alterEgo: document.getElementById("hero-alter-ego").value,
                    abilities: document.getElementById("hero-powers").value
                }

                heroes.push(hero);








        })


    });
})();
