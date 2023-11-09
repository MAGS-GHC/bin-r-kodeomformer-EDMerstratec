function checkDeci(block) {
    let checkVal = "ipDeci" + block;
    checkVal = document.getElementById(checkVal).value
    if (checkVal >= 0 && checkVal <= 255) {
        convertDeci(checkVal,block);
    }
    else {
        checkVal = "ipBinary" + block;
        document.getElementById(checkVal).value = "NaN; 0-255 only"
    }
}

function convertDeci(num, block) { //number to convert, block to insert
    let binaryNum = ""; //reset
    for (let i = 7; i >= 0; i--) { //8 bits, 8 iterations
        if (num >= (2**i)) { //check against 128, 64, etc. 2**i
            num -= (2**i)
            binaryNum += "1";
        }
        else {
            binaryNum += "0";
        }
    }
    block = "ipBinary" + block
    document.getElementById(block).value = binaryNum //return new binary
}

function convertBinary() {
    let a = [1,0,0,1,0,0,1,0]
    let deciSum = 0
    for (let i = 0; i < a.length; i++) {
        deciSum += (a[i] * (2**(a.length - 1 - i)));
    }
    console.log(deciSum)
}