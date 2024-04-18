window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnEj1").addEventListener("click", ej1);
    document.querySelector("#btnEj2").addEventListener("click", ej2);
}

function ej1() {
    let stri = document.querySelector("#txt1Ej1").value;
    let largo = ((stri.length) - 1);
    if ((stri.charAt(1)) === (stri.charAt(largo))) {
        document.querySelector("#resEj1").innerHTML = "Empieza y termina con la misma letra"
    } else {
        document.querySelector("#resEj1").innerHTML = "No empieza y termina con la misma letra"
    }
}

function ej2() {
    let stri = document.querySelector("#txt1Ej2").value;
    stri=stri.toUpperCase();
    let vocales = "AEIOU";
    let resultado=0;
    let largo = stri.length;
    for (i = 0; i < largo; i++) {
        if (vocales.includes(stri.charAt(i))){
            resultado++
        }
    }
    document.querySelector("#resEj2").innerHTML = `El texto tiene ${resultado} vocales.`
}