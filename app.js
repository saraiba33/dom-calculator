const operators = document.querySelectorAll(".operator")
const screen = document.querySelector("#screen")
const clearButton = document.querySelector("#clear")
const allNumbers = document.querySelectorAll("span:not(.operator)");


allNumbers.forEach(number => {
    number.addEventListener("click", event => {
        if (screen.textContent === "Error") {
            screen.textContent = "Error"
        } else {
            screen.textContent += event.target.textContent
        }
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", (event) => {
        if (operator.textContent === "=") {
            const result = eval(screen.textContent)
            screen.textContent = result === Infinity || isNaN(result) ? "Error" : result
        } else if (screen.textContent === "") {
            screen.textContent = "Error"
        } else if (screen.textContent === "Error") {
            screen.textContent = "Error"
        } else if (operator.textContent === "x") {
            screen.textContent += "*"
        } else if (operator.textContent === "÷") {
            screen.textContent += "/"
        } else {
            screen.textContent += event.target.innerText
        }

    })
})

clearButton.addEventListener("click", () => {
    screen.textContent = ""
})