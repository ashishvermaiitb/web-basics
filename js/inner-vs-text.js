export function innerVsTextExample() {
  //innerText vs textContent vs innerHTML
  const heading = document.getElementById("main-heading");
  console.log(heading.innerText); //gets the text content of the heading
  console.log(heading.textContent); //gets the text content of the heading, similar to innerText
  console.log(heading.innerHTML); //gets the HTML content of the heading, if any

  const para = document.createElement("p");
  para.innerText = "<strong>This is innerText</strong>";
  document.body.appendChild(para);

  const para2 = document.createElement("p");
  para2.textContent = "<strong>This is textContent</strong>";
  document.body.appendChild(para2);

  const para3 = document.createElement("p");
  para3.innerHTML = "<strong>This is innerHTML</strong>";
  document.body.appendChild(para3);
}
