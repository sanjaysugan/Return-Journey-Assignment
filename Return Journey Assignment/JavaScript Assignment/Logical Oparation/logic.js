function findCommonElements(arr1, arr2) {
    var commonElements = [];
  
    // Iterate through each element in the first array
    for (var i = 0; i < arr1.length; i++) {
      var currentElement = arr1[i];
  
      // Check if the current element is also in the second array
      if (isArrayContains(arr2, currentElement)) {
        commonElements.push(currentElement);
      }
    }
  
    return commonElements;
  }
  
  // Helper function to check if an array contains a specific element
  function isArrayContains(arr, element) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return true;
      }
    }
    return false;
  }
  
  // Example usage:
  var array1 = [1, 2, 3, 4, 5];
  var array2 = [3, 4, 5, 6, 7];
  
  var result = findCommonElements(array1, array2);
  console.log(result);  // Output: [3, 4, 5]
  