var secs=00;
var mins=00;
var hurs=00;

document.getElementById("startbutton").onclick= function(){
         document.getElementById("startbutton").disabled= true; //the button will not work means disable after clicking to it
          var x =setInterval(start,1000);

          function start(){
              if(secs<59){
                  // seconds will increase upto 59 then have to increment the minutes
                  secs++;
                  document.getElementById("seconds").innerHTML = secs;
              }
              else{
                  secs=0;
                  mins++; //soo here mintues is increased
                  document.getElementById("seconds").innerHTML= secs; //again we printing sec =0 when mintues increase seconds should be 0
              }

              if(mins<59){
                  document.getElementById("minutes").innerHTML="0"+mins; //now here we print the minutes upto 59 bx to increment the hours
              }
              else{
                  mins=0;
                  hurs++; //here we increment the hours
                  document.getElementById("minutes").innerHTML= mins; //we again printing the minutes =0 when hours get incriment 
              }

              if(hurs<=24){
                  document.getElementById("hours").innerHTML="0"+hurs;
              }
              else{
                  clearInterval(x); //here we stop the watch when it reaches to 24
                  alert("pls start the time again");
                  
              }


              document.getElementById("stopbutton").onclick = function(){
                  clearInterval(x);
                  document.getElementById("startbutton").disabled=false; //to get back the button we conver the button as false so that it will enable the button
                }
                
                document.getElementById("restartbutton").onclick= function(){
                    clearInterval(x);   
                    document.getElementById("startbutton").disabled=false;//here to same as in the stop buttton
                  secs=0;              
                  document.getElementById("seconds").innerHTML= "00"; //it will clear the seconds previous once which was recorded
                  document.getElementById("minutes").innerHTML= "00";  //                        ""
                  document.getElementById("hours").innerHTML= "00";  //                           ""
              }
          }
}