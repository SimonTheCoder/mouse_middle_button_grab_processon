// ==UserScript==
// @name         mouse_middle_button_grab
// @namespace    
// @version      0.1
// @description  drap canvas when using processon
// @author       SimonTheCoder
// @match        https://www.processon.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("mouse_middle_button_grab loaded.");
    var designer_layout = document.getElementById("designer_layout");
    console.log("designer_layout:"+designer_layout);


    var lastX = 0;
    var lastY = 0;
    var global_test_e = null;
    var middle_down = false;
    window.onmousedown = function(e) {
        if(e.button == 1){
            global_test_e = e;
            lastX = e.x;
            lastY = e.y;
            //console.log("middle mouse down. x =" + e.x + " y=" +e.y);
            middle_down = true;
        }
    };
    window.onmouseup = function(e){
        if(e.button == 1){
            global_test_e = e;
            lastX = e.x;
            lastY = e.y;
            //console.log("middle mouse up. x =" + e.x + " y=" +e.y);
            middle_down = false;
        }
    };
    window.onmousemove = function(e){
        if(e.button == 1 && middle_down === true){
            //console.log("middle mouse move. x =" + e.x + " y=" +e.y + " lastx =" + lastX + " lasty=" +lastY );
            designer_layout.scrollTop = designer_layout.scrollTop - (e.y - lastY);
            designer_layout.scrollLeft = designer_layout.scrollLeft - (e.x - lastX);
            lastX = e.x;
            lastY = e.y;
        }

    };

})();