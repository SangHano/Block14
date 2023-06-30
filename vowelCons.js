//Create a code that will loop through a string to find how many vowels and consonants for each string of
//words given vowels are [`a`,`e`,`i`,`o`,`u`]

//Make variable for count of vowels and count of consonants
let consCount =0
let vowelCount =0
//Put the string given to a variable
const word =`hello`
//Use for loops and if statement to find how many vowels are in the word `hello` (2)
for(let i=0;i<=word.length;i++){
    if(word[i]== `e` || word[i] == `a` || word[i]==`i` || word[i]==`o` || word[i]== `u`){
       vowelCount++
//Use else if statement to find rest of the letters in word `hello` to be consonant (3)
    }else if (word[i]>= `a` && word[i] <=`z`){
        consCount++
    } 
//Use string and variable to form a sentence
}console.log(`hello has `+ consCount + ` consonants and `+ vowelCount + ` vowels`)

//Make variable for count of vowels and count of consonants
let consCount1 = 0
let vowelCount1 = 0
//Put the string given to a variable
const word1 =`ukelele`
//Use for loops and if statement to find how many vowels are in the word `ukelele` (4)
for(let i=0;i<=word1.length;i++){
    if(word1[i]== `e` || word1[i] == `a` || word1[i]==`i` || word1[i]==`o` || word1[i]== `u`){
        vowelCount1++
//Use else if statement to find rest of the letters in word `ukelele` to be consonant (3)
    }else if(word1[i]>=`a`&& word1[i]<=`z`){
        consCount1++
    }
//Use string and variable to form a sentence
}console.log(`ukelele have `+ consCount1 + ` consonants and `+ vowelCount1 + ` vowels`)

//Make variable for count of vowels and count of consonants
let consCount2 =0
let vowelCount2 =0
//Put the string given to a variable
const word2 = `awesome`
//Use for loops and if statement to find how many vowels are in the word `awesome` (4)
for(let i=0;i<=word2.length;i++){
    if(word2[i]==`a` || word2[i]==`e` || word2[i]==`i` || word2[i]==`o` || word2[i]==`u`){
        vowelCount2++
//Use else if statement to find rest of the letters in word `awesome` to be consonant (3)
    }else if (word2[i]>=`a` && word2[i]<=`z`){
        consCount2++
    }
//Use string and variable to form a sentence    
}console.log(word2 + ` has ` + consCount + ` consonants and ` + vowelCount2 + ` vowels`)

//Make variable for count of vowels and count of consonants
let consCount3 =0
let vowelCount3 =0
//Put the string given to a variable
const word3 = `onomonopia`
//Use for loops and if statement to find how many vowels are in the word `onomonopia` (6)
for(let i=0; i<=word3.length; i++){
    if(word3[i] ==`a` || word3[i]==`e` || word3[i]==`i`|| word3[i]==`o`||word3[i]==`u`){
        vowelCount3++
//Use else if statement to find rest of the letters in word `onomonopia` to be consonant (4)
    }else if(word3[i]>=`a` && word3[i]<=`z`){
        consCount3++
    }
//Use string and variable to form a sentence
}console.log(word3 + ` has ` + consCount3 + ` consonants and ` + vowelCount3 + ` vowels`)

//Make variable for count of vowels and count of consonants
let consCount4 = 0
let vowelCount4 = 0
//Put the string given to a variable
const word4 = `textbook`
//Use for loops  and if statementto find how many vowels are in the word `textbook` (3)
for(let i=0;i<=word4.length;i++){
    if(word4[i]==`a` || word4[i] ==`e`|| word4[i]==`i`|| word4[i]==`o`|| word4[i]==`u`){
        vowelCount4 ++
//Use else if statement to find rest of the letters in word `textbook` to be consonant (5)
    }else if(word4[i]>=`a`&& word4[i]<=`z`){
        consCount4 ++
    }
//Use string and variable to form a sentence
}console.log(word4 + ` has ` + consCount4 + ` consonants and `+ vowelCount4 + ` vowels`)