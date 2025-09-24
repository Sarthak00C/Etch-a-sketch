const gridCount = document.createElement("div");
gridCount.classList.add("grid-container");
document.body.appendChild(gridCount);

// making container-box
const containerSize = 640;
gridCount.style.height = `${containerSize}px`;
gridCount.style.width=`${containerSize}px`;
gridCount.style.border = "solid 1px black";

//style grid container
gridCount.style.display="flex";
gridCount.style.flexWrap="wrap";
gridCount.style.flexDirection="row";
gridCount.style.justifyContent="center"; 
gridCount.style.alignItems="center";

// function to  get random color
function getColor() {
  let arr = [
    "red",
    "yellow",
    "pink",
    "blue",
    "green",
    "purple",
    "brown",
    "grey",
    "black",
  ];
  return arr[Math.floor(Math.random() * arr.length)];
}

// adding color to the grid
function addColor() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = getColor();
    });
  });
}

// creating 16 X 16 grid of divs
function createGrid(size) {
  gridCount.innerHTML = "";
  let itemSize = containerSize / size;

  for(let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridCount.append(gridItem);

    gridItem.style.height = `${itemSize - 2}px`;
    gridItem.style.width = `${itemSize - 2}px`;
    gridItem.style.border = "solid 1px grey";
  }

  addColor(); // add random colors to grid items
}

createGrid(16);

// add button for changing size of the grid
const askButton = document.getElementById("resize");
askButton.addEventListener("click", () => {
  let newSize = prompt("Enter new size: 1-100: ");
  newSize = parseInt(newSize);

  if(newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else if (newSize) {
    alert("please enter a number:");
  }
});



