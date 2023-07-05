var table = document.getElementById('tablaSuscripciones');
    var rows = table.getElementsByTagName('tr');

    for (var i = 1; i < rows.length; i++) {
      rows[i].onclick = selectRow;
    }
    var textboxes = document.getElementsByClassName('txtEnable')

    function selectRow() {
      // Remove the 'selected' class from all rows
      for (var i = 1; i < rows.length; i++) {
        rows[i].classList.remove('selected');
      }

      // Add the 'selected' class to the clicked row
      this.classList.add('selected');

      // Get the values of the selected row's columns
      var columns = this.getElementsByTagName('td');
      var values = [];
      for (var i = 0; i < columns.length; i++) {
        values.push(columns[i].innerText);
      }
      values[3]=values[3].replace(/\$/g, "");
      // Update the textboxes with the column values
      textboxes[0].value = values[0];
      if(values[1]=="Todo"){
        textboxes[1].value = 9999999999;
      }else{
        textboxes[1].value = values[1];
      }
      textboxes[2].value = values[2];
      textboxes[3].value = values[3];
    }

    let btnCancelar = document.getElementById('btnCancelar');
    let btnAdminSave = document.getElementById('btnAdminSave');
    let btnAdmin = document.getElementsByClassName('btnAdmin');
    function EnableTexts(){
        if(!isFileSelected()){
            return false;
        }
        for(var i = 0; i<=3; i++){
            textboxes[i].disabled=false;
        }
    }

    function DisableTexts(){
        for(var i = 0; i<=3; i++){
            textboxes[i].disabled=true;
        }
    }
    
    function isFileSelected(){
        if(textboxes[0].value==""){
            alert("Selecciona una suscripción en la tabla para editar!");
            return false;
        }
        return true;
    }

    function GuardarCambios(){
        let check = document.getElementsByClassName("diavloPapadio");
        if(check.length>0){
            return;
        }
        let botonesAdminSus = document.getElementById('TablaSus');
        let controlUsuario = document.createElement("input");
        controlUsuario.setAttribute("type", "password");
        controlUsuario.setAttribute("class", "diavloPapadio");
        controlUsuario.setAttribute("name", "txtPass");
        let label = document.createElement("label");
        label.textContent = "Ingrese su contraseña: ";
        label.setAttribute("style","margin: 10px 10px 0px 0px");
        botonesAdminSus.appendChild(label);
        botonesAdminSus.appendChild(controlUsuario);
    }