

//This is the function of my Ternary Operator
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "Lol, you are too young":"I guess you are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote!";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

//Jack has too much money and should give me some
var Jack = new Vehicle("Dodge", "Viper", "2020", "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", "2019", "White and Black");
var Erik = new Vehicle("Ford", "Pinto", "1971", "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

// New and This
function thisFunction() {
    document.getElementById("New_and_This").innerHTML = "New and This?"
}

// This 
function Computer(CPU, GPU, RAM, VRAM) {
    this.cpuName = CPU;
    this.gpuName = GPU;
    this.ramName = RAM;
    this.vramName = VRAM;
}

//This is the nested function that I wrote
function nested_Function() {
    document.getElementById("Nested_Function").innerHTML = nested_Function();
    function nested_Function() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}