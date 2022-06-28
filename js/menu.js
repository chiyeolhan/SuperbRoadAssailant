var playbtnsound = new Audio("./resources/sounds/menu/SFII_01 - Mode Select.wav")
var btn = document.getElementById("playbtn").addEventListener("click", () => {
    menutheme.pause()
    playbtnsound.play()
    setTimeout(() => {
        window.location = "game.html"
    }, 1000)
})