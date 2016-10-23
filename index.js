$(document).ready(function(){

    //Initial display 
    $("#time").text("00:00");
    
    //Set the duration of the timer
    var duration = 1;
    var i = 1, run = false, refreshIntervalId;

    document.getElementById("increase").onclick = function(){
        if (run === false)
        {
         i++;
         duration = i;
         $("#number").text(i);
     }
    };  

    document.getElementById("decrease").onclick = function(){
        if(i > 1 && run === false)
        {
            i--;
            duration = i;
            $("#number").text(i);
        }
    };  

    //Timer function
    function Timer(duration){
        var minutes, seconds, timer = duration * 60;
         refreshIntervalId = setInterval(function(){
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = (timer < 10) ? "0" + minutes : minutes ;
            seconds = (timer < 10) ? "0" + seconds : seconds ;

            $("#time").text(minutes + ":" + seconds);

            timer--;
            if(timer <= 0)
            {
                 $("#time").text("00:00");
                 clearInterval(refreshIntervalId);
            }
            $("#stop").click(function(){
                 clearInterval(refreshIntervalId);
                
            });

            $("#reset").click(function(){
                 $("#time").text("00:00");
                 run = false;
                 clearInterval(refreshIntervalId);
            });
            return;
         }, 1000)
    }

   //Start the timer
   $("#start").click(function(){
    if (run === false)
    {
        run = true;
        Timer(duration);
    }
   });

});