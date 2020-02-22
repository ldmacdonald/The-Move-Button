//$(document).ready(function() {
//    showtimer();
//});

function showtimer(){
    console.log("kns")
    console.log($("#actions").find(":selected").text());
    console.log($("#time_intervals").find(":selected").text());
    //alert("Action and Time Interval is Set!");

    $.post( "test.php", {"EventTime": "Sat Feb 22 14:14:09 PST 2020","UserID": "kns"})
      .done(function( data ) {
        alert( "Data Loaded: " + data );
      });
}