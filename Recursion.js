//Write a function that will determine if a number is a "Happy Number" or not

function isHappyNumber(numberToTest){
  var numberArray = numberToTest.toString().split('');
  var squaredNumber = numberArray.map(function (element){
    return Math.pow(element, 2);
   }).reduce(function(a, b){return a+b});
    if (squaredNumber === 1){
      return'I am a happy Number!';
    }else if (squaredNumber === 4){
      return "I am a sad Number";
    }else{
    	return isHappyNumber(squaredNumber);
    }
}
console.log(isHappyNumber(200));