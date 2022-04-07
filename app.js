const operators = document.querySelectorAll(".operator")
const plusButton = operators[4]
const screen = document.querySelector("#screen")

operators.forEach(operator => {
    operator.addEventListener("click", (event) => {
        screen.textContent += event.target.innerText
    })
})

const clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", (event) => {
        console.log(event)
        screen.textContent = ""
    })
    // clearButton.addEventListener('keydown', event => {
    //     if (event.key === "Escape") {
    //         return screen.textContent = ""
    //     }

// })