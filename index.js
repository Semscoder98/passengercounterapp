// camelCase - Capitalize first letter of second worn and not first letter of the first word
let saveEl = document.getElementById("save-el")
let countEL = document.getElementById("count-el") //pass in aurgument 
let count = 0

console.log(saveEl)

function increment() { 
    count += 1
    countEL.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEL.textContent = 0
    count = 0

}

console.log("Let start counting passengers in the pack")
