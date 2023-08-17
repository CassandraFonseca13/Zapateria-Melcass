

const cerrarpanel = document.getElementById("cerrarpanel");
const imgobj = document.getElementById("imgobj");
const precioobj = document.getElementById("precioobj");
const nombreobj = document.getElementById("nombreobj");
const descripcionobj = document.getElementById("descripcionobj");
const comprarobj = document.getElementById("comprarobj");

const item1precio = document.getElementById("item1-precio");
const item2precio = document.getElementById("item2-precio");
const item3precio = document.getElementById("item3-precio");
const item4precio = document.getElementById("item4-precio");
const item5precio = document.getElementById("item5-precio");

let sandaliasInfo = [
    {
        "img": "imagenes/sandalias1.png",
        "precio":"$1200",
        "titulo":"Sandalias",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }, {
        "img": "imagenes/sandalias2.png",
        "precio":"$980.00",
        "titulo":"Sandalia1 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }, {
        "img": "imagenes/sandalias3.png",
        "precio":"$1050.00",
        "titulo":"Sandalia1 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }, {
        "img": "imagenes/sandalias4.png",
        "precio":"$750.00",
        "titulo":"Sandalia1 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }, {
        "img": "imagenes/sandalias5.png",
        "precio":"$1600.00",
        "titulo":"Sandalia1 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }
];

let botasInfo = [
    {
        "img": "imagenes/botas1.jpg",
        "precio":"$1450.00",
        "titulo":"Botas1 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }, {
        "img": "imagenes/botas2.jpg",
        "precio":"$1285.00",
        "titulo":"Bota2 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }, {
        "img": "imagenes/Botas3.png",
        "precio":"$720.00",
        "titulo":"Botas3 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }, {
        "img": "imagenes/Botas4.png",
        "precio":"$670.00",
        "titulo":"Botas4 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }, {
        "img": "imagenes/botas5.jpg",
        "precio":"$950.00",
        "titulo":"Botas5 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }
];

let zapatillasInfo = [
    {
        "img": "imagenes/Zapatillas1.jpg",
        "precio":"$750.00",
        "titulo":"Zapatillas1 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }, {
        "img": "imagenes/Zapatillas2.jpg",
        "precio":"$900.00",
        "titulo":"Zapatillas2 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }, {
        "img": "imagenes/Zapatillas3.jpg",
        "precio":"$650.00",
        "titulo":"Zapatillas3 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }, {
        "img": "imagenes/Zapatillas4.jpg",
        "precio":"$461.00",
        "titulo":"Zapatillas4 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }, {
        "img": "imagenes/Zapatillas5.jpg",
        "precio":"$479.00",
        "titulo":"Zapatillas5 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }
];

let zapatosInfo = [
    {
        "img": "imagenes/zapatos1.jpg",
        "precio":"$850.00",
        "titulo":"zapatos1 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }, {
        "img": "imagenes/Zapatos2.png",
        "precio":"$400.00",
        "titulo":"Zapatos2 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }, {
        "img": "imagenes/zapatos3.jpg",
        "precio":"$539.90",
        "titulo":"zapatos3 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }, {
        "img": "imagenes/zapatos4.jpg",
        "precio":"$440.00",
        "titulo":"zapatos4 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }, {
        "img": "imagenes/zapatos5.jpg",
        "precio":"$650.00",
        "titulo":"zapatos5 Nombre",
        "descripcion":"Tallas en existencia 22,23,24,25",
        "url":"https://www.amazon.com.mx/"
    }
];

let tiposDeCalzados= [sandaliasInfo,botasInfo,zapatillasInfo,zapatosInfo];

function mostrarPanel() {

    document.getElementById("paneldeobjeto").style.display = "flex";
}

function esconderPanel() {
    document.getElementById("paneldeobjeto").style.display = "none";
}
function actualizarPrecios(){
    item1precio.innerHTML =tiposDeCalzados[window.objsIndex][0].precio;
    item2precio.innerHTML =tiposDeCalzados[window.objsIndex][1].precio;
    item3precio.innerHTML =tiposDeCalzados[window.objsIndex][2].precio;
    item4precio.innerHTML =tiposDeCalzados[window.objsIndex][3].precio;
    item5precio.innerHTML =tiposDeCalzados[window.objsIndex][4].precio;
}
function enSeleccionarMenuItem(index){
    window.objsIndex = index;
    esconderPanel();
    actualizarPrecios();
}
function enClickImagen(index) {
    imgobj.src = tiposDeCalzados[window.objsIndex][index].img;
    precioobj.innerText =  tiposDeCalzados[window.objsIndex][index].precio;
    nombreobj.innerText =  tiposDeCalzados[window.objsIndex][index].titulo;
    descripcionobj.innerText =  tiposDeCalzados[window.objsIndex][index].descripcion;

    comprarobj.onclick = ()=>abrirUrl(index);

    mostrarPanel();
}

function abrirUrl(index){
    window.open(tiposDeCalzados[window.objsIndex][index].url,"_blank");
}

function ponerClickEvents() {
    item1.addEventListener("click", () => enClickImagen(0));
    item2.addEventListener("click", () => enClickImagen(1));
    item3.addEventListener("click", () => enClickImagen(2));
    item4.addEventListener("click", () => enClickImagen(3));
    item5.addEventListener("click", () => enClickImagen(4));

    menu1.addEventListener("click",()=> enSeleccionarMenuItem(0));
    menu2.addEventListener("click",()=> enSeleccionarMenuItem(1));
    menu3.addEventListener("click",()=> enSeleccionarMenuItem(2));
    menu4.addEventListener("click",()=> enSeleccionarMenuItem(3));


    

    cerrarpanel.onclick = esconderPanel;
    actualizarPrecios();
    esconderPanel();
}


ponerClickEvents();
