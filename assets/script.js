$(document).ready(function(){

    // Figure out and print the date in the header
    var setDate = moment().format('dddd, MMMM Do');
    $("#currentDay").append(setDate);

    // Figure out the current hour of the day
    var hour = parseInt(moment().format('H'));
    console.log(hour);
    
    function saveEvents(){
        localStorage.
    }
    
    scheduleEvents = [];
})