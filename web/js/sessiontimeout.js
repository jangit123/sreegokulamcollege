/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var min, sec;

function Minutes(data) {
    for (var i = 0; i < data.length; i++)
        if (data.substring(i, i + 1) === ":")
            break;
    return (data.substring(0, i));
}

function Seconds(data) {
    for (var i = 0; i < data.length; i++)
        if (data.substring(i, i + 1) === ":")
            break;
    return (data.substring(i + 1, data.length));
}

function Down() {
    sec--;
    if (sec === -1) {
        sec = 59;
        min--;
    }

    if (min === 1 && sec === 0) {
        var d = new Date();
        var hours = d.getHours();
        var minutes = d.getMinutes();
        if (minutes < 1) {
            // br=""> 
            minutes = "0" + minutes;
        }
        alert('You have been inactive and have not saved your work for last 27 Minutes.n       Please save your work in next 3 minutes to avoid any Data Loss due to Session timeout.');
    }
    if (min === 0 && sec === 0) {
        window.status = "Your session has timed out.";
       // document.location.href = "sessionout";
    } else {
        down = setTimeout("Down()", 1000);
    }
}

function timeIt() {
    min = 1 * Minutes("02:00");
    sec = 0 + Seconds("02:00");
    Down();
}




