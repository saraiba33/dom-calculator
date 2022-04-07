const screen = document.querySelector("#screen")
const allSpans = document.querySelectorAll("Span")
const clearButton = document.querySelector("#clear")


allSpans.forEach(span => {
    span.addEventListener("click", (event) => {
        screen.textContent += event.target.innerText
    })
})

clearButton.addEventListener("click", () => {
        screen.textContent = ""
    })
    // clearButton.addEventListener('keydown', event => {
    //     if (event.key === "Escape") {
    //         return screen.textContent = ""
    //     }

// })