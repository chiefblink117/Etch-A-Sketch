document.addEventListener('DOMContentLoaded', function() {
const container = document.querySelector('.container');

    // Create rows and columns
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        container.appendChild(row);

        // Create divs inside each row
        for (let j = 0; j < 16; j++) { 
            const cell = document.createElement('div');
            row.appendChild(cell);
        }
    }

    const gridDivs = document.querySelectorAll('.container div'); // Select all grid divs
    gridDivs.forEach(div => {
        div.addEventListener('mouseover', (e) => {
            div.style.backgroundColor = 'red'; // Change this to your desired color
            e.stopPropagation();
        });
    });
});

