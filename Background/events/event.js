/**
 * Created by doremonsun on 6/22/17.
 */
/*****************
 * In this lesson, we'll add event listeners to html elements. When the users click, focus, blur, press a key, or move their mouse, javascript will get notified and we can make the webpage change.
 * Listening to Javascript events is a bread and butter task for web development and web developers.
 *
 * Javascript Events:
 * click
 * mouseenter
 * mouseleave
 * mousedown
 * mouseup
 * mousemove
 * keydown
 * keyup
 * blur
 * focus
 *******************/

// Add numbers
var numOne = document.getElementById("num-one")
var numTwo = document.getElementById("num-two")
var addSum = document.getElementById("add-sum")
function add() {
    var one = parseFloat(numOne.value) || 0
    var two = parseFloat(numTwo.value) || 0
    addSum.innerHTML = `Sum is: ${one + two}`
}
// use method
numOne.addEventListener("input", add)
numTwo.addEventListener("input", add)


// Pictures
var simon = document.getElementById("simon")
var bruce = document.getElementById("bruce")
var ben = document.getElementById("ben")

function show() {
    var allImages = document.querySelectorAll("img")

    for (var i = 0; i < allImages.length; i++) {
        allImages[i].className = "hide"
    }

    console.log(this);
    var picId = this.attributes["data-img"].value
    var pic = document.getElementById(picId)
    if (pic.className === "hide") {
        pic.className = ""
    } else {
        pic.className = "hide"
    }
}
simon.addEventListener("click", show)
bruce.addEventListener("click", show)
ben.addEventListener("click", show)

/**
 * Can not use syntax ES6 on browser as: let, arrow function.
 * See list of all javascript events here: https://developer.mozilla.org/en-US/docs/Web/Events
 */