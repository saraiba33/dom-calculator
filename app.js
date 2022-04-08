const operators = document.querySelectorAll(".operator")
const screen = document.querySelector("#screen")
const clearButton = document.querySelector("#clear")
const allNumbers = document.querySelectorAll("span:not(.operator)");

function errorMessage() {
    screen.textContent = "Error"
}


allNumbers.forEach(number => {
    number.addEventListener("click", (event) => {
        switch (screen.textContent) {
            case "Error":
                errorMessage()
                break;
            default:
                screen.textContent += event.target.textContent
        }
    })
})

// if (screen.textContent === "Error") {
//     return;
// } else {
//     screen.textContent += event.target.textContent
// }

// operators.forEach(operator => {
//     operator.addEventListener("click", (event) => {
//         if (operator.textContent === "=") {
//             screen.textContent = eval(screen.textContent)
//         } else if (screen.textContent === "") {
//             errorMessage()
//         } else if (screen.textContent === "Error") {
//             return;
//         } else if (operator.textContent === "x") {
//             screen.textContent += "*"
//         } else if (operator.textContent === "÷") {
//             screen.textContent += "/"
//         } else {
//             screen.textContent += event.target.innerText
//         }
//     })
// })

operators.forEach(operator => {
    operator.addEventListener("click", (event) => {
        switch (operator.textContent) {
            case "=":
                screen.textContent = eval(screen.textContent)
                break;
            case "x":
                screen.textContent += "*"
                break;
            case "÷":
                screen.textContent += "/"
                break;

            default:
                screen.textContent += event.target.textContent
        }
        switch (screen.textContent) {
            case "":
                errorMessage()
            case "Infinity":
                errorMessage()
                break;
            case "Error":
                errorMessage()
                break;
        }
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