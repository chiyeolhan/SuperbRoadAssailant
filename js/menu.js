var menutheme = new Audio("./resources/sounds/menu/menutheme.mp3")
menutheme.volume = 0.5
menutheme.loop = true
menutheme.playbackRate = 1.2
menutheme.play()


var playbtnsound = new Audio("./resources/sounds/menu/SFII_01 - Mode Select.wav")
var btn = document.getElementById("playbtn").addEventListener("click", () => {
    menutheme.pause()
    playbtnsound.play()
    setTimeout(() => {
        window.location = "game.html"
    }, 1000)
})