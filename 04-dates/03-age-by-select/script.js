/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function (){
        let birth_date_day = document.getElementById("dob-day").value;
        let birth_date_month = document.getElementById("dob-month").value;
        let birth_date_year = document.getElementById("dob-year").value;
        let today_date = new Date();

        let today_day = today_date.getDate();
        let today_month = today_date.getMonth();
        let today_year = today_date.getFullYear();

        let calculated_age;

        if(today_month > birth_date_month){
            calculated_age = today_year - birth_date_year;
        }else if (today_month === birth_date_month){
            if(today_day >= birth_date_day){
                calculated_age = today_year - birth_date_year;
            }else{
                calculated_age = today_year - birth_date_year - 1;
            }
        }else{
            calculated_age = today_year - birth_date_year - 1;
        }

        alert(calculated_age);

        console.log(today_year);
        console.log(birth_date_year);


    });

})();
