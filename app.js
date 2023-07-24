
// My portfolio

// navbar

document.querySelector('a').style.color = "orangered";

// Home
document.getElementById('myName').style.color = "orangered";
// About

// 
// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//  }

function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var element = document.body;

    // var text = document.getElementById("text");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        element.classList.toggle("dark-mode");
    }
    else if (checkBox.checked == false) {
        element.classList.toggle("light-mode");
    }
}
