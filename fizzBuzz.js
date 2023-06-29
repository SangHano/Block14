//Create Variable number equal to 100
const number = 100;
let count =1
//Make a condition that with both conditions are met it will print `FizzBuzz`
for(let i =1; i<= number; i++){
    if ((i % 3==0) && (i % 5 == 0)){
        console.log(`FizzBuzz`);
//Create a condition, if i % 3==0 then it will print `Fizz`
    }else if (i % 3== 0){
        
        console.log(`Fizz`);   

//Create a condition, if i % 5==0 then it will print `Buzz`
    }else if (i % 5 ==0){
        console.log(`Buzz`);
    }else{
        count++
        console.log([i])
    }
}