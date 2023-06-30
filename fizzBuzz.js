//Create a js code the will print out number from 1 through 100 
//Print `Fizz` for each multiples of 3
//Print `Buzz` for each multiples of 5
//If the numbers are both multiples of 3 and 5 then print `FizzBuzz` 
//Make a variable that will equal to 100
const num = 100
//Apply For Loop
for(let i=0;i<=num;i++){
//Using if statement, make it so the numbers are both multiples of 3 and 5 it will print `FizzBuzz`
    if(i % 3 ==0 && i % 5 ==0){
        console.log(`FizzBuzz`)
//using else if statement, make it so if it just multiples of 3 it will print `Fizz`
    }else if (i % 3 ==0){
        console.log(`Fizz`)
//using else if statement, make it so if it just multiples of 5 it will print `Buzz`
    }else if (i % 5 ==0){
        console.log(`Buzz`)
//Using else statment to it will print rest of the number that is not within the conditions
    }else{
        console.log(i)
    }
}