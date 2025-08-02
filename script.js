// document.addEventListener("DOMContentLoaded", () => {
const button = document.getElementById("clickHereButton");
const output = document.getElementById("output");
button.addEventListener("click", () => {
  const msg = [
    "Hello, world!",
    "Button Clicked!",
    "You clicked button!!",
    "Welcome to our website!",
    "Enjoy your stay!",
  ];
  output.textContent = msg[Math.floor(Math.random() * msg.length)];
});
// });
