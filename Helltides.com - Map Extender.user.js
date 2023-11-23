// ==UserScript==
// @name         Helltides.com - Map Extender
// @namespace    https://helltides.com/
// @version      0.1
// @description  try to take over the world!
// @author       uolamer
// @match        https://helltides.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=helltides.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Edit the numbers at the end of the following two lines for other sizes. Eg: 1200px
    document.querySelector("#main > div.flex.flex-col.w-full.items-center.justify-center > div").setAttribute("style","max-height:1200px ; max-width:1500px");

})();
