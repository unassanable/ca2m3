describe('Fruit List Manager', function() {
  // Reset fruits array before each test
  beforeEach(function() {
      fruits = ["Apple", "Banana", "Mango", "Pineapple", "Orange"];
  });

  // Test for removeFruit function
  it('should remove the last fruit from the list', function() {
      removeFruit();
      expect(fruits).toEqual(["Apple", "Banana", "Mango", "Pineapple"]);
  });

  // Test for sliceFruits function
  it('should return the first 3 fruits when sliced', function() {
      let originalDisplayFruits = displayFruits; // Mock displayFruits to capture the sliced array
      let slicedArray;
      displayFruits = function(list) { slicedArray = list; };

      sliceFruits();
      expect(slicedArray).toEqual(["Apple", "Banana", "Mango"]);

      displayFruits = originalDisplayFruits; // Restore original displayFruits function
  });

  // Test for spliceFruits function
  it('should remove the second fruit (Banana) from the list without modifying the original array', function() {
      let originalDisplayFruits = displayFruits; // Mock displayFruits to capture the spliced array
      let splicedArray;
      displayFruits = function(list) { splicedArray = list; };

      spliceFruits();
      expect(splicedArray).toEqual(["Apple", "Mango", "Pineapple", "Orange"]);
      expect(fruits).toEqual(["Apple", "Banana", "Mango", "Pineapple", "Orange"]); // Ensure original array is unchanged

      displayFruits = originalDisplayFruits; // Restore original displayFruits function
  });

  // Test for mapFruits function
  it('should convert all fruit names to uppercase', function() {
      let originalDisplayFruits = displayFruits; // Mock displayFruits to capture the mapped array
      let mappedArray;
      displayFruits = function(list) { mappedArray = list; };

      mapFruits();
      expect(mappedArray).toEqual(["APPLE", "BANANA", "MANGO", "PINEAPPLE", "ORANGE"]);

      displayFruits = originalDisplayFruits; // Restore original displayFruits function
  });

  // Test for filterFruits function
  it('should filter fruits whose names are longer than 5 characters', function() {
      let originalDisplayFruits = displayFruits; // Mock displayFruits to capture the filtered array
      let filteredArray;
      displayFruits = function(list) { filteredArray = list; };

      filterFruits();
      expect(filteredArray).toEqual(["Banana", "Pineapple", "Orange"]);

      displayFruits = originalDisplayFruits; // Restore original displayFruits function
  });
});
