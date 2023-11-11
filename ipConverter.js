function checkDeci(block) {
  let checkVal = document.getElementById("ipDeci" + block).value; //actual input number
  if (checkVal >= 0 && checkVal <= 255) {
    convertDeciToBin(checkVal, block);
  } else {
    document.getElementById("ipDeci" + block).value = "NaN; 0-255 only";
  }
}
function checkBinary(block) {
  let checkVal = document.getElementById("ipBinary" + block).value; //actual input via ID
  if (checkVal.length === 8 && /^[0-1]*$/.test(checkVal)) {
    convertBinaryToDeci(checkVal, block);
    convertBinaryToHex(checkVal, block);
  } else {
    document.getElementById("ipBinary" + block).value = "8 length binary only";
  }
}
function checkHex(block) {
  let checkVal = document.getElementById("ipHex" + block).value;
  if (checkVal.length <= 2 && /^[0-9A-F]*$/.test(checkVal)) {
    convertHexToBin(checkVal, block);
  } else {
    document.getElementById("ipHex" + block).value = "Hex 00 to FF only";
  }
}
//Conversion functions begin. Deci, Bin, Hex
function convertDeciToBin(num, block) {
  let binaryNum = "";
  for (let i = 7; i >= 0; i--) {
    if (num >= 2 ** i) {
      num -= 2 ** i;
      binaryNum += "1";
    } else {
      binaryNum += "0";
    }
  }
  convertBinaryToHex(binaryNum, block);
  document.getElementById("ipBinary" + block).value = binaryNum;
}
function convertBinaryToDeci(binaryVal, block) {
  let deciSum = 0;
  for (let i = 0; i < 8; i++) {
    deciSum += binaryVal[i] * 2 ** (7 - i);
  }
  document.getElementById("ipDeci" + block).value = deciSum;
}
function convertHexToBin(num, block) {
  let numBinary = "";
  let hexCount = 0; //track if we have one or two digits to deal with
  if (num.length === 1) {
    numBinary += "0000";
  }
  do {
    switch (
      num[hexCount] //check for alphabet values. Is there a better method?
    ) {
      case "F":
        numBinary += "1111";
        break;
      case "E":
        numBinary += "1110";
        break;
      case "D":
        numBinary += "1101";
        break;
      case "C":
        numBinary += "1100";
        break;
      case "B":
        numBinary += "1011";
        break;
      case "A":
        numBinary += "1010";
        break;
      default: //if 0 to 9, run conversion for 4 bits
        let tempNum = num[hexCount]; //temporary num, don't mess with base num
        for (let i = 3; i >= 0; i--) {
          if (tempNum >= 2 ** i) {
            tempNum -= 2 ** i;
            numBinary += "1";
          } else {
            numBinary += "0";
          }
        }
    }
    hexCount++; //iterate
  } while (hexCount < num.length); //run Do again if 2 indices
  document.getElementById("ipBinary" + block).value = numBinary; //return new binary
  convertBinaryToDeci(numBinary, block); //call our old binary-to-deci converter
}
function convertBinaryToHex(num, block) {
  let numHex = "";
  bitsToHex(num.substring(0, 4)); //convert 4 bits at a time
  bitsToHex(num.substring(4, 8));
  function bitsToHex(bits) {
    switch (bits) {
      case "1111":
        numHex += "F";
        break;
      case "1110":
        numHex += "E";
        break;
      case "1101":
        numHex += "D";
        break;
      case "1100":
        numHex += "C";
        break;
      case "1011":
        numHex += "B";
        break;
      case "1010":
        numHex += "A";
        break;
      default:
        let tempSum = 0;
        for (let i = 0; i < 4; i++) {
          tempSum += bits[i] * 2 ** (3 - i);
        }
        numHex += String(tempSum);
    }
  }
  document.getElementById("ipHex" + block).value = numHex; //return new binary
}
