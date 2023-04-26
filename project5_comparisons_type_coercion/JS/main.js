document.write("10" + 5);

function my_function()  {
    document.getElementById("Test").innerHTML = isNaN('This is a string');
}

document.write(2E310);

document.write(-3E310);

document.write(10 > 2);

document.write(10 < 2);

console.log(2 + 2);

console.log(42 > 23);

document.write(10 == 10);

document.write(3 == 11);

X = 10;
Y = 10;
document.write(X === Y);

A = 82;
B = "82";
document.write(A === B);

C = "Santa";
D = "Santa";
document.write(C === D);

E = "Clause";
D = "Elves";
document.write(E === D);

document.write(5 > 2 && 10 > 4);

document.write(5 > 10 && 10 > 4);

document.write(5 > 10 || 10 > 4);

document.write(5 > 10 || 10 > 20);

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}