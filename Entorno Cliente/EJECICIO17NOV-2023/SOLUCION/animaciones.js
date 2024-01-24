// ? Elementos
let botones = document.querySelectorAll("#botonera > input[type='button']");
let fondo = document.querySelectorAll("div#pantallas > div");

// ? Reset Css
function resetCss() {

    for (let i = 0; i < fondo.length; i++) {
        fondo[i].style = "";
    }

    for (let i = 0; i < texto3.length; i++) {
        texto3[i].style = "";
        texto3[i].innerHTML = "PANTALLA"+[i+1];
    }  
    
    for (let i = 0; i < imagen9.length; i++) {
        imagen9[i].src = "https://picsum.photos/300/300";       
    }
};

// ?  Boton Cambiar color de fondo a todas

function cambiar1() {
    for (let i = 0; i < fondo.length; i++) {
        fondo[i].style.backgroundColor = "yellow";
    }    
};

// ?  Boton Cambiar color de fondo solo a 1 pantalla
let fondo2 = document.getElementById("pantalla1");

function cambiar2() {
    fondo2.style.backgroundColor = "yellow";  
};


// ? Boton Cambiar el tamaño del mensaje a todas
let texto3 = document.querySelectorAll("div h3");
function cambiar3() {
    for (let i = 0; i < texto3.length; i++) {
        texto3[i].style.fontSize = "3rem";
    }  
};


// ? Boton Cambiar el tamaño del mensaje a solo 1 pantalla
let texto4 = document.querySelector("div h3");

function cambiar4() {
    texto4.style.fontSize = "3rem";
};


// ? Boton Cambiar el borde completamente a todas
function cambiar5() {
    for (let i = 0; i < fondo.length; i++) {
        fondo[i].style.border = "10px solid black";
    }  
};

// ? Boton Cambiar el tamaño del mensaje a solo 1 pantalla
function cambiar6() {
    fondo2.style.border = "10px solid black";
};

// ? Boton Cambiar la fuente de letra del mensaje a todos
function cambiar7() {
    for (let i = 0; i < texto3.length; i++) {
        texto3[i].style.fontFamily = "Roboto";
    }  
};

// ? Boton Cambiar la fuente de letra del mensaje a solo 1 pantalla
function cambiar8() {
    texto4.style.fontFamily = "Roboto";
};

// ? Boton Cambiar la imagen a todas
let imagen9 = document.querySelectorAll("img");
function cambiar9(){
    for (let i = 0; i < imagen9.length; i++) {
        imagen9[i].src = "pantalla"+[i+1]+".jpg"; 
    }
}

// ? Boton Cambiar la imagen solo a 1 pantalla
let imagen10 = document.querySelector("img");
function cambiar10(){
    imagen10.src = "pantalla1.jpg"; 
}

// ? Boton Cambiar mensaje a todas
function cambiar11() {
    for (let i = 0; i < texto3.length; i++) {
        texto3[i].innerHTML = "Mensaje Cambiado";
    }  
};

// ? Boton Cambiar mensaje solo a 1 pantalla
function cambiar12() {
    texto4.innerHTML = "Mensaje Cambiado";
};


// ? Bucle para resetear al pinchar en cada uno de los botones y que además invoca de forma 
// ? dinámica las funciones, cambiar1(), cambiar2(),.... cambiar12();

for(let i=0; i< botones.length; i++) {
    botones[i].addEventListener("click",()=>{
        resetCss();
        window[`cambiar${i+1}`]();          
    });
}

