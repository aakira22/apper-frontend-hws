/*
Write a function named transform that accepts an array of integers, 
and returns an array in which all the elements are squared and sorted in ascending order. 
Name this file HW1-1.js.
*/

function transform(intArray){

  //integer array checker
  if (!intArray.every(element => typeof(element)=='number')){
    console.log('Invalid input. Array elements must be a number.')
    return null
  } 

  //squaring then sorting
  else {
    intArray = intArray.map( x => x ** 2)  //squared
    intArray = intArray.sort((a, b) => (a - b))  //sorted
    return intArray
  }

}


const nums = [4,9,5,3,8]
const sortedSquaredNums = transform(nums) 
console.log(sortedSquaredNums) // [9,16,25,64,81]