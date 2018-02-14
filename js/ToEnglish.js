"use strict";

function toEnglish() {

    $('.buttonEnglish').on('click', function () {
        $(this).removeClass('buttonEnglish').addClass('buttonSpanish');
        console.log("Me vale mierda todo");
        $(this).text('Ver en español');
        document.location.reload(true);
        });
}

$(document).ready(toEnglish);