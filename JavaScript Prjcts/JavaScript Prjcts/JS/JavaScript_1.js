function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        case "Black":
            Color_Output = "Black" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written in the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//Example of getElementsByClassName()
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

//Example of the use of canvas (a purple rectangle with a shadow)
var c1= document.getElementById("ID_Name");
var ctx1 = c1.getContext("2d");
ctx1.shadowBlur = 20;
ctx1.shadowColor = "black";
ctx1.fillStyle = "purple";
ctx1.fillRect(20, 20, 100, 80);

//Example of a gradient from left to right createLinearGradient()
var c2 = document.getElementById("ID_Name");
var ctx2 = c2.getContext("2d");

var grd = ctx2.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "yellow");

ctx2.fillStyle = grd;
ctx2.fillRect(20, 20, 150, 100);