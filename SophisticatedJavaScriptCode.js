/*
   File Name: SophisticatedJavaScriptCode.js
   Content: A complex and creative JavaScript code example
*/

// Importing required libraries
const axios = require('axios');
const fs = require('fs');
const moment = require('moment');

// Global variables
let data = [];
let filteredData = [];
let sortedData = [];

// Utility functions
const fetchData = async () => {
  try {
    const response = await axios.get('https://api.example.com/data');
    data = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const filterData = () => {
  filteredData = data.filter((item) => {
    return item.price > 100 && item.quantity > 0;
  });
};

const sortData = () => {
  sortedData = filteredData.sort((a, b) => {
    return moment(a.timestamp) - moment(b.timestamp);
  });
};

const saveDataToFile = () => {
  fs.writeFile('sortedData.json', JSON.stringify(sortedData), (error) => {
    if (error) {
      console.error('Error writing data to file:', error);
    } else {
      console.log('Data saved to sortedData.json successfully');
    }
  });
};

// Main function
const main = async () => {
  console.log('Fetching data...');
  await fetchData();
  console.log('Data fetched');

  console.log('Filtering data...');
  filterData();
  console.log('Data filtered');

  console.log('Sorting data...');
  sortData();
  console.log('Data sorted');

  console.log('Saving data to file...');
  saveDataToFile();
};

// Execute the main function
main();