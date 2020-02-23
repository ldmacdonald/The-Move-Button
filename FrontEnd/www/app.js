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
var interval = null;
function updatedb() {

    var jqxhr = $.post( "sendEvent", function( data ) {
            $("#action_btn").text("Start Timer");
        });
    if ($("#action_btn").text() == "Start Timer"){
       //if (interval != null ) { clearInterval(interval);}
       interval = setInterval(function(){ console.log("timer started");
            $.get("nowIstheTime", function(data){

                if (data.isTime) {
                    console.log("true in if block")
                    $("#action_btn").text("Complete Walk");
                    clearInterval(interval);
                }
                else{
                console.log(data.isTime)
                }
            });

       }, 3000);
    }
}