export function bubblingVsCapturing() {
  const parent = document.createElement("div");
  const child = document.createElement("button");
  parent.style.padding = "50px";
  parent.style.border = "2px solid red";
  child.textContent = "Click me";

  parent.appendChild(child);
  document.body.appendChild(parent);

  parent.addEventListener(
    "click",
    () => alert("Parent clicked (bubbling)"),
    false
  );
  child.addEventListener(
    "click",
    () => alert("Child clicked (bubbling)"),
    false
  );

  parent.addEventListener(
    "click",
    () => alert("Parent clicked (capturing)"),
    true
  );
}
