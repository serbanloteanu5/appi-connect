/*
   Filename: complex_code.js

   Description: 
   This code demonstrates a complex implementation of a web application that converts a user inputted number
   into its Roman numeral equivalent. The code takes into account various rules and exceptions of Roman numeral
   notation to provide an accurate conversion. It includes a sophisticated algorithm and extensive error handling.

   Author: Complex Coder
*/

// Function to handle user input and perform conversions
function convertToRoman(num) {
   if (typeof num !== 'number' || num < 1 || num > 3999) {
      throw new Error('Invalid input! Please enter a number between 1 and 3999.');
   }

   const romanNumerals = {
      1000: 'M',
      900: 'CM',
      500: 'D',
      400: 'CD',
      100: 'C',
      90: 'XC',
      50: 'L',
      40: 'XL',
      10: 'X',
      9: 'IX',
      5: 'V',
      4: 'IV',
      1: 'I'
   };

   let result = '';
   for (let value in romanNumerals) {
      while (num >= +value) {
         result += romanNumerals[value];
         num -= +value;
      }
   }
   return result;
}

// Example usage:
try {
   const userInput = prompt('Enter a number between 1 and 3999:');
   const number = parseInt(userInput);

   if (!isNaN(number)) {
      const romanNumeral = convertToRoman(number);
      console.log(`The Roman numeral equivalent of ${number} is: ${romanNumeral}`);
   } else {
      console.error('Invalid input! Please enter a valid number.');
   }
} catch (error) {
   console.error(error.message);
}