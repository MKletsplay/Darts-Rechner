var currentInputId = "demo1"

 let clickCount = 0;
 
 const btn0 = document.getElementById("calculateBtn");

let playerCounter = 0;

let count = 0; //Leg Spieler 1 counter (Spieler 1)
let counter = 0; // Set counter (Spieler 1)
const arry1 =[] // Array (Spieler 1)

let count2 = 0; //Leg counter (Spieler 2)
let counter2 = 0; //Set counter (Spieler 2)
const arry2 =[] // Array (Spieler 2)

let count3 = 0; //Leg counter (Spieler 3)
let counter3 = 0; //Set counter (Spieler 3)
const arry3 =[] // Array (Spieler 3)

let count4 = 0; //Leg counter (Spieler 4)
let counter4 = 0; //Set counter (Spieler 4)
const arry4 =[] // Array (Spieler 4)




    function calc() {

        playerCounter+=1;

let lengthcounter = 0;
        

        if (playerCounter == 1){

    
            //Gesamtergebnis ausrechen  
            const firstNumber = document.getElementById("demo1");
            const secondNumber = document.getElementById("demo2");
            const thirdNumber = document.getElementById("demo3");
            const resultOutput = document.getElementById("resultOutput");



                
 
            const fullpoints = document.getElementById("player1punkte_span");
            let sum = Number(firstNumber.value) + Number(secondNumber.value) + Number(thirdNumber.value);
            resultOutput.textContent =  sum;

            document.getElementById("player1punkte_span").textContent= Number(fullpoints.textContent) - sum;
            document.getElementById("playerpunkte1").innerHTML= " -" +sum;
                
            /*let arry1_sum = document.getElementById("player1punkte_span").textContent;
            console.log(arry1_sum)
            arry1.push(arry1_sum)
            console.log("Spieler 1 Array " + arry1 )
            console.log(arry1[arry1.length-2])
            //let lengthcounter = 0;
            console.log(arry1[arry1.length - lengthcounter])
            console.log(lengthcounter)
            */

            //Legs hinzufügen
            const spanValue = parseInt(document.getElementById("player1punkte_span").textContent, 10);
        
            if (spanValue == 0) {
                count+=1;
                document.getElementById("player1legs").innerHTML = count;
                document.getElementById("player1punkte_span").innerHTML = 501;
            }  else if (spanValue <= 0) {
                /*count+=1;
                document.getElementById("player1legs").innerHTML = count;
                document.getElementById("player1punkte_span").innerHTML = 501;
                console.log(s)
                */
                //lengthcounter+=1;
                //document.getElementById("player1punkte_span").innerHTML = arry1[arry1.length - lengthcounter];
                count+=1;
                document.getElementById("player1legs").innerHTML = count;
                document.getElementById("player1punkte_span").innerHTML = 501;
            } 
      
      
      
                const player1legs = parseInt(document.getElementById("player1legs").textContent, 10);
            
                //Sets prüfen und hinzufügen
            if(player1legs == 3){
                counter++;
                count++;
                
                document.getElementById("player1sets").innerHTML = counter; //ein Set hinzufügen
                document.getElementById("player1punkte_span").innerHTML = 501; //Punkte zurücksetzen
                document.getElementById("player1legs").innerHTML = count=0; //Legs zurücksetzen
            } 
        
    
            
            
            
            
            //Setanzahl überprüfen
            let SetAnzahl =  document.getElementById("SetsInput").value;
            let player1setss =  document.getElementById("player1sets").innerHTML;
                
                
            if(SetAnzahl === player1setss){
                document.getElementById("player1").style.backgroundColor = "red";      
            };








        } else if (playerCounter ==2){
            


            //Gesamtergebnis ausrechen  
            const firstNumber = document.getElementById("demo1");
            const secondNumber = document.getElementById("demo2");
            const thirdNumber = document.getElementById("demo3");
            const resultOutput = document.getElementById("resultOutput");



            

              
            const fullpoints = document.getElementById("player2punkte_span");
            let sum = Number(firstNumber.value) + Number(secondNumber.value) + Number(thirdNumber.value);
            resultOutput.textContent =  sum;

            document.getElementById("player2punkte_span").textContent= Number(fullpoints.textContent) - sum;
            document.getElementById("playerpunkte2").innerHTML= " -" +sum;
            
            arry2.push(sum)
            console.log(arry2[arry2.length-1])
            console.log(arry2)
    
    
            //Legs hinzufügen
            const spanValue2 = parseInt(document.getElementById("player2punkte_span").textContent, 10);
            
            if (spanValue2 == 0) {
            count2++;
            document.getElementById("player2legs").innerHTML = count2;
            document.getElementById("player2punkte_span").innerHTML = 501;

            } else if (spanValue2 < 0) {
            count2++;
            document.getElementById("player2legs").innerHTML = count2;
            document.getElementById("player2punkte_span").innerHTML = 501;
            }
        
        
        
            const player2legs = parseInt(document.getElementById("player2legs").textContent, 10);

        
            if(player2legs == 3){
                counter2++;
                count2++;

                document.getElementById("player2sets").innerHTML = counter2; //ein Set hinzufügen
                document.getElementById("player2punkte_span").innerHTML = 501; //Punkte zurücksetzen
                document.getElementById("player2legs").innerHTML = count2=0; //Legs zurücksetzen
            }
           
            
            let SetAnzahl =  document.getElementById("SetsInput").value;
            let player2setss =  document.getElementById("player2sets").innerHTML;
            
            
            if(SetAnzahl == player2setss){
                document.getElementById("player2").style.backgroundColor = "red";      
            }
        

            



        }if (playerCounter == 3){

    
            //Gesamtergebnis ausrechen  
            const firstNumber = document.getElementById("demo1");
            const secondNumber = document.getElementById("demo2");
            const thirdNumber = document.getElementById("demo3");
            const resultOutput = document.getElementById("resultOutput");



                
 
            const fullpoints = document.getElementById("player3punkte_span");
            let sum = Number(firstNumber.value) + Number(secondNumber.value) + Number(thirdNumber.value);
            resultOutput.textContent =  sum;

            document.getElementById("player3punkte_span").textContent= Number(fullpoints.textContent) - sum;
            document.getElementById("playerpunkte3").innerHTML= " -" +sum;
                

            arry3.push(sum)
            console.log(arry3[arry3.length-1])
            console.log(arry3)


            //Legs hinzufügen
            const spanValue = parseInt(document.getElementById("player3punkte_span").textContent, 10);
        
            if (spanValue <= 0) {
                count3+=1;
                document.getElementById("player3legs").innerHTML = count3;
                document.getElementById("player3punkte_span").innerHTML = 501;
            }  else if (spanValue < 0) {
                count3+=1;
                document.getElementById("player3legs").innerHTML = count3;
                document.getElementById("player3punkte_span").innerHTML = 501;
            }
      
      
      
                const player3legs = parseInt(document.getElementById("player3legs").textContent, 10);
            
                //Sets prüfen und hinzufügen
            if(player3legs == 3){
                counter3++;
                count3++;
                
                document.getElementById("player3sets").innerHTML = counter3; //ein Set hinzufügen
                document.getElementById("player3punkte_span").innerHTML = 501; //Punkte zurücksetzen
                document.getElementById("player3legs").innerHTML = count3=0; //Legs zurücksetzen
            } 
        
    
            
            
            
            
            //Setanzahl überprüfen
            let SetAnzahl =  document.getElementById("SetsInput").value;
            let player3setss =  document.getElementById("player3sets").innerHTML;
                
                
            if(SetAnzahl === player3setss){
                document.getElementById("player3").style.backgroundColor = "red";      
            };

    


            

        } if (playerCounter == 4){

    
            //Gesamtergebnis ausrechen  
            const firstNumber = document.getElementById("demo1");
            const secondNumber = document.getElementById("demo2");
            const thirdNumber = document.getElementById("demo3");
            const resultOutput = document.getElementById("resultOutput");



            

            const fullpoints = document.getElementById("player4punkte_span");
            let sum = Number(firstNumber.value) + Number(secondNumber.value) + Number(thirdNumber.value);
            resultOutput.textContent =  sum;

            document.getElementById("player4punkte_span").textContent= Number(fullpoints.textContent) - sum;
            document.getElementById("playerpunkte4").innerHTML= " -" +sum;
            

            arry4.push(sum)
            console.log(arry4[arry4.length-1])
            console.log(arry4)


            //Legs hinzufügen
            const spanValue = parseInt(document.getElementById("player4punkte_span").textContent, 10);
    
            if (spanValue <= 0) {
                count4+=1;
                document.getElementById("player4legs").innerHTML = count4;
                document.getElementById("player4punkte_span").innerHTML = 501;
            }  else if (spanValue < 0) {
                count4+=1;
                document.getElementById("player4legs").innerHTML = count3;
                document.getElementById("player4punkte_span").innerHTML = 501;
            }
  
  
  
            const player4legs = parseInt(document.getElementById("player4legs").textContent, 10);
        
            //Sets prüfen und hinzufügen
            if(player4legs == 3){
            counter4++;
            count4++;
            
            document.getElementById("player4sets").innerHTML = counter4; //ein Set hinzufügen
            document.getElementById("player4punkte_span").innerHTML = 501; //Punkte zurücksetzen
            document.getElementById("player4legs").innerHTML = count4=0; //Legs zurücksetzen
            } 
        

        
        
        
        
            //Setanzahl überprüfen
            let SetAnzahl =  document.getElementById("SetsInput").value;
            let player4setss =  document.getElementById("player4sets").innerHTML;
            
            
            if(SetAnzahl === player4setss){
                document.getElementById("player4").style.backgroundColor = "red";      
            };




            playerCounter = 0;

        } else {
            console.log(`aSAD ${sum}`)
        }




}


































    
 





//Eingaben zurücksetzen
resetValue()
function resetValue() {

    document.getElementById("demo1").value = "" ;
    document.getElementById("demo2").value = "" ;
    document.getElementById("demo3").value = "" ;

}

    
     

// 20er Reihe
myfunctionD20()
function myfunctionD20() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 40 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD20;
    document.getElementById("demo2").onclick =  myfunctionD20;
    document.getElementById("demo3").onclick =  myfunctionD20;
}

         
myfunction20()
function myfunction20() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 20 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction20;
    document.getElementById("demo2").onclick =  myfunction20;
    document.getElementById("demo3").onclick =  myfunction20;
}


myfunctionT20()
function myfunctionT20() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 60 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT20;
    document.getElementById("demo2").onclick =  myfunctionT20;
    document.getElementById("demo3").onclick =  myfunctionT20;
}

myFunction20()
function myFunction20() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 20 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction20;
    document.getElementById("demo2").onclick =  myFunction20;
    document.getElementById("demo3").onclick =  myfunction20;
}




// 1er Reihe
myfunctionD1()
function myfunctionD1() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 2 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD1;
    document.getElementById("demo2").onclick =  myfunctionD1;
    document.getElementById("demo3").onclick =  myfunctionD1;
}

         
myfunction1()
function myfunction1() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 1 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction1;
    document.getElementById("demo2").onclick =  myfunction1;
    document.getElementById("demo3").onclick =  myfunction1;
}


myfunctionT1()
function myfunctionT1() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 3 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT1;
    document.getElementById("demo2").onclick =  myfunctionT1;
    document.getElementById("demo3").onclick =  myfunctionT1;
}

myFunction1()
function myFunction1() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 1 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction1;
    document.getElementById("demo2").onclick =  myFunction1;
    document.getElementById("demo3").onclick =  myFunction1;
}




// 18er Reihe
myfunctionD18()
function myfunctionD18() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 36 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD18;
    document.getElementById("demo2").onclick =  myfunctionD18;
    document.getElementById("demo3").onclick =  myfunctionD18;
}

         
myfunction18()
 function myfunction18() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 18 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    ocument.getElementById("demo1").onclick =  myfunction18;
    document.getElementById("demo2").onclick =  myfunction18;
    document.getElementById("demo3").onclick =  myfunction18;
}


myfunctionT18()
function myfunctionT18() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 54 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT18;
    document.getElementById("demo2").onclick =  myfunctionT18;
    document.getElementById("demo3").onclick =  myfunctionT18;
}

myFunction18()
function myFunction18() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 18 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction18;
    document.getElementById("demo2").onclick =  myFunction18;
    document.getElementById("demo3").onclick =  myFunction18;
}




//4er Reihe 
myfunctionD4()
function myfunctionD4() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 8 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD4;
    document.getElementById("demo2").onclick =  myfunctionD4;
    document.getElementById("demo3").onclick =  myfunctionD4;
}

         
myfunction4()
 function myfunction4() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 4 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction4;
    document.getElementById("demo2").onclick =  myfunction4;
    document.getElementById("demo3").onclick =  myfunction4;
}


myfunctionT4()
function myfunctionT4() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 12 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT4;
    document.getElementById("demo2").onclick =  myfunctionT4;
    document.getElementById("demo3").onclick =  myfunctionT4;
}

myFunction4()
function myFunction4() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 4 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction4;
    document.getElementById("demo2").onclick =  myFunction4;
    document.getElementById("demo3").onclick =  myFunction4;
}




//13er Reihe
myfunctionD13()
function myfunctionD13() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 26 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD13;
    document.getElementById("demo2").onclick =  myfunctionD13;
    document.getElementById("demo3").onclick =  myfunctionD13;
}

         
myfunction13()
 function myfunction13() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 13 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction13;
    document.getElementById("demo2").onclick =  myfunction13;
    document.getElementById("demo3").onclick =  myfunction13;
}


myfunctionT13()
function myfunctionT13() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 39 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT13;
    document.getElementById("demo2").onclick =  myfunctionT13;
    document.getElementById("demo3").onclick =  myfunctionT13;
}

myFunction13()
function myFunction13() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 13 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction13;
    document.getElementById("demo2").onclick =  myFunction13;
    document.getElementById("demo3").onclick =  myFunction13;
}




//6er Reihe
myfunctionD6()
function myfunctionD6() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 12 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD6;
    document.getElementById("demo2").onclick =  myfunctionD6;
    document.getElementById("demo3").onclick =  myfunctionD6;
}

         
myfunction6()
 function myfunction6() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 6 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction6;
    document.getElementById("demo2").onclick =  myfunction6;
    document.getElementById("demo3").onclick =  myfunction6;
}


myfunctionT6()
function myfunctionT6() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 18 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT6;
    document.getElementById("demo2").onclick =  myfunctionT6;
    document.getElementById("demo3").onclick =  myfunctionT6;
}

myFunction6()
function myFunction6() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 6 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction6;
    document.getElementById("demo2").onclick =  myFunction6;
    document.getElementById("demo3").onclick =  myFunction6;
}




//10er Reihe
myfunctionD10()
function myfunctionD10() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 20 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD10;
    document.getElementById("demo2").onclick =  myfunctionD10;
    document.getElementById("demo3").onclick =  myfunctionD10;
}

         
myfunction10()
 function myfunction10() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 10 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction10;
    document.getElementById("demo2").onclick =  myfunction10;
    document.getElementById("demo3").onclick =  myfunction10;
}


myfunctionT10()
function myfunctionT10() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 30 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT10;
    document.getElementById("demo2").onclick =  myfunctionT10;
    document.getElementById("demo3").onclick =  myfunctionT10;
}

myFunction10()
function myFunction10() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 10 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction10;
    document.getElementById("demo2").onclick =  myFunction10;
    document.getElementById("demo3").onclick =  myFunction10;
}




//15er Reihe
myfunctionD15()
function myfunctionD15() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 30 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD15;
    document.getElementById("demo2").onclick =  myfunctionD15;
    document.getElementById("demo3").onclick =  myfunctionD15;
}

         
myfunction15()
 function myfunction15() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 15 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction15;
    document.getElementById("demo2").onclick =  myfunction15;
    document.getElementById("demo3").onclick =  myfunction15;
}


myfunctionT15()
function myfunctionT15() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 45 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT15;
    document.getElementById("demo2").onclick =  myfunctionT15;
    document.getElementById("demo3").onclick =  myfunctionT15;
}

myFunction15()
function myFunction15() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 15 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction15;
    document.getElementById("demo2").onclick =  myFunction15;
    document.getElementById("demo3").onclick =  myFunction15;
}




//2er Reihe
myfunctionD2()
function myfunctionD2() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 4 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD2;
    document.getElementById("demo2").onclick =  myfunctionD2;
    document.getElementById("demo3").onclick =  myfunctionD2;
}

         
myfunction2()
 function myfunction2() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 2 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction2;
    document.getElementById("demo2").onclick =  myfunction2;
    document.getElementById("demo3").onclick =  myfunction2;
}


myfunctionT2()
function myfunctionT2() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 6 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT2;
    document.getElementById("demo2").onclick =  myfunctionT2;
    document.getElementById("demo3").onclick =  myfunctionT2;
}

myFunction2()
function myFunction2() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 2 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction2;
    document.getElementById("demo2").onclick =  myFunction2;
    document.getElementById("demo3").onclick =  myFunction2;
}




//17er Reihe
myfunctionD17()
function myfunctionD17() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 34 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD17;
    document.getElementById("demo2").onclick =  myfunctionD17;
    document.getElementById("demo3").onclick =  myfunctionD17;
}

         
myfunction17()
 function myfunction17() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 17 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction17;
    document.getElementById("demo2").onclick =  myfunction17;
    document.getElementById("demo3").onclick =  myfunction17;
}


myfunctionT17()
function myfunctionT17() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 51 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT17;
    document.getElementById("demo2").onclick =  myfunctionT17;
    document.getElementById("demo3").onclick =  myfunctionT17;
}

myFunction17()
function myFunction17() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 17 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction17;
    document.getElementById("demo2").onclick =  myFunction17;
    document.getElementById("demo3").onclick =  myFunction17;
}




//3er Reihe
myfunctionD3()
function myfunctionD3() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 6 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD3;
    document.getElementById("demo2").onclick =  myfunctionD3;
    document.getElementById("demo3").onclick =  myfunctionD3;
}

         
myfunction3()
 function myfunction3() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 3 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction3;
    document.getElementById("demo2").onclick =  myfunction3;
    document.getElementById("demo3").onclick =  myfunction3;
}


myfunctionT3()
function myfunctionT3() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 9 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT3;
    document.getElementById("demo2").onclick =  myfunctionT3;
    document.getElementById("demo3").onclick =  myfunctionT3;
}

myFunction3()
function myFunction3() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 3 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction3;
    document.getElementById("demo2").onclick =  myFunction3;
    document.getElementById("demo3").onclick =  myFunction3;
}




//19er Reihe
myfunctionD19()
function myfunctionD19() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 38 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD19;
    document.getElementById("demo2").onclick =  myfunctionD19;
    document.getElementById("demo3").onclick =  myfunctionD19;
}

         
myfunction19()
 function myfunction19() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 19 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction19;
    document.getElementById("demo2").onclick =  myfunction19;
    document.getElementById("demo3").onclick =  myfunction19;
}


myfunctionT19()
function myfunctionT19() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 57 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT19;
    document.getElementById("demo2").onclick =  myfunctionT19;
    document.getElementById("demo3").onclick =  myfunctionT19;
}

myFunction19()
function myFunction19() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 19 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction19;
    document.getElementById("demo2").onclick =  myFunction19;
    document.getElementById("demo3").onclick =  myFunction19;
}




//7er Reihe
myfunctionD7()
function myfunctionD7() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 14 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD7;
    document.getElementById("demo2").onclick =  myfunctionD7;
    document.getElementById("demo3").onclick =  myfunctionD7;
}

         
myfunction7()
 function myfunction7() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 7 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction7;
    document.getElementById("demo2").onclick =  myfunction7;
    document.getElementById("demo3").onclick =  myfunction7;
}


myfunctionT7()
function myfunctionT7() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 21 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT7;
    document.getElementById("demo2").onclick =  myfunctionT7;
    document.getElementById("demo3").onclick =  myfunctionT7;
}

myFunction7()
function myFunction7() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 7 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction7;
    document.getElementById("demo2").onclick =  myFunction7;
    document.getElementById("demo3").onclick =  myFunction7;
}




//16er Reihe
myfunctionD16()
function myfunctionD16() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 32 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD16;
    document.getElementById("demo2").onclick =  myfunctionD16;
    document.getElementById("demo3").onclick =  myfunctionD16;
}

         
myfunction16()
 function myfunction16() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 16 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction16;
    document.getElementById("demo2").onclick =  myfunction16;
    document.getElementById("demo3").onclick =  myfunction16;
}


myfunctionT16()
function myfunctionT16() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 48 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT16;
    document.getElementById("demo2").onclick =  myfunctionT16;
    document.getElementById("demo3").onclick =  myfunctionT16;
}

myFunction16()
function myFunction16() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 16 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction16;
    document.getElementById("demo2").onclick =  myFunction16;
    document.getElementById("demo3").onclick =  myFunction16;
}




//8er Reihe
myfunctionD8()
function myfunctionD8() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 16 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD8;
    document.getElementById("demo2").onclick =  myfunctionD8;
    document.getElementById("demo3").onclick =  myfunctionD8;
}

         
myfunction8()
 function myfunction8() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 8 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction8;
    document.getElementById("demo2").onclick =  myfunction8;
    document.getElementById("demo3").onclick =  myfunction8;
}


myfunctionT8()
function myfunctionT8() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 24 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT8;
    document.getElementById("demo2").onclick =  myfunctionT8;
    document.getElementById("demo3").onclick =  myfunctionT8;
}

myFunction8()
function myFunction8() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 8 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction8;
    document.getElementById("demo2").onclick =  myFunction8;
    document.getElementById("demo3").onclick =  myFunction8;
}




//11er Reihe
myfunctionD11()
function myfunctionD11() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 22 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD11;
    document.getElementById("demo2").onclick =  myfunctionD11;
    document.getElementById("demo3").onclick =  myfunctionD11;
}

         
myfunction11()
 function myfunction11() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 11 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction11;
    document.getElementById("demo2").onclick =  myfunction11;
    document.getElementById("demo3").onclick =  myfunction11;
}


myfunctionT11()
function myfunctionT11() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 33 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT11;
    document.getElementById("demo2").onclick =  myfunctionT11;
    document.getElementById("demo3").onclick =  myfunctionT11;
}

myFunction11()
function myFunction11() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 11 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction11;
    document.getElementById("demo2").onclick =  myFunction11;
    document.getElementById("demo3").onclick =  myFunction11;
}




//14er Reihe
myfunctionD14()
function myfunctionD14() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 28 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD14;
    document.getElementById("demo2").onclick =  myfunctionD14;
    document.getElementById("demo3").onclick =  myfunctionD14;
}

         
myfunction14()
 function myfunction14() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 14 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction14;
    document.getElementById("demo2").onclick =  myfunction14;
    document.getElementById("demo3").onclick =  myfunction14;
}


myfunctionT14()
function myfunctionT14() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 51 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT14;
    document.getElementById("demo2").onclick =  myfunctionT14;
    document.getElementById("demo3").onclick =  myfunctionT14;
}

myFunction14()
function myFunction14() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 14 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction14;
    document.getElementById("demo2").onclick =  myFunction14;
    document.getElementById("demo3").onclick =  myFunction14;
}




//9er Reihe
myfunctionD9()
function myfunctionD9() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 18 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD9;
    document.getElementById("demo2").onclick =  myfunctionD9;
    document.getElementById("demo3").onclick =  myfunctionD9;
}

         
myfunction9()
 function myfunction9() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 9 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction9;
    document.getElementById("demo2").onclick =  myfunction9;
    document.getElementById("demo3").onclick =  myfunction9;
}


myfunctionT9()
function myfunctionT9() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 27 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT9;
    document.getElementById("demo2").onclick =  myfunctionT9;
    document.getElementById("demo3").onclick =  myfunctionT9;
}

myFunction9()
function myFunction9() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 9 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction9;
    document.getElementById("demo2").onclick =  myFunction9;
    document.getElementById("demo3").onclick =  myFunction9;
}




//12er Reihe
myfunctionD12()
function myfunctionD12() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 24 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD12;
    document.getElementById("demo2").onclick =  myfunctionD12;
    document.getElementById("demo3").onclick =  myfunctionD12;
}

         
myfunction12()
 function myfunction12() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 12 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction12;
    document.getElementById("demo2").onclick =  myfunction12;
    document.getElementById("demo3").onclick =  myfunction12;
}


myfunctionT12()
function myfunctionT12() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 36 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT12;
    document.getElementById("demo2").onclick =  myfunctionT12;
    document.getElementById("demo3").onclick =  myfunctionT12;
}

myFunction12()
function myFunction12() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 12 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction12;
    document.getElementById("demo2").onclick =  myFunction12;
    document.getElementById("demo3").onclick =  myFunction12;
}




//5er Reihe
myfunctionD5()
function myfunctionD5() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 10 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionD5;
    document.getElementById("demo2").onclick =  myfunctionD5;
    document.getElementById("demo3").onclick =  myfunctionD5;
}

         
myfunction5()
 function myfunction5() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 5 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";

    document.getElementById("demo1").onclick =  myfunction5;
    document.getElementById("demo2").onclick =  myfunction5;
    document.getElementById("demo3").onclick =  myfunction5;
}


myfunctionT5()
function myfunctionT5() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 15 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myfunctionT5;
    document.getElementById("demo2").onclick =  myfunctionT5;
    document.getElementById("demo3").onclick =  myfunctionT5;
}

myFunction5()
function myFunction5() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 5 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunction5;
    document.getElementById("demo2").onclick =  myFunction5;
    document.getElementById("demo3").onclick =  myFunction5;
}



//25er Kreis
myFunctionK25()
function myFunctionK25() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 25 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunctionK25;
    document.getElementById("demo2").onclick =  myFunctionK25;
    document.getElementById("demo3").onclick =  myFunctionK25;
}




//50er Kreis
myFunctionK50()
function myFunctionK50() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 50 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunctionK50;
    document.getElementById("demo2").onclick =  myFunctionK50;
    document.getElementById("demo3").onclick =  myFunctionK50;
}




//0er Kreis
myFunctionK0()
function myFunctionK0() {
            
    var currentInput = document.getElementById(currentInputId);
    currentInput.value = 0 ;
    currentInputId = (currentInputId == "demo1") ? "demo2" : (currentInputId == "demo2") ? "demo3" : "demo1";
            
    document.getElementById("demo1").onclick =  myFunctionK0;
    document.getElementById("demo2").onclick =  myFunctionK0;
    document.getElementById("demo3").onclick =  myFunctionK0;
}