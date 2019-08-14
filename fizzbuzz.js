function isFloat_number(num){
    return Number(num) === num && num % 1 !== 0;
}

function fizzbuzz() {
  var i = 1;
  for (i = 1; i < 101; i++) {
    if ((Number.isInteger(i / 5)) && (Number.isInteger(i / 3))) {
      console.log("fizzbuzz");
    } else if ((Number.isInteger(i / 5)) && (isFloat_number(i / 3))) {
      console.log("buzz");
    } else if ((Number.isInteger(i / 3)) && (isFloat_number(i / 5))) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}
