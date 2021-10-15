function loginClick(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }

}

function hideBtn(element) {
    element.style.visibility = "hidden";
}

var defOneLikes = 13;
var defTwoLikes = 37;

function updateLikes(element, defNum) {

    if (defNum == 1) {
        defOneLikes++;
        element.innerText = defOneLikes + " likes";
    } else if (defNum == 2) {
        defTwoLikes++;
        element.innerText = defTwoLikes + " likes";
    }
    alert("Ninja was liked");
}
