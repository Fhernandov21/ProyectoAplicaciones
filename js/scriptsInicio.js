
let navBar = document.createElement("navArt");


navBar.className = "navbar";

// Crea el contenedor de botones dentro del <nav>
let navButtons = document.createElement("div");
navButtons.className = "nav-buttons";

// Array de enlaces y sus correspondientes nombres
let links = [
  { href: "inicio.html", name: "Inicio" },
  { href: "videos.html", name: "Videos" },
  { href: "artículos.html", name: "Artículos" },
  { href: "inicio.html", name: "Fami.ly"},
  { href: "nosotros.html", name: "Nosotros" },
  { href: "suscripciones.html", name: "Suscríbete" },
  { href: "formularioColab.html", name: "Apóyanos!" }
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
let navSimple = document.createElement("navArt");
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

if(document.title=="Family Artículos"){
  navBar.id="navbarArtículos";
  navSimple.id = "navSimpleArtículos";
  navBarVertical.id = "navBarVerticalArtículos";
}

window.onload = function() {
  var divs = document.getElementsByClassName('miniaturaControlVideo');
  for (const element of divs) {
    if(element.parentElement.parentElement.parentElement.id=="contenedorSVideos"){
      element.onclick = function() {
        window.location.href = 'video.html'; 
      };
      }
      else{
        element.onclick = function() {
          window.location.href = 'articulo.html'; 
        };
      }
    
  }
};