document.write("10" + 5);

function my_function()  {
    document.getElementById("Test").innerHTML = isNaN('This is a string');
}

document.write(2E310);

document.write(-3E310); 

document.write(10 > 2);

document.write(10 < 2);

console.log(2 + 2);

console.log(42 > 23); // This is so the console displays the function

document.write(10 == 10); // This is to check if something is equal to the other

document.write(3 == 11);  // This will display as FALSE

X = 10;
Y = 10;
document.write(X === Y); // This is the compare function and should display TRUE

A = 82;
B = "82";
document.write(A === B); // This one should display FALSE

C = "Santa";
D = "Santa";
document.write(C === D); // This should be TRUE

E = "Clause";
D = "Elves";
document.write(E === D); // This should be FALSE

document.write(5 > 2 && 10 > 4); // This is for the AND function

document.write(5 > 10 && 10 > 4);

document.write(5 > 10 || 10 > 4); // This is for the OR function

document.write(5 > 10 || 10 > 20);

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}