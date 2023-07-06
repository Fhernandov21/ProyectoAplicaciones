let controlBotones = document.querySelectorAll('.controlBotón');
let miniaturaPequeña = document.getElementById('miniaturaPequeña');
const buttonPressed = e => {
    let botón = e.target.id;
    let input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.accept = 'image/*';
        input.style.display = 'none';

        input.addEventListener('change', function() {
          let  file = this.files[0];
          var fileType = file.type;
          if (file) {
            let reader = new FileReader();
            reader.onload = function(e) {
                if(botón=="btnSubir2"){
                    miniaturaPequeña.style.backgroundImage = 'url(' + e.target.result + ')';
                }
                else{
                    if(fileType != 'video/mp4'){
                        alert("Por favor, selecciona un archivo MP4");
                        this.value = "";
                         return;
                    }
                    
                    let miniaturaGrande = document.getElementById("miniaturaGrande");
                    miniaturaGrande.style.backgroundImage = 'url(' + e.target.result + ')';
                }
            };
            reader.readAsDataURL(file);
          }
        });

        input.click();
      }

    for (const element of controlBotones) {
      element.addEventListener('click', buttonPressed
        );
    }