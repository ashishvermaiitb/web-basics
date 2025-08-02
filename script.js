/*comenting addEvcentListener to avoid multiple bindings
If you want to use it, uncomment the line below
if we are not deferring the script, we can use DOMContentLoaded
to ensure the DOM is fully loaded before running the script*/
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
