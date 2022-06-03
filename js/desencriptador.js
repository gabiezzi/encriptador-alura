
buttonDesencriptar.addEventListener("click", function () {


    if (textoEstaVacio(cuadroTexto1.value)) {

        console.log("Esta vacio");


        divisionImagenTexto.classList.add("img-text2");
        divisionImagenTexto.classList.remove("img-text");
        imagenSinTexto.classList.add("imagen-textonoencontrado-bg")


    } else {

        console.log("NO esta vacio");

        divisionImagenTexto.classList.remove("img-text2");
        divisionImagenTexto.classList.add("img-text");
       
        desencriptarBoton();
    }

    

});

function desencriptarBoton() {

    cuadroTexto2.value = desencriptacion(cuadroTexto1.value);

}

function desencriptacion(textoADesencriptar) {

    let codigo = ["enter", "imes", "ai", "ober", "ufat"];
    let vocales = ["e", "i", "a", "o", "u"];


    for (let i = 0; i < codigo.length; i++) {

        if (textoADesencriptar.includes(codigo[i])) {

            textoADesencriptar = textoADesencriptar.replaceAll(codigo[i], vocales[i]);

        }


    }

    return textoADesencriptar;


}
