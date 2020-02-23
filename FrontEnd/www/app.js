$(document).ready(function() {
    $("#action_btn").hide()
    $("#action_complete_btn").hide()
});

function setschedule(){
    console.log($("#actions").find(":selected").text());
    console.log($("#time_intervals").find(":selected").text());


    var jqxhr = $.post( "sendEvent", function( data ) {
        $("#set").hide()
        $("#timeinterval_div").hide();
        $("#actions_div").hide();

        $("#action_btn").show();
    });
}

function updatedb() {

    var jqxhr = $.post( "sendEvent", function( data ) {

            //var timer = now + Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
//            $("#set").hide()
//            $("#timeinterval_div").hide();
//            $("#actions_div").hide();

            //$("#action_btn").hide();
            $("#action_btn").text("Start Timer");
            if ($("#action_btn").text() == "Start Timer"){
                console.log("timer started");
                //timer();
            }
        });
}

function timer(){
    console.log("timer started");
//    var now = new Date().getTime();
//    console.log(now);
//    i = 0;
//    while ( i < 600 ) {
//        i++;
//        //break;
//    }
    updatedb();
}