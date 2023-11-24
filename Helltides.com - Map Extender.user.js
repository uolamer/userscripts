// ==UserScript==
// @name         Helltides.com - Map Extender
// @namespace    https://github.com/uolamer/userscripts/
// @version      0.1
// @description  A simple script to resize the map on Helltides.com. I find it more usable on a larger monitor this way.
// @author       uolamer
// @match        https://helltides.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=helltides.com
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant    GM_addStyle
// ==/UserScript==
/*- The @grant directive is needed to work around a design change
    introduced in GM 1.0.   It restores the sandbox.
*/


var intv = setInterval(function() {
    var elems = document.querySelector("#main > div.flex.flex-col.items-center.justify-center.lg\\:flex-row.lg\\:items-stretch > div.flex.justify-center.items-center.h-screen.w-4\\/5.max-w-\\[1200px\\].max-h-\\[750px\\].bg-gray-700");
    if(elems.length < 1){
        return false;
    }
    //when element is found, clear the interval.
    clearInterval(intv);

    // Actual change we do on the page
    document.querySelector("#main > div.flex.flex-col.items-center.justify-center.lg\\:flex-row.lg\\:items-stretch > div.flex.justify-center.items-center.h-screen.w-4\\/5.max-w-\\[1200px\\].max-h-\\[750px\\].bg-gray-700").classList.replace("max-w-[1200px]", "max-w-[1800px]");
    document.querySelector("#main > div.flex.flex-col.items-center.justify-center.lg\\:flex-row.lg\\:items-stretch > div.flex.justify-center.items-center.h-screen.w-4\\/5.max-w-\\[1800px\\].max-h-\\[750px\\].bg-gray-700").classList.replace("max-h-[750px]", "max-h-[1800px]")
    for (var i = 0, len = elems.length; i < len; i++){
        elems[i].value = "";
    }
}, 250);
