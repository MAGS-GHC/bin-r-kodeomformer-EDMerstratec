[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/s8s43zZy)

Current plan and testing/to do:

testing for deci validity done, updates binary fields

function 2 : from binary to decimal
	loop that checks state of each bit and multiplies out by 2**i if bit is 1, add to decimal var
	store as number

catch invalid input values for binary

DOCUMENTATION:

///Variables
All have been moved out of global scope
//block// is used to track which of four boxes is being modified
//checkVal// is used in function scope to check for a valid value, otherwise adjusted to return invalid value message
//num// takes text field value if check function succeeds
//binaryNum// tracks string value during conversion loop, returns to binary text field at end
//deciNum// tracks integer sum during conversion loop, returns to decimal text field at end

///Functions
//checkDeci(block)// checks validity of decimal text field #block and runs convertDeci() or returns error message
//convertDeci(num,block)// if check was valid, subtract powers of 2 (2^7 descending to 2^0) and add bits. Return full byte

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