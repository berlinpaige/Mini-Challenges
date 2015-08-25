
/*Example of Test Driven Development: 

Create a function that will accept two arrays as parameters, and determine if they are identical.

Create a swapping function that will take one array as an argument, swap specific elements of that array, 
and then return the swapped array.  This will swap every even indexed element (0, 2, 4, ...) with the 
element that is the same distance from the end. 

Then, write some test cases. 

Finally, implement the swapping function.  
*/

var arrayOne = [5, 20, 0, 56, 7];
var arrayTwo = [5, 4, 3, 6, 7, 8];
var arrayThree = [89, 99, 52, 40, 110, 876, 90];

//used to test the swapEven function
var arrayOneSwapped = [7, 20, 0, 56, 5];
var arrayTwoSwapped = [8, 4, 6, 3, 7, 5];
var arrayThreeSwapped = [90, 99, 110, 40, 52, 876, 89];


function compareArray(array1, array2){
    if(array1.length === array2.length){ 
        for(i=0; i < array1.length; i++){
           if(array1[i] !== array2[i]){
              return false;
           }else{
              return true;
           }
        }
    }else{
        return false;
    }
}

function swapEven(array){
   var arrayLength = array.length;
  
   for(i=0; i< arrayLength/2; i++){
      var backIndex = arrayLength-(i+1);
       if(i % 2 === 0){
  
			//swap numbers
			var a = array[i];
			array[i] = array[backIndex];
			array[backIndex] = a;
        }
    }
  return array;
}


//Test swapEven

console.log(compareArray(swapEven(arrayOne), arrayOneSwapped));
console.log(compareArray(swapEven(arrayTwo), arrayTwoSwapped));
console.log(compareArray(swapEven(arrayThree), arrayThreeSwapped));