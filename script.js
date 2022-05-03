function quadrado(number) {
  const square = document.getElementById('pixel-board');
  const boxs = document.querySelectorAll(".d-flex");
  boxs.forEach(box => {
    box.remove();
  });
  if (number < 5){
    number = 5;
  } if (number > 50){
    number = 50;
  }
  for (let contador = 0; contador < number; contador++) {
    const div = document.createElement('div');
    div.classList.add('d-flex');
    for (let i = 0; i < number; i++) {
      const pixel = document.createElement('li');
      pixel.style.backgroundColor = 'white';
      pixel.onclick = (event) => {
        event.currentTarget.style.backgroundColor = localStorage.getItem('color');
      };
      pixel.classList.add('pixel');
      div.appendChild(pixel);
    }
    square.appendChild(div);
  }
}

quadrado(5);
localStorage.setItem('color', 'rgb(0, 0, 0)');

window.addEventListener('click', (event) => {
  if (
    event.target.id === 'color1' ||
    event.target.id === 'color2' ||
    event.target.id === 'black' ||
    event.target.id === 'color3'
  ) {
    let elemento_antigo = document.querySelector('.selected');
    elemento_antigo.classList.remove('selected');
    let elemento_novo = document.getElementById(event.target.id);
    elemento_novo.classList.add('selected');
    localStorage.setItem('color', elemento_novo.style.backgroundColor);
    console.log(elemento_novo.style);
  }
});

function handleClick() {
  const elemento = document.querySelectorAll(" .pixel");
  elemento.forEach((item) => {
    item.style.backgroundColor = "white";
  });
}

function verifica() {
  const alerta = document.getElementById("board-size");
  console.log(alerta);
  if (alerta.value === "") {
    alert("Board inválido!");
  } else {
    quadrado(alerta.value);
  }
}

function randomColor(){
  let black = document.getElementById("black");
  black.style.backgroundColor = "rgb(0, 0, 0)";
  let color1 = document.getElementById("color1");
  color1.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  let color2 = document.getElementById("color2");
  color2.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  let color3 = document.getElementById("color3");
  color3.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}
randomColor();
