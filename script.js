//getting elements by id from the DOM
const heading = document.getElementById("main-heading");
const changeTextBtn = document.getElementById("changeTextBtn");

//get elements by class name or querySelectorAll
const items = document.querySelectorAll(".item");

//change heading text on button click
changeTextBtn.addEventListener("click", () => {
  heading.textContent = "Heading Text updated via DOM!";
});

//Highlight items on click
items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("highlight");
  });
});

// Highlight all items
document.getElementById("highlightItemsBtn").addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.add("highlight");
  });
});
