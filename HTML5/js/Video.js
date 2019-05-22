var videoref = document.getElementById("myVideo");
        var videoPlayRef = document.getElementById("videoPlay");
        var videoPauseRef = document.getElementById("videoPause");

        if(videoref.autoplay){
            videoPlayRef.disabled = true;
            videoPauseRef.disabled = false;
        }
        else{
            videoPlayRef.disabled = false;
            videoPauseRef.disabled = true;
        }

        function videoPlay(){
            videoref.play();
            videoPlayRef.disabled = true;
            videoPauseRef.disabled = false;
        }

         function videoPause(){            
            videoref.pause();
            videoPlayRef.disabled = false;
            videoPauseRef.disabled = true;
        }