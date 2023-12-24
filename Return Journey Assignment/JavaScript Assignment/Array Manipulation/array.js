function getUniqueElements(inputArray) {
    var uniqueArray = [];
  
    // Loop through each element in the input array
    for (var i = 0; i < inputArray.length; i++) {
      var currentElement = inputArray[i];
  
      // Check if the current element is not already in the uniqueArray
      if (uniqueArray.indexOf(currentElement) === -1) {
        // If not, add it to the uniqueArray
        uniqueArray.push(currentElement);
      }
    }
  
    return uniqueArray;
  }
  
  // Example usage:
  var inputArray = [1, 2, 3, 4, 2, 3, 5];
  var result = getUniqueElements(inputArray);
  console.log(result);  // Output: [1, 2, 3, 4, 5]
  