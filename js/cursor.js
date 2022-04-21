const cursor = take_one(".cursor");
var timeout

document.addEventListener("mousemove", function(e) {
    let x = e.pageX
    let y = e.pageY

    cursor.style.top = y + "px"
    cursor.style.left = x + "px"
    cursor.style.display = "block"

    // cursor stopped
    function mouseStopped() {
        cursor.style.display = "none"
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000)
});

// cursor effects on mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});



// ZOOMING