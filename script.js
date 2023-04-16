const container = document.getElementById('container');
const clearButton = document.getElementById('clear');
const color = document.getElementById('color');
const slider = document.getElementById('myRange');
const output = document.getElementById('gridValue');

let grid = 16;

output.innerHTML = slider.value;
// slider.oninput = function () {
//   output.innerHTML = this.value;
//   grid = Number(this.value);
// };

const sliderInput = function () {
  output.innerHTML = this.value;
  // grid = Number(this.value);
  gridContainer(Number(this.value));
};

// slider.addEventListener('input', sliderInput);

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
};

const etch = function (grid) {
  gridContainer(grid);
  slider.addEventListener('input', clearGrid);
  slider.addEventListener('input', sliderInput);
};

etch(grid);

clearButton.addEventListener('click', clearGrid);
