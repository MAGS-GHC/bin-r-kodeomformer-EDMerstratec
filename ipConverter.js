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
    convertBinaryToHex(binaryNum,block) //call new bin to hex function?
    block = "ipBinary" + block //assign to correct text field
    document.getElementById(block).value = binaryNum //return new binary
}

function checkBinary(block){ //block set from input field
    let blockVal = "ipBinary" + block //full ID 
    let checkVal = document.getElementById(blockVal).value //actual input via ID
    if (checkVal.length === 8 && /^[0-1]*$/.test(checkVal)) { //octet of 1s and 0s only
        convertBinary(checkVal,block); //call conversion function
        convertBinaryToHex(checkVal,block); 
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

function convertHex(num,block) {//first to binary
    let numBinary = ""
    let hexCount = 0 //track if we have one or two digits to deal with
    if (num.length === 1) {
        numBinary += "0000"
    }
    do {
        switch(num[hexCount]) { //check for alphabet values. Is there a better method?
            case "F":
                numBinary += "1111"
                break;
            case "E":
                numBinary += "1110"
                break;
            case "D":
                numBinary += "1101"
                break;
            case "C":
                numBinary += "1100"
                break;
            case "B":
                numBinary += "1011"
                break;
            case "A":
                numBinary += "1010"
                break;
            default: //if 0 to 9, run conversion for 4 bits
                let tempNum = num[hexCount] //temporary num, don't mess with base num
                for (let i = 3; i >= 0; i--) { //loop over 4 bits
                    if (tempNum >= (2**i)) { //
                        tempNum -= (2**i)
                        numBinary += "1"
                    }
                    else {
                        numBinary += "0"
                    }
                }
        }
        hexCount++ //iterate
    }
    while (hexCount < num.length) //run Do again if 2 indices
        document.getElementById("ipBinary" + block).value = numBinary //return new binary
    convertBinary(numBinary,block) //call our old binary-to-deci converter
}

function convertBinaryToHex(num,block) {
    //convert 4 bits at a time
    let numHex = ""
    bitsToHex(num.substring(0,4))
    bitsToHex(num.substring(4,8))
    function bitsToHex(bits) {
        switch (bits) {
            case "1111":
                numHex += "F"
                break;
            case "1110":
                numHex += "E" 
                break;
            case "1101":
                numHex += "D" 
                break;
            case "1100":
                numHex += "C" 
                break;
            case "1011":
                numHex += "B" 
                break;
            case "1010":
                numHex += "A"
                break;
            default: 
                let tempSum = 0
                for (let i=0; i<4;i++) {
                   tempSum += (bits[i] * (2**(3-i)))
                }
                numHex += String(tempSum)
        }
    }
    document.getElementById("ipHex" + block).value = numHex //return new binary
}