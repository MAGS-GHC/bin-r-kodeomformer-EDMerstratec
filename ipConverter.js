function checkDeci(block) {//block derived from input field
    let blockVal = "ipDeci" + block; //full text field ID
    let checkVal = document.getElementById(blockVal).value //actual input number
    if (checkVal >= 0 && checkVal <= 255) { //if valid 0-255, convert function called
        convertDeci(checkVal,block);
    }
    else { //error message
        document.getElementById(blockVal).value = "NaN; 0-255 only"
    }
}

function convertDeci(num, block) { //number to convert, block to insert
    let binaryNum = ""; //establish empty string to fill
    for (let i = 7; i >= 0; i--) { //8 bits, 8 iterations
        if (num >= (2**i)) { //check against 128, 64, etc. 2**i
            num -= (2**i) //if larger, subtract from num and append 1 to string
            binaryNum += "1";
        }
        else { //not activated bit
            binaryNum += "0";
        }
    }
    block = "ipBinary" + block //assign to correct text field
    document.getElementById(block).value = binaryNum //return new binary
}

function checkBinary(block){ //block set from input field
    let blockVal = "ipBinary" + block //full ID 
    let checkVal = document.getElementById(blockVal).value //actual input via ID
    if (checkVal.length === 8 && /^[0-1]*$/.test(checkVal)) { //octet of 1s and 0s only
        convertBinary(checkVal,block); //call conversion function
    }
    else { //input error message
        document.getElementById(blockVal).value = "8 length binary only"
    }
}

function convertBinary(binaryVal,block) {
    let blockVal = "ipDeci" + block;
    let deciSum = 0
    for (let i = 0; i < 8; i++) {//iterate over each bit
        deciSum += (binaryVal[i] * (2**(7 - i))); //if bit isn't 0, multiply power
    }
    document.getElementById(blockVal).value = deciSum //insert new decimal to field
}

function checkHex(block) {
    let blockVal = "ipHex" + block;
    let checkVal = document.getElementById(blockVal).value;
    if (checkVal.length <= 2 && /^[0-9A-F]*$/.test(checkVal)) {
        convertHex(checkVal,block)
    }
    else {
        document.getElementById(blockVal).value = "Hex 00 to FF only"
    }
}

function convertHex(num,block) {
    
}

//plan: 8 bit: 0-15 correspond to second 4 bits, 0-15*16 to first