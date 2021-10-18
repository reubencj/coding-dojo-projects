console.log("page loaded...");

function mouseOverVideoPlay(element) {


    element.play();
    element.muted = true;


}

function mouseOutVideoPause(element) {
    element.pause();
}