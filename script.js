let inc = document.getElementById("count")
let sv = document.getElementById("entry")
count = 0

function increment(){
    count += 1
    inc.textContent = count
}

function save(){
    let countStr = count + " - "
    sv.textContent += countStr
    count = 0
    inc.textContent = count
}
    