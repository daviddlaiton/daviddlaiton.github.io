"use strict";

function toSpanish() {
    $('.buttonSpanish').on('click', function () {
        $(this).removeClass('buttonSpanish').addClass('buttonEnglish');
        $(this).text('See it on English');
        $('.container-fluid').hide();
        $('.container-fluid').fadeIn(400);

        $.getJSON("data/espanol.json", function (data) {
            var information = data[0];
            $('.aboutText').text(information.About.about);
            $('.Age').text(information.About.Age);
            $('.Birthday').text(information.About.Birthday);
            $('.University').text(information.About.University);
            $('.Industrial').text(information.About.Industrial);
            $('.CS').text(information.About.CS);
            $('.IoT').text(information.About.IoT);
            $('.cvText').text(information.About.buttonCV);

            $('.skillsText').text(information.Skills.skills);

            $('.projectsText').text(information.Projects.projects);

            $('.hobbiesText').text(information.Hobbies.hobbies);
            $('.videogamesTitle').text(information.Hobbies.videogamesTitle);
            $('.videogamesText').text(information.Hobbies.videogamesText);
            $('.footballTitle').text(information.Hobbies.footballTitle);
            $('.footballText').text(information.Hobbies.footballText);

            $('.contactText').text(information.Contact.contact);
            $('.twitterText').text(information.Contact.twitterText);
            $('.githubText').text(information.Contact.githubText);
            $('.Mail').text(information.Contact.Mail);
            console.log("Español")
        });
    });

    $('.buttonEnglish').on('click', function () {
        $(this).removeClass('buttonEnglish').addClass('buttonSpanish');
        console.log("Me vale mierda todo");
        $(this).text('Ver en español');
        document.location.reload(true);
        console.log("Ingles")
        });
}

$(document).ready(toSpanish);

