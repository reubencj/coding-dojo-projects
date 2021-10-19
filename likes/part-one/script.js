var likeCount1 = 3;

function updateLike(idName) {

    likeCount1++;
    var likeCountText = document.querySelector(idName);
    likeCountText.innerText = likeCount1 + " like(s)";

}


