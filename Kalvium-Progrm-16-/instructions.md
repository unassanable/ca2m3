## Milestone 3 Overview
- In this assessment, you will be working on a simple JavaScript application that manages a list of fruits. You will be provided with the HTML and CSS, and your task is to complete the JavaScript (app.js) by implementing the required functionality.

- You will be provided with an array of fruits, and several functions will already be written for you. Your task is to complete the remaining functions to manipulate the fruit array as described below.

- Each completed function will be tested with specific test cases, and each test case carries 8 marks.

## Structure of the Files
- index.html: Contains the structure of the webpage with an input field and buttons.
- main.css: Contains the styles for the application.
- app.js: Contains the JavaScript code where you will complete the required functions.


## Instructions
### Setup:

- You do not need to modify the index.html or style.css files.
- Your focus will be on writing the JavaScript code inside the app.js file.

### Existing Code:
- The array fruits is already initialized for you
- `let fruits = ["Apple", "Banana", "Mango", "Pineapple", "Orange"];`
- The following functions are already completed for you:
- `displayFruits()`: Displays the current list of fruits dynamically.
- `addFruit()`: Adds a new fruit to the list from the input field.

## Tasks:

- You are expected to complete the following functions in app.js:

- `removeFruit():`
- Removes the last fruit from the fruits array using the pop() method.
- Calls displayFruits() to update the list.

- `sliceFruits():`
- Displays only the first 3 fruits in the array using the slice() method.
- Calls displayFruits() to update the list.

- `spliceFruits():`
- Removes the second fruit (at index 1) from the list using the splice() method without modifying the original array.
- Calls displayFruits() to update the list.

- `mapFruits():`
- Converts all fruit names to uppercase using the map() method.
- Calls displayFruits() to update the list.

- `filterFruits():`
- Displays fruits whose names are longer than 5 characters using the filter() method.
- Calls displayFruits() to update the list.

## Testing Criteria:

- The assessment will be evaluated based on the following 5 test cases. Each test case carries 8 marks.

## Test Cases
- removeFruit() Test:
- Description: Should remove the last fruit from the list.
- Expected Outcome: After removing, the list should exclude the last fruit (e.g., Orange in the initial list).

sliceFruits() Test:
- Description: Should return the first 3 fruits when sliced.
- Expected Outcome: The list should display only the first 3 fruits (e.g., Apple, Banana, Mango).

spliceFruits() Test:
- Description: Should remove the second fruit (Banana) from the list without modifying the original array.
- Expected Outcome: A new list should be displayed without Banana (e.g., Apple, Mango, Pineapple, Orange), and the original array should remain unchanged.

mapFruits() Test:
- Description: Should convert all fruit names to uppercase.
- Expected Outcome: The list should display all fruit names in uppercase (e.g., APPLE, BANANA, MANGO, PINEAPPLE, ORANGE).

filterFruits() Test:
- Description: Should filter fruits whose names are longer than 5 characters.
- Expected Outcome: The list should display only fruits with names longer than 5 characters (e.g., Banana, Pineapple, Orange).


Ensure all functions are properly implemented and pass the test cases before submitting the code.
Happy Coding Kalvium ❤️
