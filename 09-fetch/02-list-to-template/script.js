/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
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
                if(res.ok){
                    console.log("Succes")
                    return res.json()
                }else{
                    console.log("Not Succes")
                }
            }).then(data =>{
                let heroes = data.heroes;
                // console.log(heroes)
                heroes.forEach((hero) =>{
                    console.log(hero)
                    let template = document.getElementById("tpl-hero").content.cloneNode(true);
                    let target = document.getElementById("target");

                    template.querySelector("strong.name").innerText = hero.name;
                    template.querySelector("em.alter-ego").innerText = hero.alterEgo;
                    template.querySelector("p.powers").innerText = hero.abilities;

                    target.appendChild(template)

                });

      })



    });
})();
