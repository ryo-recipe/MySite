const TOPBTN = document.getElementById('topBtn')

window.onscroll = function () {
    let getY = window.pageYOffset
    if (getY > 608) {
        TOPBTN.classList.add('is-fadein');
    } else {
        TOPBTN.classList.remove('is-fadein');
    }
}

