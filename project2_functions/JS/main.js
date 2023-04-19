var button = document.getElementById("myButton"); //this is a reference to the button element

button.addEventListener("click", function() {   // Add an event listener for the "click" event
    console.log("Button clicked!");     // Do something when the button is clicked
  });

function myFunction() {         // This is the function that coincides with the p element
    var sentence = "I am learning"; 
    sentence += " a lot from AI!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

