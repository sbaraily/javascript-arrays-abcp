var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittle" ]

function addElementToBeginningOfArray(array, element){
  var myArray = [ element, ...array]
  return myArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element)
 return array
}

function addElementToEndOfArray(array, element){
  var myArray2 = [...array, element]
  return myArray2
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  var myArray4 = [array, index]
  return myArray4.length+1
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
  
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
  
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length -1)
  
}




