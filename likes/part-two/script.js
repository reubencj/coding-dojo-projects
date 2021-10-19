var likeCount = [9, 12, 9];

function updateLike(idName, indexNum) {

    likeCount[indexNum]++;
    var likeCountText = document.querySelector(idName);
    likeCountText.innerText = likeCount[indexNum] + " like(s)";


}


