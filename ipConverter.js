function checkDeci(block) {
  let checkVal = document.getElementById("ipDeci" + block).value;
  if (checkVal >= 0 && checkVal <= 255) {
    convertDeci(checkVal, block);
  } else {
    document.getElementById("ipDeci" + block).value = "NaN; 0-255 only";
  }
}

function checkBinary(block) {
  checkVal = document.getElementById("ipBinary" + block).value;
  if (checkVal.length === 8 && /^[0-1]*$/.test(checkVal)) {
    convertBinary(checkVal, block);
  } else {
    document.getElementById("ipBinary" + block).value = "8 length binary only";
  }
}

function convertDeci(num, block) {
  let binaryNum = "";
  for (let i = 7; i >= 0; i--) {
    if (num >= 2 ** i) {
      num -= 2 ** i;
      binaryNum += "1";
    } else {
      binaryNum += "0";
    }
  }
  document.getElementById("ipBinary" + block).value = binaryNum; //return new binary
}

function convertBinary(binaryVal, block) {
  let deciSum = 0;
  for (let i = 0; i < 8; i++) {
    deciSum += binaryVal[i] * 2 ** (7 - i);
  }
  document.getElementById("ipDeci" + block).value = deciSum;
}
