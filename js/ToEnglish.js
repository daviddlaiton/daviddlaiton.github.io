"use strict";

//Function to set the page in the original content.
function toEnglish() {
    //Take the English button 
    $('.buttonEnglish').on('click', function () {
        //Reload the page to change again to the default language.
        document.location.reload(true);
        });
}

//Waits until the DOM is ready tho run the function
$(document).ready(toEnglish);