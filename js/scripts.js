/*
JS VIDEOS
*/


const navbar = document.querySelector('.navbar');
const bubble = document.getElementById('bubble');
const menu = document.getElementById('menu');
const menuContainer = document.querySelector('.menu-container');

const navbarHeight = navbar.offsetHeight;
menu.style.top = `-${navbarHeight}px`;


menu.style.marginTop = navbar.offsetHeight+ 'px';

bubble.addEventListener('click', () => {
  menu.classList.toggle('active');
  bubble.classList.toggle('active');
  menuContainer.style.zIndex = '9999';
  // move the bubble to the left-end of the menu when it's active
  if (menu.classList.contains('active')) {
    menuContainer.style.zIndex = '9999';
    bubble.style.left = menu.offsetWidth + 'px';
  } else {
    menuContainer.style.zIndex = '0';
    menuContainer.classList.add('active');
    bubble.style.left = '-30px';
  }
});

menu.addEventListener('transitionend', () => {
  // reset the left value of the bubble when the menu is hidden
  if (!menu.classList.contains('active')) {
    bubble.style.left = '-30px';
  }
});

window.addEventListener('resize', () => {
  // update the left value of the bubble when the window is resized
  if (menu.classList.contains('active')) {
    bubble.style.left = menu.offsetWidth + 'px';
  }
});



function añadirTxtOtro() {
  let select = document.getElementById("cmbProfesión");
  let selectedOption = select.options[select.selectedIndex].value;
  let formInputs = document.getElementsByClassName("form-inputs")[0];
  let siguienteControlUsuario = document.getElementById("labelMensaje");
  let imagenProfesión = document.getElementById("imgProf");
  let imagenProfesión2 = document.getElementById("imgProf2");

  if(selectedOption=="Profesor"){
    imagenProfesión.setAttribute("src","../resources/img/pofeso.png");
    imagenProfesión.style.height = "50%";
    imagenProfesión2.setAttribute("src","../resources/img/pofeso.png");
    imagenProfesión2.style.height = "50%";
  }
  if(selectedOption=="Psicólogo"){
    imagenProfesión.setAttribute("src","../resources/img/sicoloco.png");
    imagenProfesión.style.height = "50%";
    imagenProfesión2.setAttribute("src","../resources/img/sicoloco.png");
    imagenProfesión2.style.height = "50%";
  }
  if(selectedOption=="Pediatra"){
    imagenProfesión.setAttribute("src","../resources/img/dogtor.png");
    imagenProfesión.style.height = "50%";
    imagenProfesión2.setAttribute("src","../resources/img/dogtor.png");
    imagenProfesión2.style.height = "50%";
  }
  if (selectedOption === "Otro") {
    imagenProfesión.setAttribute("src","../resources/img/desocupaojaja.png");
    imagenProfesión.style.height = "50%";
    imagenProfesión2.setAttribute("src","../resources/img/desocupaojaja.png");
    imagenProfesión2.style.height = "50%";
    let controlUsuario = document.createElement("input");
    controlUsuario.setAttribute("type", "text");
    controlUsuario.setAttribute("id", "otroProfesion");
    controlUsuario.setAttribute("name", "otroProfesion");
    controlUsuario.setAttribute("placeholder", "Me decico a...");
    
    formInputs.insertBefore(controlUsuario,siguienteControlUsuario);
  } else {
    let otroProfesionInput = document.getElementById("otroProfesion");
    if (otroProfesionInput) {
      formInputs.removeChild(otroProfesionInput);
    }
  }
}

