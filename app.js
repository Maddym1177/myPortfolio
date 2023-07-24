
// My portfolio

// button
function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var element = document.body;

    if (checkBox.checked == true) {
        element.classList.toggle("dark-mode");
    }
    else if (checkBox.checked == false) {
        element.classList.toggle("light-mode");
    }
}
