window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnEj1").addEventListener("click", ej1);
    document.querySelector("#btnEj2").addEventListener("click", ej2);
    document.querySelector("#btnEj3").addEventListener("click", ej3);
    document.querySelector("#btnEj4").addEventListener("click", ej4);
    document.querySelector("#btnEj5").addEventListener("click", ej5);
    document.querySelector("#btnEj6").addEventListener("click", ej6);
    document.querySelector("#btnEj7").addEventListener("click", ej7);
    document.querySelector("#btnEj8").addEventListener("click", ej8);
    document.querySelector("#btnEj9").addEventListener("click", ej9);
    document.querySelector("#btnEj10").addEventListener("click", ej10);
    document.querySelector("#btnEj11").addEventListener("click", ej11);
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
    stri = stri.toUpperCase();
    let vocales = "AEIOU";
    let resultado = 0;
    let largo = stri.length;
    for (i = 0; i < largo; i++) {
        if (vocales.includes(stri.charAt(i))) {
            resultado++
        }
    }
    document.querySelector("#resEj2").innerHTML = `El texto tiene ${resultado} vocales.`
}

function ej3() {
    let stri = document.querySelector("#txt1Ej3").value;
    let mayus = stri.toUpperCase();
    document.querySelector("#resEj3").innerHTML = mayus;
}

function ej4() {
    let striA = document.querySelector("#txt1Ej4").value
    let striB = document.querySelector("#txt2Ej4").value
    let res;
    if (striA.includes(striB)) {
        res = "si"
    } else {
        res = "no"
    }
    document.querySelector("#resEj4").innerHTML = `El texto b ${res} está contenido en el texto a`;
}

function ej5() {
    let stri = (document.querySelector("#txt1Ej5").value).toUpperCase();
    let caracter1 = stri.charAt(0);
    let res;
    switch (caracter1) {
        case "A":
            res = "Canelones";
            break
        case "B":
            res = "Maldonado";
            break
        case "C":
            res = "Rocha";
            break
        case "D":
            res = "Treinta y Tres";
            break
        case "E":
            res = "Cerro Largo";
            break
        case "F":
            res = "Rivera";
            break
        case "G":
            res = "Artigas";
            break
        case "H":
            res = "Salto";
            break
        case "I":
            res = "Paysandú";
            break
        case "J":
            res = "Río Negro";
            break
        case "K":
            res = "Soriano";
            break
        case "L":
            res = "Colonia";
            break
        case "M":
            res = "San José";
            break
        case "N":
            res = "Flores";
            break
        case "O":
            res = "Florida";
            break
        case "P":
            res = "Lavalleja";
            break
        case "Q":
            res = "Duraznos";
            break
        case "R":
            res = "Tacuarembó";
            break
        case "S":
            res = "Montevideo";
            break

    }
    document.querySelector("#resEj5").innerHTML = res
}

function ej6() {
    let stri = (document.querySelector("#txt1Ej6").value).toLowerCase();
    let cantVo = 0,
        cantCo = 0;
    let largo = stri.length
    let vocales = "aeiou"
    for (let i = 0; i < largo; i++) {
        let aux = stri.charAt(i);
        if (vocales.includes(aux)) {
            cantVo++
        }
    }
    cantCo = (largo - cantVo)
    if (largo > 10) {
        document.querySelector("#resEj6").innerHTML = `El texto tiene ${cantVo} vocales.`
    } else {
        document.querySelector("#resEj6").innerHTML = `El texto tiene ${cantCo} consonantes.`
    }
}

function ej7() {
    let stri = (document.querySelector("#txt1Ej7").value).toLowerCase();
    let largo = stri.length;
    let char0M = stri.charAt(0).toUpperCase()
  /*   console.log(char0M) */
    stri = char0M + (stri.substring(1, (largo)))
    document.querySelector("#resEj7").innerHTML = stri
}

function ej8() {
    let stri = (document.querySelector("#txt1Ej8").value);
    let largo = stri.length;
    let may = 0,
        min = 0;
    let striFormat = stri.replaceAll(" ", "")
    console.log(striFormat);
    for (let i = 0; i < largo; i++) {
        let aux = striFormat.charCodeAt(i);
        if (aux <= 90 && aux >= 65) {
            may++
        } else if (aux <= 122 && aux >= 97) {
            min++
        }
    }
    document.querySelector("#resEj8").innerHTML = `El texto tiene ${may} mayusculas y ${min} minusculas.`
}

function ej9() {
    let stri = (document.querySelector("#txt1Ej9").value);
    let errores = "",
        may = 0,
        min = 0,
        numeros = "0987654321",
        especiales = ".@#!",
        espacio = " ",
        errorEspa = false,
        errorEspe = true,
        errorNum = true;
    for (let i = 0; i < stri.length; i++) {
        let aux = stri.charAt(i);
        let auxC = stri.charCodeAt(i);
        if (auxC <= 90 && auxC >= 65) {
            may++
        } else if (auxC <= 122 && auxC >= 97) {
            min++
        }
        if (i !== 0) {
            if (numeros.includes(aux)) {
                errorNum = false
            }
        }
        if (espacio.includes(aux)) {
            errorEspa = true
        }
        if (especiales.includes(aux)) {
            errorEspe = false
        }

    }

    if (stri.length < 5) {
        errores += "la contraseña debe tener al menos 5 caracteres <br>"
    }
    if (numeros.includes(stri.charAt(0))) {
        errores += "La contraseña no puede iniciar con número <br>"
    } else if (errorNum) {
        errores += "la contraseña debe tener números pero no al inicio <br>"
    }
    if (may === 0) {
        errores += "La contraseña debe tener una mayuscula <br>"
    }
    if (min === 0) {
        errores += "La contraseña debe tener una minuscula <br>"
    }
    if (errorEspa) {
        errores += "La contraseña no debe tener espacios <br>"
    }
    if (errorEspe) {
        errores += "La contraseña debe tener caracteres especiales <br>"
    }
    if (stri === "") {
        errores = "La contraseña no puede ser vacía"
    }
    document.querySelector("#resEj9").innerHTML = errores
}

function ej10() {
    let stri = document.querySelector("#txt1Ej10").value;
    let largo = stri.length;
    let numeros = "0987654321",
        res = 0;
    for (let i = 0; i < largo; i++) {
        if (numeros.includes(stri.charAt(i))) {
            res += Number(stri.charAt(i));
        }
    }
    document.querySelector("#resEj10").innerHTML = `La suma de los números dentro del string es ${res}`
}

function ej11() {
    let stri = document.querySelector("#txt1Ej11").value;
    let res = "";
    for (let i = 0; i < stri.length; i++) {
        let aux = stri.charAt(i);
        switch (aux.toLowerCase()) {
            case "a":
                res += "4";
                break;
            case "e":
                res += "3";
                break;
            case "i":
                res += "1";
                break;
            case "o":
                res += "0";
                break;
            case "u":
                res += "8";
                break;
            default:
                res += aux.toLowerCase();
                break;
        }
    }
    document.querySelector("#resEj11").innerHTML = res
}