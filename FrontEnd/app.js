//$(document).ready(function() {
//    showtimer();
//});

function showtimer(){
    console.log("kns")
    console.log($("#actions").find(":selected").text());
    console.log($("#time_intervals").find(":selected").text());
    //alert("Action and Time Interval is Set!");

    $.post( "ajax/test.html", function( data ) {
      $( ".result" ).html( data );
    });
}