/*
Write a function called isPalindrome, that when given a string input, returns true if the string input is a palindrome, else false. 
A palindrome is a word that, when reversed, is the same word. 
Examples include racecar, deified, civic, radar, uwu, et al. Name this file HW1-4.js.
*/

function isPalindrome(input){

    //string input checker
    if (typeof(input)!='string'){
        console.log('Invalid input. Input must be a string.')
        return null
    } 

    else {
        if (input.length <= 1){
            return true
        }
        if (input[0]!=input[input.length-1]){
            return false
        }
        word = input.slice(1,input.length-1)
        return isPalindrome(word)
    }
}

var a = 'racecar'
b = isPalindrome(a)
console.log(b)