function textoTieneMayusculasAcentos(textoAValidar) {

    let span = document.querySelector(".aviso-mayus-acentos");
    span.innerHTML = "";
    
    const image = document.createElement("img");
    image.src = "img/aviso.png";

    if (tieneAcentos(textoAValidar) || esMayuscula(textoAValidar)) {
        
        image.classList.add("aviso-mayus-acentos-img")
        span.appendChild(image);
        span.innerHTML += "Solo letras minúsculas y sin acentos";
        span.classList.add("aviso-mayus-acentos");
      
        

        return true;
    } else {

       
        span.innerHTML = "";

        return false;


    } 






}

function tieneAcentos(textoAValidar) {

    let acentos = ["á", "é", "í", "ó", "ú", "à", "è", "ì", "ò", "ù"];
    for (let i = 0; i < acentos.length; i++) {
        if (textoAValidar.includes(acentos[i])) {
            return true;
        }
    }

    return false;
}



function esMayuscula(textoAValidar) {

    for (let i = 0; i < textoAValidar.length; i++) {

        letra = textoAValidar.substring(i, i + 1);

        if (letra === letra.toUpperCase()) {
            return true;
        }

    }

    return false;

}

