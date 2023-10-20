/*
Filename: ComplexCode.js

Description: 
This code implements a complex algorithm to generate a maze using a depth-first search algorithm. It creates a grid of cells and selectively removes walls to create paths through the grid. The maze generation process is randomized, resulting in different mazes each time the code is run.

*/

// Define constants for maze dimensions
const width = 25;
const height = 25;

// Create a 2D array of cells representing the maze
const maze = Array(height)
  .fill()
  .map(() => Array(width).fill(true));

// Define the directions to move in the maze
const directions = {
  N: { x: 0, y: -1 },
  S: { x: 0, y: 1 },
  W: { x: -1, y: 0 },
  E: { x: 1, y: 0 },
};

// Function to check if a cell is within the maze boundaries
function isInBounds(x, y) {
  return x >= 0 && x < width && y >= 0 && y < height;
}

// Function to check if a cell is within the maze boundaries and unvisited
function isUnvisited(x, y) {
  return isInBounds(x, y) && maze[y][x];
}

// Get all the neighboring cells of a given cell
function getNeighbors(x, y) {
  return Object.values(directions).filter(({ x: dx, y: dy }) =>
    isUnvisited(x + dx, y + dy)
  );
}

// Perform the depth-first search algorithm to generate the maze
function generateMaze(x = 0, y = 0) {
  const stack = [[x, y]];
  while (stack.length > 0) {
    [x, y] = stack.pop();
    if (maze[y][x]) {
      maze[y][x] = false;
      const neighbors = getNeighbors(x, y);
      if (neighbors.length > 0) {
        stack.push([x, y]);
        const { x: dx, y: dy } = neighbors[
          Math.floor(Math.random() * neighbors.length)
        ];
        maze[y + dy][x + dx] = false;
        stack.push([x + dx, y + dy]);
      }
    }
  }
}

// Function to print the maze in the console
function printMaze() {
  let output = "";
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      output += maze[y][x] ? "█" : " ";
    }
    output += "\n";
  }
  console.log(output);
}

// Generate the maze
generateMaze();

// Print the maze
printMaze();