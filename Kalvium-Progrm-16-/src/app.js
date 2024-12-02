//An array comprising of fruit names is given to you.
// The addFruit and displayFruits function is already done for you.


let fruits = ["Apple", "Banana", "Mango", "Pineapple", "Orange"];

// function displayFruits() will display the list of fruits in an HTML <ul> element. 
// This function will update the list dynamically whenever changes are made.
//This is already done for you.
function displayFruits(customList = fruits) {
    const fruitList = document.getElementById('fruit-list');
    fruitList.innerHTML = ''; 
    customList.forEach((fruit, index) => {
        let li = document.createElement('li');
        li.textContent = `${index + 1}. ${fruit}`;
        fruitList.appendChild(li);
    });
}
// The function addFruit() Takes a fruit name from an input field.
//Adds the new fruit to the fruits array using the push() method & calls displayFruits() to update the list.
//This is already done for you.
function addFruit() {
    const newFruitInput = document.getElementById('new-fruit');
    const newFruit = newFruitInput.value.trim();
    
    if (newFruit) {
        fruits.push(newFruit);
        newFruitInput.value = ''; 
        displayFruits();
    } 
}
// Complete the function to Remove the Last Fruit:
//Write a function removeFruit() that:
//Uses the pop() method to remove the last fruit from the list.
//Calls displayFruits() to show the updated list.
function removeFruit() {
    fruits.pop();
    displayFruits();
   
}
//Slice Fruits (Show the First 3 Fruits):
//Implement a function sliceFruits() that:
//Uses the slice() method to display only the first 3 fruits from the fruits array.
//Call displayFruits() to show the sliced list.
function sliceFruits() {
    const slicedFruits = fruits.slice(0,3);
    displayFruits(slicedFruits);
  
}
// Complete the function spliceFruits() that:
//Uses the splice() method to remove the second fruit (at index 1) from the fruits array.(donot modify in the original array)
//Call displayFruits() to update the list.
function spliceFruits() {
  const splicedFruits = [...fruits];
  splicedFruits.splice(1,1);
  displayFruits(splicedFruits);
}
// Complete the function mapFruits() that:
//Uses the map() method to convert all fruit names to uppercase.
// Call displayFruits() to display the uppercase version of the list.
function mapFruits() {
    const upperCased = fruits.map(fruits => fruits.toUpperCase());
    displayFruits(upperCased);
   
}

// Implement a function filterFruits() that:
//Uses the filter() method to display fruits whose names are longer than 5 characters.
//Call displayFruits() to show the filtered list.
function filterFruits() {
    const namesLongerThan5Char = fruits.filter(fruits => fruits.length >5);
    displayFruits(namesLongerThan5Char);
    
}

