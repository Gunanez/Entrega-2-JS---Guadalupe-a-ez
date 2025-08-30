const STORAGE_KEY = "carritoObras"; 

let obrasDelCarrito = JSON.parse(localStorage.getItem("carritoObras")) || []

const renderizarProductos = () => {
    let contenedor = document.querySelector(".obrasElegidas");
    let htmlCompletoDeObras = "";

    obrasDelCarrito.forEach( (galeria) => {
        htmlCompletoDeObras += `
        <div>
            <img src="${galeria.imagen}" alt="${galeria.titulo}">
            <h4>${galeria.titulo}</h4>
            <h5>${galeria.precio}</h5>
            <button onclick= "removeById(${galeria.id})">Borrar del carrito</button>
        </div> 
        `
    });
    contenedor.innerHTML = htmlCompletoDeObras;
};

renderizarProductos();

// Borrar de a un item //
window.removeById = (id) => {
    const cart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const nuevo = cart.filter(o => o.id !== Number(id));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevo));
    obrasDelCarrito = nuevo;
    renderizarProductos();
};

//Vaciar carrito//
document.getElementById("clean").addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    obrasDelCarrito = [];
    renderizarProductos();
});