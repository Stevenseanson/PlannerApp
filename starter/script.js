
// Get the current date and time
let now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

// Display the current day at the top of the calendar
$("#currentDay").text("Today is " + now);

// Time blocks for standard business hours (9am to 5pm)
let businessHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

