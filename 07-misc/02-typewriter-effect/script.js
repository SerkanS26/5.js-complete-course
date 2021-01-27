/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
   let target =  document.querySelector("#target");
   let text = target.textContent;
   target.textContent = "";
    console.log(text);

   let i = 0;

   function animate(){
       if ( i < text.length){
           target.innerHTML += text.charAt(i)
           i++
           setTimeout(animate, 150);
       }
   }
    animate();


})();
