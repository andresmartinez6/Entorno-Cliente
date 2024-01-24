const URL = "https://dummyjson.com/products";
let row = document.querySelector("section#productos .row");
let containerCarrito = document.querySelector("header div.compras");
let carrito = [ ];


document.addEventListener("DOMContentLoaded", ()=> { //ENTREGAR COMPLETO EL MIÉRCOLES
    
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

    let productosAgregados = {
        id:id,
        img:padre.querySelector("img").src,
        titulo : padre.querySelector("h4").textContent,
        precio:padre.querySelector(".card-body span").textContent,
        cantidad:1
    }

    // carrito = [...carrito,productosAgregados ];
    //Ahora se tiene el carrito vacio... o no?
    let estoyEnCarro = carrito.some(producto => producto.id === id); //console.log(estoyEnCarro);

    if(estoyEnCarro){ //Aumentar cantidad y precio
        /*OPCION 2
        carrito.map(producto => {
            if(producto.id === id) {
            producto.cantidad ++;
            }
        });
        */
        carrito.forEach(producto => {
            if(producto.id == id){
                producto.cantidad = producto.cantidad + 1;
            }
        })
    }else{  //Meter producto
        carrito.push(productosAgregados);
    }

    rellenarCarrito();
    totalActual();
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
				<p>${producto.cantidad} X ${producto.precio} € </p>
			</div>

			<div class="col-md-3">
				<button class="btn-close" onClick="borrarProductoCarrito(this)"></button>
			</div>
		</div>`;

    } ); 
}

function totalActual() {
    let sumaTotal = sumaTotalCarrito();
    if (carrito.length > 0) { //Si no hay productos
        let total = containerCarrito.querySelector('.total-row');

        // Si existe, actualiza el contenido del row
        if (total) {
            total.innerHTML = `<div class="col-md-12 text-end">
                <p>Total: ${sumaTotal} €</p>
            </div>`;
        } else {
            // Si no existe, crea el row con la información                                                     //2DO DIV PARA VACIAR CARRITO
            containerCarrito.innerHTML += `<div class="row my-3 py-3 total-row border-bottom bg-dark">
                <div class="col-md-12 text-end">
                    <p>Total: ${sumaTotal} €</p>
                </div>
                <div class="col-md-12 text-center">
				<button class="btn" onClick="vaciarCarrito()">Vaciar carrito</button>
			</div>
            </div>`;
        }
    } else {
        containerCarrito.innerHTML = ''; // Si no hay productos, limpia carrito
    }

}

function borrarProductoCarrito(producto){
    const productoIndex = Array.from(producto.closest('.row').parentElement.children).indexOf(producto.closest('.row'));
    carrito.splice(productoIndex, 1); // Elimina el producto del carrito
    producto.parentElement.parentElement.remove(); // Elimina el elemento
    totalActual()
}

function vaciarCarrito(){ //COMPROBAR
    carrito = [];
    limpiar();
}

function sumaTotalCarrito(){
    let sumaTotal = 0;

    carrito.forEach(producto => {
        let precio = producto.precio;
        sumaTotal += precio * producto.cantidad;
    });

    return sumaTotal.toFixed(2);
}

function limpiar(){
    containerCarrito.innerHTML = "";
}