let numbersEl = document.getElementById("numbers-el")

let count = 0

function increase(){
    count += 1
    numbersEl.textContent = count
}

function decrease(){
    count -= 1
    numbersEl.textContent = count
}

let saveOutput = document.getElementById("save-output")

function save(){
    saveOutput.textContent += count + " - "
    count = 0
    numbersEl.textContent = count
}

function reset(){
    count = 0
    numbersEl.textContent = count
    saveOutput.textContent = "Previous entries: "
}
