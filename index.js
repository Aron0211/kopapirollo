/* Új játék gombra kattintva megjelenítjük a jéátékteret

1. meg kell fogni a gombot és a játékteret
2. Rétesszük az eseménykezelőt a gombra
3. belerjuk a egfelelő html kódot.
*/
const lista = ["ko", "papir", "ollo"];
const ujJatekGomb = document.querySelector("#ujjatek");
const jatekterElem = document.getElementsByClassName("jatekter");
console.log(jatekterElem);
ujJatekGomb.addEventListener("click", megjelenit);

function megjelenit() {
  const htmlKod = `
      <div id="gep">
        <h2>A gép tippje</h2>
        <div class="kep">
          <img src="kepek/placeholder.jpg" alt="kopapriollo" />
        </div>
      </div>
      <div id="jatekos">
        <h2>A Játékos tippje</h2>
        <div class="gombok">
          <button id="ko">K</button>
          <button id="papir">P</button>
          <button id="ollo">O</button>
        </div>
        <div class="kep">
          <img src="kepek/placeholder.jpg" alt="kopapriollo" />
        </div>
      </div>
    `;
  jatekterElem[0].innerHTML = "";
  jatekterElem[0].insertAdjacentHTML("beforeend", htmlKod);
  const jatekGombok = document.querySelectorAll(".gombok button");
  jatekGombok[0].addEventListener("click", kivalaszt);
  jatekGombok[1].addEventListener("click", kivalaszt);
  jatekGombok[2].addEventListener("click", kivalaszt);
}

function kivalaszt(event) {
  console.log(event.target.id);
  let jatekosKepElem = document.querySelector("#jatekos img");
  if (event.target.id == "ko") {
    jatekosKepElem.src = "kepek/ko.PNG";
  } else if (event.target.id == "papir") {
    jatekosKepElem.src = "kepek/papir.PNG";
  } else {
    jatekosKepElem.src = "kepek/ollo.PNG";
  }
  geptipp(event.target.id);
}
function geptipp(jTipp) {
  let gTipp = Math.floor(Math.random() * 3);
  console.log(gTipp);
  console.log(lista[gTipp]);
  let gepKepElem = document.querySelector("#gep img");
  if (lista[gTipp] == "ko") {
    gepKepElem.src = "kepek/ko.PNG";
  } else if (lista[gTipp] == "papir") {
    gepKepElem.src = "kepek/papir.PNG";
  } else {
    gepKepElem.src = "kepek/ollo.PNG";
  }
  ellenorzes(lista[gTipp], jTipp);
}

function ellenorzes(gTipp, jTipp) {
  const gyozelem = document.getElementById("gyoztes");
  let f1 = gTipp == "ko" && jTipp == "papir";
  let f2 = gTipp == "papir" && jTipp == "ollo";
  let f3 = gTipp == "ollo" && jTipp == "ko";
  if (gTipp == jTipp) {
    gyozelem.innerText = "Döntetlen";
  } else if (f1 || f2 || f3) {
    gyozelem.innerText = "Játékos nyert!";
  } else {
    gyozelem.innerText = "A gép nyert!";
  }
}
