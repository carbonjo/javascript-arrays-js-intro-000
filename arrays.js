var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(arry,elmt){
var newarry

newarry=[elmt, ...arry]

return newarry

}



function destructivelyAddElementToBeginningOfArray(arry,elmt){

arry.unshift(elmt)

return arry

}

function addElementToEndOfArray(arry,elmt){
var newarry

newarry=[...arry, elmt]

return newarry

}


function destructivelyAddElementToEndOfArray(arry,elmt){

arry.push(elmt)

return arry

}

function accessElementInArray(arry,indx){

  return arry[indx]
}


function destructivelyRemoveElementFromBeginningOfArray(arry){

arry.shift()

  return arry
}

function removeElementFromBeginningOfArray(arry){
  var newarry
  newarry=arry.slice(1)
  return newarry
}
