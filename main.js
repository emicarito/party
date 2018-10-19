var loquepasa = function showKey(e) {
    var audio = document.querySelector('#key' + e.keyCode);
    var number = document.querySelector('#number' + e.keyCode);

    if (audio) {
        audio.currentTime = 0;
        audio.play();
        number.classList.remove("green");
        number.classList.add("yellow");
        setTimeout(function () {
            number.classList.remove("yellow");
            number.classList.add("green");
        }, 200);
    }
}
document.addEventListener('keydown', loquepasa);