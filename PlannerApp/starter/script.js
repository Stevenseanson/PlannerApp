
$(document).ready(function () {
    // Get current hour using moment.js
    let currentHour = moment().hours();

    // Display current day at the top of the calender
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // Create timeblocks for standard business hours (9am-5pm)
    for (let i = 9; i <= 17; i++) {
        let row = $("<div>").addClass("row");

        let hourDiv = $("<div>")
            .addClass("col-1 hour")
            .text(i + ":00");

        let eventDiv = $("<textarea>")
            .addClass("col-10 description")
            .attr("id", "hour-" + i);

        let event = localStorage.getItem("hour-" + i);
        if (event) {
            eventDiv.text(event);
        }
        // Create a button to save the event
        let saveBtn = $("<button>")
            .addClass("col-1 saveBtn")
            .html("<i class='fas fa-save'></i>")
            .attr("data-hour", i);

        // Color-code each timeblock based on past, present, and future
        if (i < currentHour) {
            eventDiv.addClass("past");
        } else if (i === currentHour) {
            eventDiv.addClass("present");
        } else {
            eventDiv.addClass("future");
        }

        // Append hour, event, and save button to the row
        row.append(hourDiv, eventDiv, saveBtn);
        $(".container").append(row);
    }

    // Save the event when the save button is clicked
    $(".saveBtn").on("click", function () {
        let hour = $(this).data("hour");
        let event = $("#hour-" + hour).val();
        localStorage.setItem("hour-" + hour, event);
    });
})
