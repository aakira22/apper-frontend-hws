var sampleArray = [5,3,2,10]

function transform(intArray){

  //integer array checker
  if (!intArray.every(element => typeof(element)=='number')){
    console.log('Invalid input.')
    return null
  } 

  //squaring then sorting
  else {
    intArray = intArray.map( x => x ** 2)  
    newArray = intArray.sort((a, b) => (a - b))
    return newArray
  }

}

a = transform(sampleArray)

console.log('Returned Array: '+a)