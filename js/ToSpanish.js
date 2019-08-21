"use strict";
/* Me gustó que utilizara JQuery para realizar la traducción de la página basándose en un JSON, buen trabajo.
*/

//Function to change the language to Spanish
function toSpanish() {
    //Wait until the Spanish button is clicked
    $('.buttonSpanish').on('click', function () {
        //Hide everything and show it after 400 ms for making the change smoothly.
        $('.container-fluid').hide();
        $('.container-fluid').fadeIn(400);

        //Reads the JSON with the information in Spanish
        $.getJSON("data/espanol.json", function (data) {
            //Save all the data in the information variable
            var information = data[0];
            //Asign each text of About with the info in the JSON
            $('.aboutText').text(information.About.about);
            $('.Age').text(information.About.Age);
            $('.Birthday').text(information.About.Birthday);
            $('.University').text(information.About.University);
            $('.Industrial').text(information.About.Industrial);
            $('.CS').text(information.About.CS);
            $('.IoT').text(information.About.IoT);
            $('.cvText').text(information.About.buttonCV);

            //Asign each text of Skills with the info in the JSON
            $('.skillsText').text(information.Skills.skills);

            //Asign each text of Projects with the info in the JSON
            $('.projectsText').text(information.Projects.projects);
            $('.habitacionesText').text(information.Projects.habitacionesText);
            $('.minaText').text(information.Projects.minaText);
            $('.instafixText').text(information.Projects.instafixText);
            $('.instafixWebpage').text(information.Projects.instafixWebpage);

            //Asign each text of Hobbies with the info in the JSON
            $('.hobbiesText').text(information.Hobbies.hobbies);
            $('.videogamesTitle').text(information.Hobbies.videogamesTitle);
            $('.videogamesText').text(information.Hobbies.videogamesText);
            $('.footballTitle').text(information.Hobbies.footballTitle);
            $('.footballText').text(information.Hobbies.footballText);

            //Asign each text of Conctact with the info in the JSON
            $('.contactText').text(information.Contact.contact);
            $('.twitterText').text(information.Contact.twitterText);
            $('.githubText').text(information.Contact.githubText);
            $('.Mail').text(information.Contact.Mail);
        });
    });
}
//Waits until the DOM is ready tho run the function
$(document).ready(toSpanish);

