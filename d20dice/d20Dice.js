/*jslint browser:true */
// Determines value of dice as they are rolled
function diceValue(min, max) {
    "use strict";
    return Math.floor((Math.random() * max) + min);
}

// Variables
var i = 0;
var formHasData = false;
var dice = Object.create(null);
dice.sides = [1, 4, 6, 8, 10, 12, 20, 100];
dice.num = new Array();
dice.sum = 0;
dice.each = new Array();
dice.high = null;
dice.low = (dice.sides[i] + 1);
dice.multi = 1;
dice.average = null;
dice.value = 0;

// Grabs values from the html form for the dice.num array
function getSides() {
	dice.sides[0] = document.sidesForm.sidesCust.value;
	dice.num[0] = document.sidesForm.numCust.value;
	dice.num[1] = document.sidesForm.d4.value;
	dice.num[2] = document.sidesForm.d6.value;
	dice.num[3] = document.sidesForm.d8.value;
	dice.num[4] = document.sidesForm.d10.value;
	dice.num[5] = document.sidesForm.d12.value;
	dice.num[6] = document.sidesForm.d20.value;
	dice.num[7] = document.sidesForm.d100.value;
}

Array.max = function( array ){
    return Math.max.apply( Math, array );
};
Array.min = function( array ){
    return Math.min.apply( Math, array );
};



function rollDice() {
    "use strict";
    getSides();
    for (var i = 0; i < dice.num.length; i++) {
        dice.sum = 0;
        dice.each.length = 0;
        dice.high = 0;
        dice.low = (dice.sides[i] + 1);
        dice.multi = 1;  

// Determines sum, all dice multiplied together and the value of each dice rolled        
        while (dice.num[i] > 0) {
            dice.value = diceValue(1, dice.sides[i]);
            dice.each.push(dice.value);
            dice.multi = dice.multi * dice.value;
            dice.sum = dice.sum + dice.value;            
            dice.num[i]--;
            }    

// Determines highest/lowest dice & the average of all dice rolled      
        dice.average = (dice.sum/dice.each.length);
        dice.low = Array.min(dice.each);
        dice.high = Array.max(dice.each);

// Places output in proper output areas.
      document.forms[2].elements[i].value = dice.sum;
      document.forms[3].elements[i].value = dice.each;
      document.forms[4].elements[i].value = dice.high;
      document.forms[5].elements[i].value = dice.low;
      document.forms[6].elements[i].value = dice.multi;
      document.forms[7].elements[i].value = dice.average;
      console.log("Sum " + dice.sides[i] +":" + dice.sum);
      console.log("Each " + dice.sides[i] +":" + dice.each);
      console.log("Length " + dice.each.length);
      console.log("High " + dice.sides[i] +":" + dice.high);
      console.log("Low " + dice.sides[i] +":" + dice.low);
      console.log("Multi " + dice.sides[i] +":" + dice.multi);
      console.log("Average " + dice.sides[i] +":" + dice.average);       
    }
// Tells the clearForm function that the tables have roll data in them    
  formHasData = true;
}

// Clears tables after a roll has occurred, otherwise does nothing
function clearForm() {
    if (formHasData) {
        for (var k = 0; i < 7; i++) {
            document.forms[2].elements[i].value = "";
            document.forms[3].elements[i].value = "";
            document.forms[4].elements[i].value = "";
            document.forms[5].elements[i].value = "";
            document.forms[6].elements[i].value = "";
            document.forms[7].elements[i].value = "";
        }
    }
}

