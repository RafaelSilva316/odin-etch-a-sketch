const sketchGrid = document.querySelector(".sketch-grid");

const createGrid = function (size) {
  // let gridItemList = [];
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      let gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.addEventListener("mouseover", function () {
        gridItem.classList.add("grid-item-hovered");
      });
      // gridItemList.push(gridItem);
      sketchGrid.appendChild(gridItem);
    }
  }
};

createGrid(16);

const gridClear = function () {
  let gridItemList = document.querySelectorAll(".grid-item");
  for (let i = 0; i < gridItemList.length; i++) {
    gridItemList[i].remove();
  }
};

const promptUser = function () {
  let gridSize = prompt("Number of Squares per side", "16");
  if (gridSize == null) {
    gridSize = 16;
  } else {
    gridSize = parseInt(gridSize);
  }
  if (gridSize > 40) {
    gridSize = 40;
  }
  sketchGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  sketchGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  createGrid(gridSize);
};

const reset = function () {
  gridClear();
  console.log("cleared");
  promptUser();
};

const btnClear = document.querySelector(".btn-clear");
btnClear.addEventListener("click", reset);
