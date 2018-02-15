"use strict";

//Function to set the page in the original content.
function toEnglish() {
    //Take the English button 
    $('.buttonEnglish').on('click', function () {
        document.location.reload(true);
        });
}

$(document).ready(toEnglish);