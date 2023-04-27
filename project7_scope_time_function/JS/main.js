// This is my Global Variable
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//This is my local variable
function Add_numbers_1() {
    var X = 10;                     //The variable is written within the function
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
    }
Add_numbers_1();
Add_numbers_2();

//This will display and error in the debugger because X is not defined
function Add_numbers_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2() {
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//this is an example of an "if" statement within a function
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//This is my if statement that I wrote
if (54 > 28) {
    alert("Yo, 54 is definitely more than 28, ya dingus!")
}

//This is my else statement
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "Congrats, you have rights!";
    }
    else {
        Vote = "You have no rights, ya dingus!"
    }
    document.getElementById("How old are you?").innerHTML = Vote;
}

//This is another example of "if" and "else"
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time, time to go!";
    }
    else if (Time >= 12 == Time > 18) {
        Reply = "It is afternoon you lazy bum!";
    }
    else {
        Reply = "It is Evening, Let's Party!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}