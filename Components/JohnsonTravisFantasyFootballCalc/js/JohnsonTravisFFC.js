
 /*
Travis Johnson
Fantasy Football Calculator
 */


// alert("Testing");

// User prompts for player information
 var playerName=prompt("Please enter the player name.");
// Validate prompt
 while(playerName===""){
     playerName=prompt("Please do not leave blank.Please enter the player name.")
 }
 alert("This calculator will determine player rank by points. The order of position tested is\n1.QB\n2.RB\n3.WR\n4.TE");
 // Function calls for position selected with console log of points playerName and total.
 var readyToBegin=prompt("Are you ready to begin? Please enter yes or no.Remember QB is first");
 while(readyToBegin != "yes" && readyToBegin != "no"){
     gutFeeling = prompt("Please do not leave blank and only enter yes or no")
 }
 if(readyToBegin==="yes"){
     var QBtotal=qbAsessment();
     alert("Now calculating RB points");
     var RBtotal=rbAssesment();
     alert("Now calculating WR points");
     var WRtotal=wrAssesment();
     alert("Now calculating TE points");
     var TEtotal=teAssesment()
 }if(readyToBegin==="no"){
     readyToBegin=prompt("YOU SHOULD BE READY!");
 }

 var teamArray=[QBtotal,RBtotal,WRtotal,TEtotal];
 console.log(teamArray);

// Function for TE
 function teAssesment(){
     var playerTotal=0;
     var hoa = prompt("Is the player(TE) home or away? Please enter h for home or a for away");
     // Validate prompt
     while (hoa.toLowerCase() != "h" && hoa.toLowerCase() != "a") {
         hoa = prompt("Please do not leave blank and only enter h for home and a for away\n*Remember to enter h for home or a for away");
     }
     if (hoa === "h") {
         playerTotal += 1
     }
     var posVsD = prompt("What is the Defense rank again TE? Please only enter a number between 1-16.");
     // Validate prompt
     while (posVsD === "" || isNaN(posVsD)) {
         posVsD = prompt("Please do not leave blank and only enter a number between 1-16")
     }
     if (posVsD >= 1 && posVsD <= 3) {
         playerTotal += 6
     }if (posVsD >= 4 && posVsD <= 6) {
         playerTotal += 5
     }if (posVsD >= 7 && posVsD <= 9) {
         playerTotal += 4
     }if (posVsD >= 10 && posVsD <= 13) {
         playerTotal += 3
     }if (posVsD >= 14 && posVsD <= 16) {
         playerTotal += 2
     } else {
         playerTotal += 0
     }

     var posVsDTD = prompt("What is the defense rank for giving up TE RECEIVING TD?");
     // Validate prompt
     while (posVsD === "" || isNaN(posVsDTD)) {
         posVsDTD = prompt("What is the defense rank for giving up TE RECEIVING TD?")
     }
     if (posVsDTD >= 1 && posVsDTD <= 3) {
         playerTotal += 6
     }if (posVsDTD >= 4 && posVsDTD <= 6) {
         playerTotal += 5
     }if (posVsDTD >= 7 && posVsDTD <= 9) {
         playerTotal += 4
     }if (posVsDTD >= 10 && posVsDTD <= 13) {
         playerTotal += 3
     }if (posVsDTD >= 14 && posVsDTD <= 16) {
         playerTotal += 2
     } else {
         playerTotal += 0
     }

     var playerRankPPG = prompt("What is the player rank for Points Per Game?");
     // Validate prompt
     while (playerRankPPG === "" || isNaN(playerRankPPG)) {
         posVsD = prompt("What is the player rank for Points Per Game?")
     }
     if (playerRankPPG >= 1 && playerRankPPG <= 3) {
         playerTotal += 6
     }if (playerRankPPG >= 4 && playerRankPPG <= 6) {
         playerTotal += 5
     }if (playerRankPPG >= 7 && playerRankPPG <= 9) {
         playerTotal += 4
     }if (playerRankPPG >= 10 && playerRankPPG <= 13) {
         playerTotal += 3
     }if (playerRankPPG >= 14 && playerRankPPG <= 16) {
         playerTotal += 2
     } else {
         playerTotal += 0
     }

     var playerProjectedPoints = prompt("What is the player rank for projected points?");
     // Validate prompt
     while (playerProjectedPoints === "" || isNaN(playerProjectedPoints)) {
         posVsD = prompt("What is the player rank for projected points?")
     }
     if (playerProjectedPoints >= 1 && playerProjectedPoints <= 3) {
         playerTotal += 6
     }if (playerProjectedPoints >= 4 && playerProjectedPoints <= 6) {
         playerTotal += 5
     }if (playerProjectedPoints >= 7 && playerProjectedPoints <= 9) {
         playerTotal += 4
     }if (playerProjectedPoints >= 10 && playerProjectedPoints <= 13) {
         playerTotal += 3
     }if (playerProjectedPoints >= 14 && playerProjectedPoints <= 16) {
         playerTotal += 2
     } else {
         playerTotal += 0
     }
     var playerRedZoneAVGTargets= prompt("What is the players AVG Red Zone Targets?");
     // Validate Prompt
     while (playerRedZoneAVGTargets === "" || isNaN(playerRedZoneAVGTargets)) {
         posVsD = prompt("What is the players AVG Red Zone Targets?")
     }
     if(playerRedZoneAVGTargets>2){
         playerTotal+=2
     }
     var playerTargetsTE=prompt("What is the players rank for AVG targets per game??");
     // Validate prompt
     while (playerTargetsTE === "" || isNaN(playerTargetsTE)) {
         posVsD = prompt("What is the players rank for AVG targets per game??")
     }
     if(playerTargetsTE>=6 && playerTargetsTE<=7){
         playerTotal+=1
     }if(playerTargetsTE>8){
         playerTotal+=2
     }else{playerTotal+=0}
     var gutFeeling=prompt("Gut feeling for this week yes or no?\nPlease enter yes or no");
     while(gutFeeling != "yes" && gutFeeling != "no"){
         gutFeeling = prompt("Please do not leave blank and only enter yes or no")
     }
     if(gutFeeling==="yes"){
         playerTotal+=1
     }if(gutFeeling==="no"){
         playerTotal+=0
     }
     var top5Lastweek=prompt("Was the player in the top 5 for Points last week for his position?\nPlease enter yes or no");
     while(top5Lastweek != "yes" && top5Lastweek != "no"){
         top5Lastweek = prompt("Please do not leave blank and only enter yes or no")
     }
     if(top5Lastweek==="yes"){
         playerTotal+=2
     }if(top5Lastweek){
         playerTotal+=0
     }
     return playerTotal

 }



 function wrAssesment(){
     var playerTotal=0;
     var hoa = prompt("Is the player(WR) home or away? Please enter h for home or a for away");
     // Validate prompt
     while (hoa.toLowerCase() != "h" && hoa.toLowerCase() != "a") {
         hoa = prompt("Please do not leave blank and only enter h for home and a for away\n*Remember to enter h for home or a for away");
     }
     if (hoa === "h") {
         playerTotal += 1
     }
     var posVsD = prompt("What is the Defense rank again WR? Please only enter a number between 1-16.");
     while (posVsD === "" || isNaN(posVsD)) {
         posVsD = prompt("What is the Defense rank again WR?Please do not leave blank and only enter a number between 1-16")
     }
     if (posVsD >= 1 && posVsD <= 3) {
         playerTotal += 6
     }if (posVsD >= 4 && posVsD <= 6) {
         playerTotal += 5
     }if (posVsD >= 7 && posVsD <= 9) {
         playerTotal += 4
     }if (posVsD >= 10 && posVsD <= 13) {
         playerTotal += 3
     }if (posVsD >= 14 && posVsD <= 16) {
         playerTotal += 2
     } else {
         playerTotal += 0
     }

     var posVsDTD = prompt("What is the defense rank for giving up RECEIVING TD? Please only enter a number between 1-16.");
     while (posVsDTD === "" || isNaN(posVsDTD)) {
         posVsDTD = prompt("What is the defense rank for giving up RECEIVING TD? Please do not leave blank and only enter a number between 1-16");}
     if (posVsDTD >= 1 && posVsDTD <= 3) {
         playerTotal += 6
     }if (posVsDTD >= 4 && posVsDTD <= 6) {
         playerTotal += 5
     }if (posVsDTD >= 7 && posVsDTD <= 9) {
         playerTotal += 4
     }if (posVsDTD >= 10 && posVsDTD <= 13) {
         playerTotal += 3
     }if (posVsDTD >= 14 && posVsDTD <= 16) {
         playerTotal += 2
     } else {
         playerTotal += 0
     }

     var playerRankPPG = prompt("What is the player rank for Points Per Game?");
         while (playerRankPPG === "" || isNaN(playerRankPPG)) {
           playerRankPPG = prompt("Please do not leave blank and only enter a number.What is the player rank for Points Per Game?");}
     if (playerRankPPG >= 1 && playerRankPPG <= 3) {
         playerTotal += 6
     }if (playerRankPPG >= 4 && playerRankPPG <= 6) {
         playerTotal += 5
     }if (playerRankPPG >= 7 && playerRankPPG <= 9) {
         playerTotal += 4
     }if (playerRankPPG >= 10 && playerRankPPG <= 13) {
         playerTotal += 3
     }if (playerRankPPG >= 14 && playerRankPPG <= 16) {
         playerTotal += 2
     } else {
         playerTotal += 0
     }

     var playerProjectedPoints = prompt("What is the player rank for projected points?");
             while (playerProjectedPoints === "" || isNaN(playerProjectedPoints)) {
                 playerProjectedPoints = prompt("Please do not leave blank and only enter a number.What is the player rank for Projected points?");}

     if (playerProjectedPoints >= 1 && playerProjectedPoints <= 3) {
         playerTotal += 6
     }if (playerProjectedPoints >= 4 && playerProjectedPoints <= 6) {
         playerTotal += 5
     }if (playerProjectedPoints >= 7 && playerProjectedPoints <= 9) {
         playerTotal += 4
     }if (playerProjectedPoints >= 10 && playerProjectedPoints <= 13) {
         playerTotal += 3
     }if (playerProjectedPoints >= 14 && playerProjectedPoints <= 16) {
         playerTotal += 2
     } else {
         playerTotal += 0
     }
     var playerRedZoneAVGTargets= prompt("What is the players AVG Red Zone Targets?");
     while (playerRedZoneAVGTargets === "" || isNaN(playerRedZoneAVGTargets)) {
         playerRedZoneAVGTargets = prompt("Please do not leave blank and only enter a number.What is the players AVG Red Zone Targets?");}
     if(playerRedZoneAVGTargets>2){
         playerTotal+=2
     }
     var playerTargetsWR=prompt("What is the players rank for AVG targets per game??");
     while (playerTargetsWR === "" || isNaN(playerTargetsWR)) {
         playerTargetsWR = prompt("Please do not leave blank and only enter a number.What is the players rank for AVG targets per game?");}

     if(playerTargetsWR>=8 && playerTargetsWR<=9){
         playerTotal+=1
     }if(playerTargetsWR>=10 &&playerTargetsWR<=11){
         playerTotal+=2
     }if(playerTargetsWR>12){
         playerTotal+=3
     }else{playerTotal+=0}
     var gutFeeling=prompt("Gut feeling for this week yes or no?\nPlease enter yes or no");
     while(gutFeeling != "yes" && gutFeeling != "no"){
         gutFeeling = prompt("Please do not leave blank and only enter yes or no")
     }
     if(gutFeeling==="yes"){
         playerTotal+=1
     }if(gutFeeling==="no"){
         playerTotal+=0
     }
     var top5Lastweek=prompt("Was the player in the top 5 for Points last week for his position?\nPlease enter yes or no");
     while(top5Lastweek != "yes" && top5Lastweek != "no"){
         top5Lastweek = prompt("Please do not leave blank and only enter yes or no")
     }
     if(top5Lastweek==="yes"){
         playerTotal+=2
     }if(top5Lastweek){
         playerTotal+=0
     }
     return playerTotal

 }

 function rbAssesment(){
     var playerTotal=0;
     var hoa = prompt("Is the player(RB) home or away? Please enter h for home or a for away");
     // Validate prompt
     while (hoa.toLowerCase() != "h" && hoa.toLowerCase() != "a") {
         hoa = prompt("Please do not leave blank and only enter h for home and a for away\n*Remember to enter h for home or a for away");
     }
     if (hoa === "h") {
         playerTotal += 1
     }
     var posVsD = prompt("What is the Defense rank again RB? Please only enter a number between 1-16.");
     while (posVsD === "" || isNaN(posVsD)) {
         posVsD = prompt("Please do not leave blank and only enter a number between 1-16")
     }
     if (posVsD >= 1 && posVsD <= 3) {
         playerTotal += 6
     }if (posVsD >= 4 && posVsD <= 6) {
         playerTotal += 5
     }if (posVsD >= 7 && posVsD <= 9) {
         playerTotal += 4
     }if (posVsD >= 10 && posVsD <= 13) {
         playerTotal += 3
     }if (posVsD >= 14 && posVsD <= 16) {
         playerTotal += 2
     } else {
         playerTotal += 0
     }

     var posVsDTD = prompt("What is the defense rank for giving up RUSHING TD??");
     while (posVsD === "" || isNaN(posVsD)) {
         posVsD = prompt("Please do not leave blank and only enter a number between 1-16")
     }
     if (posVsDTD >= 1 && posVsDTD <= 3) {
         playerTotal += 6
     }if (posVsDTD >= 4 && posVsDTD <= 6) {
         playerTotal += 5
     }if (posVsDTD >= 7 && posVsDTD <= 9) {
         playerTotal += 4
     }if (posVsDTD >= 10 && posVsDTD <= 13) {
         playerTotal += 3
     }if (posVsDTD >= 14 && posVsDTD <= 16) {
         playerTotal += 2
     } else {
         playerTotal += 0
     }

     var playerRankPPG = prompt("What is the player rank for Points Per Game?");
     while (playerRankPPG === "" || isNaN(playerRankPPG)) {
         playerRankPPG = prompt("Please do not leave blank and only enter a number.What is the player rank for Points Per Game?");}
     if (playerRankPPG >= 1 && playerRankPPG <= 3) {
         playerTotal += 6
     }if (playerRankPPG >= 4 && playerRankPPG <= 6) {
         playerTotal += 5
     }if (playerRankPPG >= 7 && playerRankPPG <= 9) {
         playerTotal += 4
     }if (playerRankPPG >= 10 && playerRankPPG <= 13) {
         playerTotal += 3
     }if (playerRankPPG >= 14 && playerRankPPG <= 16) {
         playerTotal += 2
     } else {
         playerTotal += 0
     }

     var playerProjectedPoints = prompt("What is the player rank for projected points?");
     while (playerProjectedPoints === "" || isNaN(playerProjectedPoints)) {
         playerProjectedPoints = prompt("Please do not leave blank and only enter a number.What is the player rank for Projected points?");}
     if (playerProjectedPoints >= 1 && playerProjectedPoints <= 3) {
         playerTotal += 6
     }if (playerProjectedPoints >= 4 && playerProjectedPoints <= 6) {
         playerTotal += 5
     }if (playerProjectedPoints >= 7 && playerProjectedPoints <= 9) {
         playerTotal += 4
     }if (playerProjectedPoints >= 10 && playerProjectedPoints <= 13) {
         playerTotal += 3
     }if (playerProjectedPoints >= 14 && playerProjectedPoints <= 16) {
         playerTotal += 2
     } else {
         playerTotal += 0
     }
     var playerRedZoneAVGRushAtt = prompt("What is the players AVG Red Zone Rushing Attempts?");
     while (playerRedZoneAVGRushAtt === "" || isNaN(playerRedZoneAVGRushAtt)) {
         playerRedZoneAVGRushAtt = prompt("Please do not leave blank and only enter a number.What is the players AVG Red Zone Rushing Attempts?");}
     if(playerRedZoneAVGRushAtt>=2 && playerRedZoneAVGRushAtt<=3){
         playerTotal+=1
     }if(playerRedZoneAVGRushAtt>3){
         playerTotal+=2
     }else playerTotal+=0;
     var playerTargetsRB=prompt("What is the players avg passing targets per game?");
     while (playerTargetsRB === "" || isNaN(playerTargetsRB)) {
         playerTargetsRB = prompt("Please do not leave blank and only enter a number.What is the players rank for AVG targets per game?");}
     if(playerTargetsRB>=3 && playerTargetsRB<=4){
         playerTotal+=1
     }if(playerTargetsRB>4 &&playerTargetsRB<=5){
         playerTotal+=2
     }if(playerTargetsRB>5){
         playerTotal+=3
     }else{playerTotal+=0}
     var gutFeeling=prompt("Gut feeling for this week yes or no?\nPlease enter yes or no");
     while(gutFeeling != "yes" && gutFeeling != "no"){
         gutFeeling = prompt("Please do not leave blank and only enter yes or no")
     }
     if(gutFeeling==="yes"){
         playerTotal+=1
     }if(gutFeeling==="no"){
         playerTotal+=0
     }
     var top5Lastweek=prompt("Was the player in the top 5 for Points last week for his position?\nPlease enter yes or no");
     while(top5Lastweek != "yes" && top5Lastweek != "no"){
         top5Lastweek = prompt("Please do not leave blank and only enter yes or no")
     }
     if(top5Lastweek==="yes"){
         playerTotal+=2
     }if(top5Lastweek){
         playerTotal+=0
     }
     return playerTotal
 }

 function qbAsessment(){
     var playerTotal=0;
     var hoa = prompt("Is the player(QB) home or away? Please enter h for home or a for away");
     //Validate prompt
     while (hoa.toLowerCase() != "h" && hoa.toLowerCase() != "a") {
         hoa = prompt("Please do not leave blank and only enter h for home and a for away\n*Remember to enter h for home or a for away");
     }
     if (hoa === "h") {
         playerTotal += 1
     }
     var posVsD = prompt("What is the Defense rank again QB? Please only enter a number between 1-16.");
     // Validate prompt
     while (posVsD === "" || isNaN(posVsD)) {
         posVsD = prompt("Please do not leave blank and only enter a number between 1-16")
     }if (posVsD >= 1 && posVsD <= 3) {
         playerTotal += 6
     }if (posVsD >= 4 && posVsD <= 6) {
         playerTotal += 5
     }if (posVsD >= 7 && posVsD <= 9) {
         playerTotal += 4
     }if (posVsD >= 10 && posVsD <= 13) {
         playerTotal += 3
     }if (posVsD >= 14 && posVsD <= 16) {
         playerTotal += 2
     } else {
         playerTotal += 0
     }

     var posVsDTD = prompt("What is the defense rank for giving up passing TD??");
     while (posVsDTD === "" || isNaN(posVsDTD)) {
         posVsD = prompt("Please do not leave blank. What is the defense rank for giving up passing TD??")
     }
     if (posVsDTD >= 1 && posVsDTD <= 3) {
         playerTotal += 6
     }if (posVsDTD >= 4 && posVsDTD <= 6) {
         playerTotal += 5
     }if (posVsDTD >= 7 && posVsDTD <= 9) {
         playerTotal += 4
     }if (posVsDTD >= 10 && posVsDTD <= 13) {
         playerTotal += 3
     }if (posVsDTD >= 14 && posVsDTD <= 16) {
         playerTotal += 2
     } else {
         playerTotal += 0
     }

     var playerRankPPG = prompt("What is the player rank for Points Per Game?");
     while (playerRankPPG === "" || isNaN(playerRankPPG)) {
         playerRankPPG = prompt("Please do not leave blank and only enter a number.What is the player rank for Points Per Game?");}
     if (playerRankPPG >= 1 && playerRankPPG <= 3) {
         playerTotal += 6
     }if (playerRankPPG >= 4 && playerRankPPG <= 6) {
         playerTotal += 5
     }if (playerRankPPG >= 7 && playerRankPPG <= 9) {
         playerTotal += 4
     }if (playerRankPPG >= 10 && playerRankPPG <= 13) {
         playerTotal += 3
     }if (playerRankPPG >= 14 && playerRankPPG <= 16) {
         playerTotal += 2
     } else {
         playerTotal += 0
     }

     var playerProjectedPoints = prompt("What is the player rank for projected points?");
     while (playerProjectedPoints === "" || isNaN(playerProjectedPoints)) {
         playerProjectedPoints = prompt("Please do not leave blank and only enter a number.What is the player rank for Projected points?");}
     if (playerProjectedPoints >= 1 && playerProjectedPoints <= 3) {
         playerTotal += 6
     }if (playerProjectedPoints >= 4 && playerProjectedPoints <= 6) {
         playerTotal += 5
     }if (playerProjectedPoints >= 7 && playerProjectedPoints <= 9) {
         playerTotal += 4
     }if (playerProjectedPoints >= 10 && playerProjectedPoints <= 13) {
         playerTotal += 3
     }if (playerProjectedPoints >= 14 && playerProjectedPoints <= 16) {
         playerTotal += 2
     } else {
         playerTotal += 0
     }
     var gutFeeling=prompt("Gut feeling for this week yes or no?\nPlease enter yes or no");
     while(gutFeeling != "yes" && gutFeeling != "no"){
         gutFeeling = prompt("Please do not leave blank and only enter yes or no")
     }
     if(gutFeeling==="yes"){
         playerTotal+=1
     }if(gutFeeling==="no"){
         playerTotal+=0
     }
     var top5Lastweek=prompt("Was the player in the top 5 for Points last week for his position?\nPlease enter yes or no");
     while(top5Lastweek != "yes" && top5Lastweek != "no"){
         top5Lastweek = prompt("Please do not leave blank and only enter yes or no")
     }
     if(top5Lastweek==="yes"){
         playerTotal+=2
     }if(top5Lastweek){
         playerTotal+=0
     }
     return playerTotal
 }



