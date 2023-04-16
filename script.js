const container = document.getElementById('container');
const clearButton = document.getElementById('clear');
const color = document.getElementById('colorChoice');
const slider = document.getElementById('myRange');
const output = document.getElementById('gridValue');

let grid = 16;
let selectedColor = color.value;
let isDrawing = false;

output.innerHTML = slider.value;

const sliderInput = function () {
  output.innerHTML = this.value;
  gridContainer(Number(this.value));
};

const gridContainer = function (grid) {
  for (let i = 0; i < grid * grid; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
  container.style.gridTemplateColumns = `repeat(${grid},1fr)`;
  container.style.gridTemplateRows = `repeat(${grid},1fr)`;
};

const clearGrid = function () {
  const rmvSquares = document.querySelectorAll('.square');
  rmvSquares.forEach(square => square.remove());
  gridContainer(grid);
};

// etch function controls the grid,
const etch = function (grid) {
  gridContainer(grid);
  slider.addEventListener('input', clearGrid);
  slider.addEventListener('input', sliderInput);
};

//runs page
etch(grid);

clearButton.addEventListener('click', clearGrid);

// chooses color value and stores it
color.addEventListener('input', function () {
  selectedColor = color.value;
});

//logic for when to be coloring
container.addEventListener('mousedown', function () {
  isDrawing = true;
});

container.addEventListener('mouseup', function () {
  isDrawing = false;
});

container.addEventListener('mouseleave', function () {
  isDrawing = false;
});

container.addEventListener('mousemove', function (e) {
  if (isDrawing) {
    e.target.style.backgroundColor = selectedColor;
  }
});

container.addEventListener('click', function (e) {
  if (!isDrawing) {
    e.target.style.backgroundColor = selectedColor;
  }
});
