$(document).ready(function(){
    var timeBlocks = $(".time-block");
    // Figure out and print the date in the header
    var setDate = moment().format('dddd, MMMM Do');
    $("#currentDay").append(setDate);

    // Figure out the current hour of the day
    var currentHour = parseInt(moment().format('H'));
    console.log(currentHour);

    function timeRel(){
        blockHourEl = parseInt(blockHour);
        if (moment().format('HH') === data-hour) {
            console.log(blockHourEl);
            // set class to present
            console.log("Present");
        }

        if (moment().format('HH') < data-hour) {
            console.log(blockHourEl);
            // set class to future
            console.log("Future");
        }

        if (moment().format('HH') === data-hour) {
            console.log(blockHourEl);
            // Set class to past
            console.log("Past");
        }
    }
    timeRel();

})