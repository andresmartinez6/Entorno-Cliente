

document.addEventListener("DOMContentLoaded", ()=> {
    const URL = "https://dummyjson.com/products";
    let row = document.querySelector("section#productos .row");
    let carrito = [];
    
    async function cargarProductos() {
        let datos = await fetch(URL);
        let resultados = await datos.json();
        resultados.products.forEach(producto => {
                row.innerHTML += ` 
                    
                <div class="col-md-4">
					<div class="card border-primary mb-3" style="max-width: 20rem">
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
							<p>${producto.price}</p>
							<button class="btn btn-danger mt-auto"  onClick="agregarAlCarrito(this)" >Añadir al carrito</button>
						</div>
					</div>
				</div>
                
                `  ;    
            

        });
    }
    
    cargarProductos();

    // AGREGAR PRDOCUTOS AL CARRITO
    function agregarAlCarrito (elemento) {
          let elementoActual = elemento.parentElement.parentElement;
          console.log(elementoActual);     
    }






});

