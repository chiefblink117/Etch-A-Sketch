document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    let gridSize = 16; // Store the initial grid size

    // Function to create (or recreate) the grid 
    function createGrid(size) {
        container.innerHTML = ''; // Clear existing grid

        for (let i = 0; i < size; i++) {
            const row = document.createElement('div');
            row.classList.add('grid-row');
            container.appendChild(row);

            for (let j = 0; j < size; j++) { 
                const cell = document.createElement('div');
                row.appendChild(cell);
            }
        }
        addHoverEffect(); // Add hover effect to new divs
        // Update the CSS variable controlling the grid size
        container.style.setProperty('--grid-size', size); 
    }

    // Initial grid creation
    createGrid(gridSize);

    function addHoverEffect() {
        const gridDivs = document.querySelectorAll('.container div'); // Select all grid divs
        gridDivs.forEach(div => {
            div.addEventListener('mouseover', (e) => {
                div.style.backgroundColor = 'red'; // Change this to your desired color
                e.stopPropagation();
            });
        });
    }

    // Button for changing grid size
    const changeGridBtn = document.getElementById('change-grid-size');
    changeGridBtn.addEventListener('click', () => {
        const newSize = prompt("Enter number of squares per side:");
        if (newSize != null && !isNaN(newSize) && newSize <= 100) {
            gridSize = parseInt(newSize);
            createGrid(gridSize); // Recreate the grid
        }
    });
});

