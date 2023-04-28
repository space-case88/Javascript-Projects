//This is a loop exercise
let text = "This is some text so that I can say something other than Hello world.";
let length = text.length;

//This is a for loop exercise
var Instruments = ["Keyboard", "Guitar", "Drums", "Piano", "Marimba", "Cello", "Bass", "Violin", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// This is the array exercise
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

//This is to display constants
function constant_function() {
    const Musical_Instrument = {type:"Guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//This is the let keyword exercise
var X = 48(X);
{
    let X = 17;
    document.write("<br>"+ X);
}
document.write("<br>" + X);

//This is the return function exercise
function returnFunction(name) {
  return "Hello " + name + "!";
}

function displayResult() {
  var name = "Clarice";
  var result = returnFunction(name);
  document.getElementById("result").innerHTML = result;
}

//This is an example of object
function Car_Description() {
let car = {
    make: "Dodge ",
    model: "Viper ", 
    year: "2021 ",
    color: " Red ",
    description : function() {
        return "The car is a "  +  this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
}

//This is a continue and break statement (break statement)
function break_Demo() {
    let text = "";
    for (let i = 0; i< 38; i++) {
        if (i === 14) { break; }
        text += "The number is " + i + "<br>";
    }
document.getElementById("Break").innerHTML = text;
}

//Continue statement exercize
function Press_to_Continue() {
    for (let j = 5; j < 34; j++) {
        if (j === 15) { continue; }
        text += "The number is " + j + "<br>";
    }
document.getElementById("Continue").innerHTML = text;
}