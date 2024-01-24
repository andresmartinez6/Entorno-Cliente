const URL = "https://dummyjson.com/products";
let row = document.querySelector("section#productos .row");
let containerCarrito = document.querySelector("header div.compras");
let carrito = [ ];


document.addEventListener("DOMContentLoaded", ()=> {
    
    async function cargarProductos() {
        let datos = await fetch(URL);
        let resultados = await datos.json();
        resultados.products.forEach(producto => {
                row.innerHTML += ` 
                    
                <div class="col-md-4">
					<div class="card border-primary mb-3" ">
						<div class="card-header">
							<img
								src="${producto.thumbnail}"
								alt=""
								class="img-fluid"
							/>
						</div>
						<div class="card-body d-flex flex-column">
							<h4 class="card-title">${producto.title}</h4>
							<p class="card-text">${producto.description}</p>
							<p> <span>  ${producto.price} </span> €</p>
							<button class="btn btn-danger mt-auto"  onClick="agregarAlCarrito(this,${producto.id})" >Añadir al carrito</button>
						</div>
					</div>
				</div>
                
                `  ;    
            

        });
    }
    
    cargarProductos();

    // AGREGAR PRDOCUTOS AL CARRITO
    
});

function agregarAlCarrito (elemento,id) {
      let padre = elemento.parentElement.parentElement;
    //   console.log(padre);     

    let productosAgregados = {
        id:id,
        img:padre.querySelector("img").src,
        titulo : padre.querySelector("h4").textContent,
        precio:padre.querySelector(".card-body span").textContent,
        cantidad:1
    }
   // Ahora tenemos el carrito vacio o no ?  
    // carrito = [...carrito,productosAgregados ];

    let estoyEnCarito =  carrito.some( producto => producto.id  === id );
    
    if(estoyEnCarito) {
        carrito.map( producto => {
            if(producto.id === id) {
                producto.cantidad ++;
            }
        });
    } else {
        carrito.push(productosAgregados);

    }

   rellenarCarrito();
}


function rellenarCarrito() {

    limpiar();

    carrito.forEach( producto => {
          containerCarrito.innerHTML += `
          <div
						class="row my-3 py-3 align-items-center border-bottom bg-dark text-center"
					>
						<div class="col-md-3">
							<img
								src="${producto.img}"
								alt=""
								class="img-fluid"
							/>
						</div>

						<div class="col-md-3">
							<p>${producto.titulo}</p>
						</div>

						<div class="col-md-3">
							<p>${producto.precio} X ${producto.cantidad} € </p>
						</div>

						<div class="col-md-3">
							<button class="btn-close" onClick=" borrarProductoCarrito(this)"></button>
						</div>
					</div>
					
          ` ;
    } );
    
    }

    function borrarProductoCarrito(elemento) {
         elemento.parentElement.parentElement.remove();
        
    }

    function limpiar() {
        containerCarrito.innerHTML = "";
    }
