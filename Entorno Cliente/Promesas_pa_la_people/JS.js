'use strict';

const url = "https://dummyjson.com/products";

const cargar = document.querySelector("div.cargando");
const row = document.querySelector("div.container .row");


fetch(url).then((respuesta) => {
    return respuesta.json();
}).then((productos) => {
    cargar.style.display = "none";
    productos.products.forEach(element => {
        row.innerHTML += `
            <div class="col-md-4">
                <div class="card border-secondary mb-3">
                    <div class="card-header">
                        <picture>
                            <source srcset="${element.thumbnail}" class="img-fluid">
                            <img src="./media/ZKZg.gif" alt="" class="img-fluid">
                        </picture>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">${element.title}</h4>
                        <p class="card-text">${element.description}</p>
                        <a href="detalle.html?id=${element.id}" class="btn btn-danger">Ver más</a>
                    </div>
                </div>
            </div>`;
    });
}).catch((error) => {
    console.log(error);
});
