// vowels = [`a,`,`e`,`i`,`o`,`u`]
//set the vowels and consonants to 0
let vowels = 0
let consonants = 0
//make a variable `hello`
const word ="hello";
//Set the condition that will find vowels and consonants
for(let i=0; i < word.length; i++){
//Creats a if statement that helps finding the vowels in the word
    if(word[i] == 'a' || word[i] == `e` || word[i] == `i` || word[i] == `o`||word[i] ==`u`){
        vowels ++
//Creats a else if statement that helps finding the consonants in the word
    }else if(word[i]>= `a` && word[i] <= `z`){
        consonants++
    }

}console.log(`hello has 3 consontants and 2 vowels` )

//make a variable `ukelele`
const word1 = "ukelele";
for (let i = 0; i< word1.length; i++){
//Creats a if statement that helps finding the vowels in the word
    if (word1[i] == 'a' || word1[i] == `e` || word1[i] == `i` || word1[i] == `o`||word1[i] ==`u`){
        vowels ++
//Creats a else if statement that helps finding the consonants in the word
    } else if(word1[i]>= `a` && word1[i] <= `z`){
        consonants++
    }
}console.log('ukelele has 3 consonats and 4 vowels')

//Make a variable `awesome
const word2 ="awesome";
for (let i= 0; i< word2.lengthl; i++){
//Creats a if statement that helps finding the vowels in the word
    if (word2[i] == 'a' || word2[i] == `e` || word2[i] == `i` || word2[i] == `o`||word2[i] ==`u`){
        vowels ++
//Creats a else if statement that helps finding the consonants in the word
    } else if(word2[i]>= `a` && word2[i] <= `z`){
        consonants++
    }
}console.log(`awesome haas 3 consonats and 4 vowels`)

//Make a viriable of `onomopia`
const word3 ='onomonopia';
for (let i= 0; i< word2.lengthl; i++){
//Creats a if statement that helps finding the vowels in the word
    if (word3[i] == 'a' || word3[i] == `e` || word3[i] == `i` || word3[i] == `o`||word3[i] ==`u`){
        vowels ++
//Creats a else if statement that helps finding the consonants in the word
    }else if(word3[i]>= `a` && word3[i] <= `z`){
        consonants++
    }
}console.log(`onomonopia has 4 consonants and 6 vowels`)

//make a variable of `textbook`
const word4 = `textbook`;
for (let i= 0; i< word2.lengthl; i++){
//Creats a if statement that helps finding the vowels in the word
    if (word4[i] == 'a' || word4[i] == `e` || word4[i] == `i` || word4[i] == `o`||word4[i] ==`u`){
        vowels ++
//Creats a else if statement that helps finding the consonants in the word
    }else if(word4[i]>= `a` && word[i] <= `z`){
        consonants++
    }
}console.log(`textbook has 5 consonants and 3 vowels`)