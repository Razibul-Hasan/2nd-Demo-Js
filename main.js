// Load All Function When Load Your Window

window.onload = function () {
  main();
};

//My Main Function For Event And Changing Value

function main() {
  const main = document.getElementById("bgcolor");
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", function () {
    const generateColor = rgbColor();
    main.style.backgroundColor = generateColor;
    btn.style.color = generateColor;
  });
}

//Generate RGB Color Code

function rgbColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
