"use strict";

const URL = "https://dummyjson.com/products";
let row = document.querySelector("section#productos .row");
let containerCarrito = document.querySelector("header div.compras");
let numProductosCarrito = document.querySelector(".carritoCompras span");
let carrito = [];

let cantidadTotalCarrito = carrito.reduce((acum, producto) => {
  return acum + producto.cantidad;
}, 0);

numProductosCarrito.textContent = cantidadTotalCarrito;

document.addEventListener("DOMContentLoaded", () => {
  async function cargarProductos() {
    let datos = await fetch(URL);
    let resultados = await datos.json();
    resultados.products.forEach(producto => {
      row.innerHTML += `
        <div class="col-md-4">
          <div class="card border-primary mb-3">
            <div class="card-header">
              <img src="${producto.thumbnail}" alt="" class="img-fluid" />
            </div>
            <div class="card-body d-flex flex-column">
              <h4 class="card-title">${producto.title}</h4>
              <p class="card-text">${producto.description}</p>
              <p><span>${producto.price}</span> €</p>
              <button class="btn btn-danger mt-auto" onClick="agregarAlCarrito(this, ${producto.id})">Añadir al carrito</button>
            </div>
          </div>
        </div>
      `;
    });
  }

  cargarProductos();
});

function agregarAlCarrito(elemento, id) {
  cantidadTotalCarrito++;

  let padre = elemento.parentElement.parentElement;
  numProductosCarrito.textContent = cantidadTotalCarrito;

  let productosAgregados = {
    id: id,
    img: padre.querySelector("img").src,
    titulo: padre.querySelector("h4").textContent,
    precio: padre.querySelector(".card-body span").textContent,
    cantidad: 1
  };

  let estoyEnCarrito = carrito.some(producto => producto.id === id);
  if (estoyEnCarrito) {
    carrito.forEach(producto => {
      if (producto.id === id) {
        producto.cantidad++;
      }
    });
  } else {
    carrito.push(productosAgregados);
  }

  console.log(carrito);

  rellenarCarrito();
}

function rellenarCarrito() {
  limpiar();

  containerCarrito.innerHTML += `
    <button class="borrarTodo" onClick="borrarTodo()">Borrar Todo</button>
  `;

  carrito.forEach(producto => {
    containerCarrito.innerHTML += `
      <div class="row my-3 py-3 align-items-center border-bottom bg-dark text-center">
        <div class="col-md-3">
          <img src="${producto.img}" alt="" class="img-fluid" />
        </div>
        <div class="col-md-3">
          <p>${producto.titulo}</p>
        </div>
        <div class="col-md-3">
          <p>${producto.precio} X ${producto.cantidad}</p>
        </div>
        <div class="col-md-3">
          <button class="btn-close" onClick="borrarProductoCarrito(this, ${producto.id})"></button>
        </div>
      </div>
    `;
  });
}

function borrarTodo() {
  containerCarrito.innerHTML = "";
  carrito = [];
  cantidadTotalCarrito = 0;
  numProductosCarrito.textContent = cantidadTotalCarrito;
}

function borrarProductoCarrito(elemento, id) {
  cantidadTotalCarrito--;
  numProductosCarrito.textContent = cantidadTotalCarrito;

  elemento.parentElement.parentElement.remove();
  carrito = carrito.filter(producto => producto.id !== id);
}

function restarDelCarrito(id) {
  carrito.forEach(producto => {
    if (producto.id === id) {
      producto.cantidad--;
    }
  });
}

function limpiar() {
  containerCarrito.innerHTML = "";
}
