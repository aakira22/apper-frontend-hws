/*
Write a function named reverse that, when given an input string, 
returns the reversed version of that string, e.g., "joseph" -> "hpesoj" 
Name this file HW1-3.js.
*/

function reverse(input){

    //string input checker
    if (typeof(input)!='string'){
        console.log('Invalid input. Input must be a string.')
        return null
    } 

    else{
        splitted = input.split('')
        reversed = splitted.reverse()
        flipped = reversed.join('')
        return flipped
    }

}

var a = 'joseph'
b = reverse(a)
console.log(b)  //hpesoj