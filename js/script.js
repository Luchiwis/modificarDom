// constantes
const palabras = [
  "dudaste",
  "agregaba",
  "diligentes",
  "pasaba",
  "desesperante",
  "escalonando",
  "gramática",
  "elevado",
  "incorporaban",
  "peninsulares",
  "atarugose",
  "ofrecida",
  "melódica",
  "dejarla",
  "borboteo",
  "medicinas",
  "desentrañar",
  "resulta",
  "levantar",
  "tristón",
  "turbio",
  "chuparle",
  "superabundante",
  "avergüence",
  "desatendiendo",
  "sigan",
  "almazaras",
  "redil",
  "rodilla",
  "padrinos",
  "rasgando",
  "infernal",
  "enviaba",
  "desalentados",
  "preguntado",
  "desesperaciones",
  "bonísimo",
  "mula",
  "vetustez",
  "caldeados",
  "astro",
  "mandara",
  "voi",
  "acechan",
  "conferirla",
  "fregoteos",
  "conciliación",
  "electores",
  "auparse",
  "tendencias",
];

// variables
celdas = document.querySelectorAll("td");
boton_camioneta = document.querySelector("#camioneta")

// funciones

function colorRandom() {
  r = parseInt(Math.random() * 255);
  g = parseInt(Math.random() * 255);
  b = parseInt(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

function palabraRandom() {
    return palabras[parseInt(Math.random()*palabras.length)]
}

function cambiarColor(objetos) {
  objetos = Array.from(objetos);
  console.log(objetos);
  if (!objetos.length) {
    return true;
  }
  objeto = objetos.shift();
  objeto.style.backgroundColor = colorRandom();
  objeto.innerText = palabraRandom();

  setTimeout(() => {
    cambiarColor(objetos);
  }, 100);
}

boton_camioneta.addEventListener("click", ()=>{
    source = boton_camioneta.getAttribute("src")
    if (source == "amarok.jpeg"){
        boton_camioneta.setAttribute("src","hilux.jpg")
    }else if(source == "hilux.jpg"){
        boton_camioneta.setAttribute("src","amarok.jpeg")
    }
    cambiarColor(celdas)
})