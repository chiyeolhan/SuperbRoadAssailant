//gets the container text and the control button
var controlstext = document.getElementById("containertext")
var controlsbtn = document.getElementById("controls")

//gets the container text and the credits button
var creditstext = document.getElementById("creditstext")
var creditsbtn = document.getElementById("creditsbtn")


controlsbtn.addEventListener("click", () => {
    controlstext.classList.toggle("show")
})

creditsbtn.addEventListener("click", () => {
    creditstext.classList.toggle("showcredits")
})