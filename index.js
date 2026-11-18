/* 1. Az új játék gombra kattintva legyen új játékterünk */

/* Ha a játékos a kő/papír/olló gombokra kattint, akkor a megfelelő kép jelenjen meg */

const ujJatekGomb=document.getElementById("ujjatek");
const jatekTer=document.getElementsByClassName("jatekter");

console.log(jatekTer)
ujJatekGomb.addEventListener("click", megjelenit);

function megjelenit(){
    const htmlKod=`
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
      `
    jatekTer[0].innerHTML=""
    jatekTer[0].insertAdjacentHTML("beforeend", htmlKod)
    const gombElemek=document.querySelectorAll(".gombok button") /* listát kapunk */
    gombElemek[0].addEventListener("click", kivalaszt)
    gombElemek[1].addEventListener("click", kivalaszt)
    gombElemek[2].addEventListener("click", kivalaszt)
    
}

function kivalaszt(event){
  const kep=document.querySelector("#jatekos img")
  console.log(event.target)
  console.log(event.target.id)
  kep.src=`kepek/${event.target.id}.PNG`
  gepValasztasa(event.target.id)
}

function gepValasztasa(jValasztasa){
  //meg kell fogni a gép képet//
  //generálunk egy véletlen számot - véletlen számnak megfelelően ko.Png...//
  const kep = document.querySelector("#gep img")
  console.log(kep)
  let veletlen =Math.floor(Math.random()*3)
  console.log(veletlen)
  if (veletlen == 1){
    kep.src = "kepek/ko.PNG"
  }else if(veletlen == 1){
    kep.src = "kepek/papir.PNG"
  }else{
    kep.src = "kepek/ollo.PNG"
  }
  ellenorzes(veletlen, jValasztasa)
}
function ellenorzes(veletlen, jValasztasa){
// össze kell hasonlítani a gép választását és a játékos választását//
//gép választása: veletlen//
//játékos választása: event.target.id//

//ezek a feltételek amikor a játékos nyer//
let f1 =(jValasztasa == "ko" && veletlen == 2)
let f2 =(jValasztasa == "papir" && veletlen == 0)
let f3 =(jValasztasa == "ollo" && veletlen == 1)

let f4 =(jValasztasa == "ko" && veletlen == 1)
let f5 =(jValasztasa == "papir" && veletlen == 2)
let f6 =(jValasztasa == "ollo" && veletlen == 0)

let szoveg =""
if(f1 || f2 || f3){
  szoveg = "Játékos nyert"
}else if(f4 || f5 || f6 ){
  szoveg = "Gép nyert"
}else{
  szoveg = "döntetlen"
}

const kiirElem=document.getElementById("gyoztes")
kiirElem.innerHTML=`<p>IDE írom a győztes nevét</p>`

}



