/**
 * The code randomly positions a button on the screen when clicked and opens a YouTube video when
 * another function is called.
 */
const element = document.getElementById("btn-no");
element.addEventListener("click", () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    element.style.position = "absolute";
    element.style.left = x + "px";
    element.style.top = y + "px";
});

function openYoutube() {
    window.open("https://www.youtube.com/watch?v=Yo2GdogCAZc");
}

/* This JavaScript code is adding event listeners to the window object for the 'blur' and 'focus'
events. */
let docTitle = document.title

window.addEventListener('blur', () => {
    document.title = 'Eeeeeeii.... volta aqui!'
})

window.addEventListener('focus', () => {
    document.title = docTitle
})