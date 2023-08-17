const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");
const menu4 = document.getElementById("menu4");

const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");

function cambiarObj(index){
    window.objsIndex = index;
}
cambiarObj(1);
function sandalias(){

    item1.src = "imagenes/sandalias1.png";
    item2.src = "imagenes/sandalias2.png";
    item3.src = "imagenes/sandalias3.png";
    item4.src = "imagenes/sandalias4.png";
    item5.src = "imagenes/sandalias5.png";
    cambiarObj(0);
}

function botas(){

    item1.src = "imagenes/botas1.jpg";
    item2.src = "imagenes/botas2.jpg";
    item3.src = "imagenes/Botas3.png";
    item4.src = "imagenes/Botas4.png";
    item5.src = "imagenes/botas5.jpg";
    cambiarObj(1);
}
function zapatillas(){
    item1.src = "imagenes/Zapatillas1.jpg";
    item2.src = "imagenes/Zapatillas2.jpg";
    item3.src = "imagenes/Zapatillas3.jpg";
    item4.src = "imagenes/Zapatillas4.jpg";
    item5.src = "imagenes/Zapatillas5.jpg";
    cambiarObj(2);
    
}
function zapatos(){

    item1.src = "imagenes/zapatos1.jpg";
    item2.src = "imagenes/Zapatos2.png";
    item3.src = "imagenes/zapatos3.jpg";
    item4.src = "imagenes/zapatos4.jpg";
    item5.src = "imagenes/zapatos5.jpg";

    cambiarObj(3);
}


menu1.addEventListener("click",sandalias);
menu2.addEventListener("click",botas);
menu3.addEventListener("click",zapatillas);
menu4.addEventListener("click",zapatos);
