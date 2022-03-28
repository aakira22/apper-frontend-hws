/*
Write a function that returns only the vowels of a given input string, e.g., "hello world" -> "eoo". 
Name this function convertToVowels. Name this file HW1-5.js.
*/

function convertToVowels(input){

    //string input checker
    if (typeof(input)!='string'){
        console.log('Invalid input. Input must be a string.')
        return null
    } 

    else{
        const vowels = ['a','e','i','o','u','A','E','I','O','U']
        splitted = input.split('')
        newArr = splitted.filter(element => vowels.includes(element))
        filteredVowels = newArr.join('')
        return filteredVowels
    }
}


const word = 'thisissomeword'
const wordWithOnlyVowels = convertToVowels(word) 
console.log(wordWithOnlyVowels) // iioeo