
//On the set Array[2,4,6,8,11,20,15,22], return a array with value [11,15]
const number = [2,4,6,8,11,20,15,22];
//Remove all the numbers with .pop
number.pop()
number.pop()
number.pop()
number.pop()
number.pop()
number.pop()
number.pop()
number.pop()
//Add 15 at the end of the array
number.push(15)
//Add 11 in the beginnning of the array
number.unshift(11)

//On the set Array[1,2,4,5,6,7,8,9,10], return a array with value  [1,3,5,7,9]
const number1 = [1,2,4,5,6,7,8,9,10];
//Remove last number 10 with .pop
number1.pop();
//Remove 8 using .splice
number1.splice(6,1)
//Remove 6 using .splice
number1.splice(4,1)
//Remove 2 using .splice
number1.splice(1,1,3)
//Remove 4 using .splice
number1.splice(2,1)
console.log(number1)

//On the set Array[70,42,55,81,21,91,34], return a array with value [55,81,21,91]
const number2 =[70,42,55,81,21,91,34]
//Remove 34 using .pop
number2.pop()
//Remove beginning number 70 using .shift
number2.shift()
//Remove beginning number 42 using .shift
number2.shift()
console.log(number2)

//On the set of Array[2,4,6,8,10,11,12], return array with value [11]
const number3 = [2,4,6,8,10,11,12]
//Remove number 2,4,6,8,11 using .splice
number3.splice(0,5)
//Remove the last number 12 using .pop
number3.pop()
console.log(number3)