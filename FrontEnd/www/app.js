//$(document).ready(function() {
//    showmenu();
//});

function showtimer(){
    console.log("kns")
    console.log($("#actions").find(":selected").text());
    console.log($("#time_intervals").find(":selected").text());


    var jqxhr = $.post( "sendEvent", function( data ) {
       alert( "Data Loaded: " + data );
     });

}