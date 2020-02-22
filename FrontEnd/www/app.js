//$(document).ready(function() {
//    showmenu();
//});

function showtimer(){
    console.log("kns")
    console.log($("#actions").find(":selected").text());
    console.log($("#time_intervals").find(":selected").text());


    var jqxhr = $.post( "login", function() {
          alert( "success" );
        })
          .done(function() {
            alert( "second success" );
          })
          .fail(function() {
            alert( "error" );
          })
          .always(function() {
            alert( "finished" );
          });

        // Perform other work here ...

        // Set another completion function for the request above
        jqxhr.always(function() {
          alert( "second finished" );
        });


}