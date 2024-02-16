let botonEncriptar = document.querySelector(".btn-encriptar");
let botonDesencriptar = document.querySelector(".btn-desencriptar");
let munieco = document.querySelector(".contenedorImagenFigura");
let contenedor = document.querySelector(".contenido-parrafo");
let resultado = document.querySelector(".texto-Final");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar () {
    oncultarAdelante();
    let inputTextoArea = recuperarTexto()
    resultado.textContent = encriptarTexto(inputTextoArea);
}

function desencriptar() {
    oncultarAdelante();
    let inputTextoArea = recuperarTexto()
    resultado.textContent = desencriptarTexto(inputTextoArea);
}

function recuperarTexto(){
    let inputTextoArea = document.querySelector(".inputTextoArea")
    return inputTextoArea.value
}

function oncultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

//ENCRIPTAR TEXTO

function encriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        } else {
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

//DESENCRIPTAR TEXTO

function desencriptarTexto(mensaje) {
    let texto = mensaje;
    let  textoFinal = "";

    for(let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i+3;
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

//BOTON DE COPIRAR

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".texto-Final").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Hola");
})

//HOLA