function checkDeci(block) {
    let blockVal = "ipDeci" + block;
    let checkVal = document.getElementById(blockVal).value
    if (checkVal >= 0 && checkVal <= 255) {
        convertDeci(checkVal,block);
    }
    else {
        document.getElementById(blockVal).value = "NaN; 0-255 only"
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

function checkBinary(block){
    let blockVal = "ipBinary" + block
    checkVal = document.getElementById(blockVal).value
    if (checkVal.length === 8 && /^[0-1]*$/.test(checkVal)) {
        convertBinary(checkVal,block);
    }
    else {
        document.getElementById(blockVal).value = "8 length binary only"
    }
}

function convertBinary(binaryVal,block) {
    let blockVal = "ipDeci" + block;
    let deciSum = 0
    for (let i = 0; i < 8; i++) {
        deciSum += (binaryVal[i] * (2**(7 - i)));
    }
    document.getElementById(blockVal).value = deciSum
}