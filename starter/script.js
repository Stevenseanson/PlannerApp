
$(document).ready(function () {
    // Get current hour using moment.js
    let currentHour = moment().hours();

    // Display current day at the top of the calender
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
}
