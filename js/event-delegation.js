//✅ Event Delegation Example
export function eventDelegationExample() {
  const container = document.createElement("div");
  container.id = "btn-container";
  document.body.appendChild(container);
  for (let i = 1; i <= 3; i++) {
    const btn = document.createElement("button");
    btn.textContent = `Button ${i}`;
    btn.dataset.id = i; // Adding a data attribute
    container.appendChild(btn);
  }
  //Event Delegation
  container.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      alert(`You clicked Button ${e.target.dataset.id}`);
    }
  });
}
