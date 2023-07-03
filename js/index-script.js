
  
let navBar = document.createElement("nav");
navBar.className = "navbar";

// Crea el contenedor de botones dentro del <nav>
let navButtons = document.createElement("div");
navButtons.className = "nav-buttons";

// Array de enlaces y sus correspondientes nombres
let links = [
  { href: "#", name: "Inicio" },
  { href: "../html/videos.html", name: "Videos" },
  { href: "../html/artículos.html", name: "Artículos" },
  { href: "../html/inicio.html", name: "Fami.ly"},
  { href: "../html/nosotros.html", name: "Nosotros" },
  { href: "../html/suscripciones.html", name: "Suscríbete" },
  { href: "../html/formularioColab.html", name: "Apóyanos!" }
];

// Crea y agrega los botones de enlace al contenedor
links.forEach(function(link) {
  let a = document.createElement("a");
  a.href = link.href;

  let button = document.createElement("div");
  button.className = "button";
  button.innerText = link.name;
  if(link.name=="Fami.ly"){
    button.className="page-name";
  }
  a.appendChild(button);
  navButtons.appendChild(a);
});

// Agrega el contenedor de botones al <nav>
navBar.appendChild(navButtons);

// Agrega el <nav> al principio del body
document.body.insertBefore(navBar, document.body.firstChild);

// Crea el segundo <nav> con la clase "navSimple"
let navSimple = document.createElement("nav");
navSimple.className = "navSimple";

// Crea los elementos dentro del segundo <nav>
let pageName = document.createElement("div");
pageName.className = "page-name";
pageName.innerText = "Fami.ly";

let btnNav = document.createElement("div");
btnNav.className = "btnNav";

// Agrega los elementos al segundo <nav>
navSimple.appendChild(pageName);
navSimple.appendChild(btnNav);

// Agrega el segundo <nav> al principio del body, después del primer <nav>
document.body.insertBefore(navSimple, navBar.nextSibling);

// Crea el contenedor vertical de botones
let navBarVertical = document.createElement("div");
navBarVertical.className = "navBarVertical";
links = links.filter(function(link) {
  return link.name !== "Fami.ly";
});
// Crea y agrega los botones de enlace al contenedor vertical
links.forEach(function(link) {
  let a = document.createElement("a");
  a.href = link.href;

  let button = document.createElement("div");
  button.className = "button";
  button.innerText = link.name;

  a.appendChild(button);
  navBarVertical.appendChild(a);
});

// Agrega el contenedor vertical de botones al final del body
document.body.appendChild(navBarVertical);




window.onload = function() {
  var divs = document.getElementsByClassName('miniaturaControlVideo');
  for (const element of divs) {
    element.onclick = function() {
      window.location.href = '../html/video.html'; 
    };
  }
};