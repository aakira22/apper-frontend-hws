/*
Write a function named transform that accepts an array of integers, 
and returns an array in which all the elements are squared and sorted in ascending order. 
Name this file HW1-1.js.
*/

function transform(intArray){

  //integer array checker
  if (!intArray.every(element => typeof(element)=='number')){
    console.log('Invalid input.')
    return null
  } 

  //squaring then sorting
  else {
    intArray = intArray.map( x => x ** 2)  //squared
    intArray = intArray.sort((a, b) => (a - b))  //sorted
    return intArray
  }

}


var sampleArray = [5,-3,2,10]
a = transform(sampleArray)
console.log('Returned Array: '+a)