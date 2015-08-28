function stringToPhoneNumber(stringOfNumbers){
  return stringOfNumbers.replace(/(\d{3})(\d{3})(\d{4})/, function(match, areaC0de, prefix, liveNumber){
    var areaCode = "(" + areaC0de + ")";
    var mainNumber = [prefix, liveNumber].join('-');
    return areaCode + mainNumber;
  });
}

numberStringToConvert = "1234567890";
console.log(stringToPhoneNumber(numberStringToConvert));

