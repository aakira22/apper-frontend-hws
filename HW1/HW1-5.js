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
        let vowels = ['a','e','i','o','u']
        splitted = input.split('')
        newArr = splitted.filter(item => vowels.includes(item))
        filteredVowels = newArr.join('')
        return filteredVowels
    }
}

a = 'hello world'
b = convertToVowels(a)
console.log(b) //eoo