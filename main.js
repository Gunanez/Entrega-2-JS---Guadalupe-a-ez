

// Todas nuestras obras disponibles //  
let galeria = [
    {id: 1, titulo: "The Cosmos", autor: "Lucrecia Rey Caro", estilo: "Art Print", precio: 250000, favorita: false, imagen:"./imagenes/thecosmos.png"},
    {id: 2, titulo: "Horse 5", autor: "Lucrecia Rey Caro", estilo: "Art Print", precio: 300000, favorita: false, imagen:"./imagenes/Horse5.png"},
    {id: 3, titulo: "Siesta", autor: "Fernando Cometto", estilo: "Oleo", precio: 280000, favorita: false, imagen:"./imagenes/Siesta.png"},
    {id: 4, titulo: "Cosas de tango", autor: "Alberto Martinez", estilo: "Oleo", precio: 320000, favorita: false, imagen: "./imagenes/CosasDeTango.png"},
    {id: 5, titulo: "Los Enamorados", autor: "Lucrecia Rey Caro", estilo:"Dibujo", precio: 2100000, favorita: false, imagen:"./imagenes/LosEnamorados.png"},
    {id: 6, titulo: "PRANAYAMA", autor: "Agustin Sasha", estilo:"Escultura", precio: 320000, favorita: false, imagen:"./imagenes/Pranayama.png"},
    {id: 7, titulo: "KUNDALINI", autor: "Agustin Sasha", estilo:"Escultura", precio: 310000, favorita: false, imagen:"./imagenes/Kundalini.png"},
    {id: 8, titulo: "PADMASANA", autor: "Agustin Sasha", estilo: "Escultura", precio: 270000, favorita: false, imagen:"./imagenes/Padmasana.png"},
    {id: 9, titulo: "BRINDIS", autor: "Alberto Martinez", estilo: "Oleo", precio: 280000, favorita: false, imagen:"./imagenes/Brindis.png"}

];
const renderizarProductos = () => {
    let contenedor = document.querySelector(".galeria");
    let htmlCompletoDeObras = "";

    galeria.forEach( (galeria) => {
        htmlCompletoDeObras += `
        <div>
            <img src="${galeria.imagen}" alt="${galeria.titulo}" widht="200">
            <h4>${galeria.titulo}</h4>
            <h5>${galeria.precio}</h5>
            <button onclick="agregarObra(${galeria.id})">Agregar al carrito</button>
        </div> 
        `
    });
    contenedor.innerHTML = htmlCompletoDeObras;
};

renderizarProductos();

// Agregar Obra a carrito //
let carritoObras = JSON.parse(localStorage.getItem("carritoObras")) || [];

const STORAGE_KEY = "carritoObras";


window.agregarObra = (id) => {
const obra = galeria.find(o => o.id === id);
    if (!obra) return;

const cart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

if (!cart.some(o => o.id === id)) {
    cart.push(obra);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
};

//Recoger datos del formulario//
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

const name = document.getElementById('name').value;
const phone = document.getElementById('phone').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;


    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);


});
