//Create js code that will add or remove part of a set of array
//Make a set of array a variable number
const number = [2,4,6,8,11,20,15,22]
//Using splice to remove number 2,4,6,8
number.splice(0,4)
//Using splice remove number 20
number.splice(1,1)
//Use pop to remove the last number 22
number.pop()
console.log(number)
//Make a set of array a variable number
const number1 = [1,2,3,4,5,6,7,8,9,10]
//First use pop to remove last number
number1.pop()
//Remove every even number using splice
number1.splice(1,1)
number1.splice(2,1)
number1.splice(3,1)
number1.splice(4,1)
console.log(number1)
//Make a set of array a variable number
const number2 =[70,42,55,81,21,91,34]
//Use splice to remover first 2 numbers
number2.splice(0,2)
//Use pop to remove last number
number2.pop()
console.log(number2)
//Make a set of array a variable number
const number3 =[2,4,6,8,10,11,12]
//Using splice remove section of numbers before 11
number3.splice(0,5)
//Use pop to remove last number
number3.pop()
console.log(number3)