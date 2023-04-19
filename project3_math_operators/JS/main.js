function addition_Function() { //This is my addition funtion
    var Addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + Addition;
}

function subtraction_Function() { // This is my subtraction function
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication_Function() { // This is my multiplication function
    var Multiplication = 6 * 8;
    document.getElementById("Math").innerHTML = "6 * 8 = " + Multiplication;
}

function division_Function() { // This is my Division function
    var Division = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + Division;
}

function more_Math() {  //This is my simple math funtion
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {   //This is my percentage function
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {  //This is my negation function
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

var X = 5; //This is my increment
X++;
document.write(X);

var X = 5.25;
X--;
document.write(X); //This is my decrement

window.alert(Math.random());    //These are random math alerts
window.alert(Math.random() * 100);

