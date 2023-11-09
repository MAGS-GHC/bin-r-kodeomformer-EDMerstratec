//let octet1 = "01001001" //as string
const octets = [10010010]
let deci1 = 192

function convertDeci() {
    let a = 27

    for (let i = 7; i >= 0; i--) {
        if (a >= (2**i)) {
            a -= (2**i)
            console.log(1)
        }
        else {
            console.log(0)
        }
    }
}

function convertBinary() {
    let a = [1,0,0,1,0,0,1,0]
    let deciSum = 0
    for (let i = 0; i < a.length; i++) {
        deciSum += (a[i] * (2**(a.length - 1 - i)));
    }
    console.log(deciSum)
}

document.getElementById("testVar").innerHTML = "12"