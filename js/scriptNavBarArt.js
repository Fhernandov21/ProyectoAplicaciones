let navBarArt = document.createElement("navArt");
navBarArt.className = "navbar";
navBarArt.id="navbarArtículos";

// Crea el contenedor de botones dentro del <nav>
let navButtonsArt = document.createElement("div");
navButtonsArt.className = "nav-buttons";

// Array de enlaces y sus correspondientes nombres
let linksArt = [
  { href: "inicio.html", name: "Inicio" },
  { href: "videos.html", name: "Videos" },
  { href: "artículos.html", name: "Artículos" },
  { href: "inicio.html", name: "Fami.ly"},
  { href: "nosotros.html", name: "Nosotros" },
  { href: "suscripciones.html", name: "Suscríbete" },
  { href: "formularioColab.html", name: "Apóyanos!" }
];

// Crea y agrega los botones de enlace al contenedor
linksArt.forEach(function(link) {
  let a = document.createElement("a");
  a.href = link.href;

  let button = document.createElement("div");
  button.className = "button";
  button.id="btnArt";
  button.innerText = link.name;
  if(link.name=="Fami.ly"){
    button.className="page-name";
  }
  a.appendChild(button);
  navButtonsArt.appendChild(a);
});

// Agrega el contenedor de botones al <nav>
navBarArt.appendChild(navButtonsArt);

// Agrega el <nav> al principio del body
document.body.insertBefore(navBarArt, document.body.firstChild);

// Crea el segundo <nav> con la clase "navSimple"
let navSimpleArt = document.createElement("navArt");
navSimpleArt.className = "navSimple";
navSimpleArt.id = "navSimpleArtículos"

// Crea los elementos dentro del segundo <nav>
let pageNameArt = document.createElement("div");
pageNameArt.className = "page-name";
pageNameArt.innerText = "Fami.ly";

let btnNavArt = document.createElement("div");
btnNavArt.className = "btnNav";

// Agrega los elementos al segundo <nav>
navSimpleArt.appendChild(pageNameArt);
navSimpleArt.appendChild(btnNavArt);

// Agrega el segundo <nav> al principio del body, después del primer <nav>
document.body.insertBefore(navSimpleArt, navBarArt.nextSibling);

// Crea el contenedor vertical de botones
let navBarVerticalArt = document.createElement("div");
navBarVerticalArt.className = "navBarVertical";
navBarVerticalArt.id = "navBarVerticalArtículos";
linksArt = linksArt.filter(function(link) {
  return link.name !== "Fami.ly";
});
// Crea y agrega los botones de enlace al contenedor vertical
linksArt.forEach(function(link) {
  let a = document.createElement("a");
  a.href = link.href;

  let button = document.createElement("div");
  button.className = "button";
  button.innerText = link.name;

  a.appendChild(button);
  navBarVerticalArt.appendChild(a);
});

// Agrega el contenedor vertical de botones al final del body
document.body.appendChild(navBarVertical);
