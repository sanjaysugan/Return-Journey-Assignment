// Define a car object
var car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
  };
  
  // Define another car object
  var car2 = {
    color: "Blue",
    fuelType: "Petrol",
  };
  
  // Function to merge two car objects
  function mergeCarObjects(carObj1, carObj2) {
    // Create a new object to store the merged properties
    var mergedCar = {};
  
    // Copy properties from the first car object
    for (var key in carObj1) {
      if (carObj1.hasOwnProperty(key)) {
        mergedCar[key] = carObj1[key];
      }
    }
  
    // Copy properties from the second car object
    for (var key in carObj2) {
      if (carObj2.hasOwnProperty(key)) {
        mergedCar[key] = carObj2[key];
      }
    }
  
    return mergedCar;
  }
  
  // Example usage
  var mergedCarObject = mergeCarObjects(car1, car2);
  console.log(mergedCarObject);
  