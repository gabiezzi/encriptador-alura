let buttonCopiar= document.querySelector(".boton-copiar");

buttonCopiar.addEventListener("click", copiarTexto);

 function copiarTexto() {
    let cuadroTexto2 = document.querySelector(".caja-desencriptar");
    cuadroTexto2.select();
    document.execCommand("copy");
  }
  
  