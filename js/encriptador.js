
let buttonEncriptar = document.querySelector(".boton-encriptar");

let buttonDesencriptar = document.querySelector(".boton-desencriptar");

let cuadroTexto1 = document.querySelector(".caja-encriptar");

let cuadroTexto2 = document.querySelector(".caja-desencriptar");

let divisionImagenTexto = document.querySelector(".img-text");

let imagenSinTexto = document.querySelector(".imagen-textonoencontrado");

cuadroTexto1.addEventListener("click", function () {

    divisionImagenTexto.classList.remove("img-text2");
    divisionImagenTexto.classList.add("img-text");
    cuadroTexto2.value = "";
    cuadroTexto1.select();

});

buttonEncriptar.addEventListener("click", function () {

  

    if (!textoTieneMayusculasAcentos(cuadroTexto1.value)) {

        
    if (textoEstaVacio(cuadroTexto1.value)) {

        console.log("Esta vacio");


        divisionImagenTexto.classList.add("img-text2");
        divisionImagenTexto.classList.remove("img-text");
        imagenSinTexto.classList.add("imagen-textonoencontrado-bg")


    } else {

        
            
            console.log("NO esta vacio");

            divisionImagenTexto.classList.remove("img-text2");
            divisionImagenTexto.classList.add("img-text");
    
            encriptarBoton();

        
    
        }


    }
   









});

function encriptarBoton() {

    cuadroTexto2.value = encriptacion(cuadroTexto1.value);

}

function encriptacion(textoAEncriptar) {

    let codigo = ["enter", "imes", "ai", "ober", "ufat"];
    let vocales = ["e", "i", "a", "o", "u"];



    for (let i = 0; i < vocales.length; i++) {

        if (textoAEncriptar.includes(vocales[i])) {

            textoAEncriptar = textoAEncriptar.replaceAll(vocales[i], codigo[i]);

        }


    }

    return textoAEncriptar;
}

