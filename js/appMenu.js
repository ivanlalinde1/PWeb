var Juegos=document.getElementById('Div1');
var Eventos=document.getElementById('Div2');
var Usuarios=document.getElementById('Div3');
var InsercionDeJuegos=document.getElementById('Div4');
var select=document.getElementById("Opciones");

function RevelarDiv1(){
    Juegos.className="Superpuesto";
    Eventos.className=Eventos.className+" Oculto";
    Usuarios.className=Usuarios.className+" Oculto";
    InsercionDeJuegos.className=InsercionDeJuegos+" Oculto";
}
function RevelarDiv2(){
    Juegos.className=Juegos.className+" Oculto";
    Eventos.className="Superpuesto";
    Usuarios.className=Usuarios.className+" Oculto";
    InsercionDeJuegos.className=InsercionDeJuegos+" Oculto";
}
function RevelarDiv3(){
    Juegos.className=Juegos.className+" Oculto";
    Eventos.className=Eventos.className+" Oculto";
    Usuarios.className="Superpuesto";
    InsercionDeJuegos.className=InsercionDeJuegos.className+" Oculto";
}
function RevelarDiv4(){
    Juegos.className=Juegos.className+" Oculto";
    Eventos.className=Eventos.className+" Oculto";
    Usuarios.className=Usuarios.className+" Oculto";
    InsercionDeJuegos.className="Superpuesto";
}
