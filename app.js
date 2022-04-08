const operators = document.querySelectorAll(".operator")
const screen = document.querySelector("#screen")
const clearButton = document.querySelector("#clear")
const allSpans = document.querySelectorAll("Span");

function addScreenContent() {
    screen.textContent += event.target.innerText
}

function errorMessage() {
    screen.textContent = "Error"
}


const allNumbers = [allSpans[15], allSpans[11], allSpans[12], allSpans[13], allSpans[7], allSpans[8], allSpans[9], allSpans[3], allSpans[4], allSpans[5]];
allNumbers.forEach(number => {
    number.addEventListener("click", (event) => {
        if (screen.textContent === "Error") {
            return;
        } else {
            addScreenContent()
        }
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", (event) => {
        if (operator.textContent === "=") {
            screen.textContent = eval(screen.textContent)
        } else if (screen.textContent === "") {
            errorMessage()
        } else if (screen.textContent === "Error") {
            return;
        } else if (operator.textContent === "x") {
            screen.textContent += "*"
        } else if (operator.textContent === "÷") {
            screen.textContent += "/"
        } else {
            addScreenContent()
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