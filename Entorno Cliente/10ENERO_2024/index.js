// localStorage.setItem("peso", 70);
// localStorage.setItem("nombre", "Antonio");
// localStorage.setItem("edad", 80);
// localStorage.removeItem("nombre");

localStorage.clear();

let persona = {
    nombre:"redua",
    edad:55,
    peso:72
}

let personaString = JSON.stringify(persona);
localStorage.setItem("persona", personaString);
















