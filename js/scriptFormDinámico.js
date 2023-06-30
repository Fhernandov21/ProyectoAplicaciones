

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
  