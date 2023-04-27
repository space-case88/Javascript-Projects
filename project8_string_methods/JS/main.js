function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//This will be My uppercase conversion.
function convertToUpperCase() {
    let originalText = document.getElementById("originalText").innerHTML;
    let modifiedText = originalText.toUpperCase();
    document.getElementById("modifiedText").innerHTML = modifiedText;
}

//This is my search method
function searchText() {
    let text = "Hello world, welcome to JavaScript.";
    let searchValue = document.getElementById("searchBox").value;
    let pos = text.search(searchValue);

    if (pos !== -1) {
      document.getElementById("result").innerHTML = `The search value was found at position ${pos}.`;
    } else {
      document.getElementById("result").innerHTML = "The search value was not found.";
    }
}

//This is an example of number method
function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//This is an example of the Precision method
function precision_Method() {
    var Y = 0956320.5675354875637;
    document.getElementById("Precision").innerHTML = Y.toPrecision(10);
}

//This is an example of toFixed method
function calculate() {
    let number = 123.456789;
    let decimalPlaces = 2;
    let fixedNumber = number.toFixed(decimalPlaces);
    document.getElementById("result").innerHTML = fixedNumber;
}

//This is an example of the valueOf method
function getValue() {
    const numberObj = new Number(10);
    const primitiveValue = numberObj.valueOf();
    document.getElementById("value").innerHTML = primitiveValue;
}

//This is an example of the contat() method
function concat_Names() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const fullName = firstName.concat(" ", lastName);
    document.getElementById("fullName").innerHTML = fullName;
}