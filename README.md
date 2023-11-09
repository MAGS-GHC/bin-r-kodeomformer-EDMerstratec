[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/s8s43zZy)

Current plan and testing/to do:

4 octets, 4 input values. Text boxes. Button to choose binary or decimal
4 octets, 8 input values. Text boxes
	Update in one text box updates equivalent box of other radix?

Function 1 : from decimal to binary
	loop that checks and subtracts i powers of 2, from 7 to 0, and saves as appropriate bits
	store as 8 number array? Is string more effective?
	(cannot save as plain integer; throws error when number starts with 0)

function 2 : from binary to decimal
	loop that checks state of each bit and multiplies out by 2**i if bit is 1, add to decimal var
	store as number

catch invalid input values (length 8, only 1 or 0 for binary. 0-255 for decimal. No other characters)