export function domOpsExample() {
  //What is DOM?
  console.dir(document); //logs the entire document object to the console

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

  //✅ Append new item to list
  const ul = document.createElement("ul");
  document.body.appendChild(ul);
  const addBtn = document.createElement("button");
  addBtn.textContent = "Add List Item";
  document.body.appendChild(addBtn);
  addBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = `Item ${ul.children.length + 1}`;
    ul.appendChild(li);
  });
}
