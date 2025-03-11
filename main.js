// Get the container and reset button elements from the HTML
const container = document.getElementById("container");
const resetButton = document.getElementById("reset-btn");

// Set the initial grid size
let gridSize = 16;

// Function to create the grid
function createGrid(size) {
    // Clear any existing content in the container
    container.innerHTML = "";

    // Calculate the size of each square
    const squareSize = 960 / size;

    // Create the specified number of squares
    for (let i = 0; i < size * size; i++) {
        // Create a new div element for each square
        const square = document.createElement('div');
        // Add the 'grid-square' class to the div
        square.classList.add('grid-square');
        // Set the width and height of the square
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add a hover effect to change the color of the square
        square.addEventListener('mouseover', function() {
            this.classList.add('hovered');
        });

        // Append the square to the container
        container.appendChild(square);
    }
}

// Function to change the grid size
function changeGridSize() {
    // Prompt the user to enter a new grid size
    let newSize = prompt('Enter the number of squares per side (maximum 100):');

    // Validate the input
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1) {
        alert('Please enter a valid number!');
        return;
    }

    if (newSize > 100) {
        alert('Maximum size is 100!');
        newSize = 100;
    }

    // Update the grid size and create a new grid
    gridSize = newSize;
    createGrid(gridSize);
}

// Event listener for the reset button
resetButton.addEventListener('click', changeGridSize);

// Initialize the grid when the page loads
window.onload = function() {
    createGrid(gridSize);
};