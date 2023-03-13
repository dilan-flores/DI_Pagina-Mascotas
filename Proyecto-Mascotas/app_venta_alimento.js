let op;
let op2;
let op3;
let op4;
let op5;

let condicion1 = false; // Verifica si está seleccionada alguna opción de "material"
let condicion2 = false; // Verifica si está seleccionada alguna opción de "tamaño" 

op = document.querySelector("#op")
op.addEventListener("click", ()=>{
    op.style.backgroundColor = "darkcyan";
    op.style.color = "white";

    op2.style.backgroundColor = "gainsboro";
    op2.style.color = "black";
    condicion1 = true;
});

op2 = document.querySelector("#op2")
op2.addEventListener("click", ()=>{
    op2.style.backgroundColor = "darkcyan";
    op2.style.color = "white";

    op.style.backgroundColor = "gainsboro";
    op.style.color = "black";
    condicion1 = true;
});

op3 = document.querySelector("#op3")
op3.addEventListener("click", ()=>{
    op3.style.backgroundColor = "darkcyan";
    op3.style.color = "white";

    op4.style.backgroundColor = "gainsboro";
    op4.style.color = "black";

    op5.style.backgroundColor = "gainsboro";
    op5.style.color = "black";
    condicion2 = true;
});

op4 = document.querySelector("#op4")
op4.addEventListener("click", ()=>{
    op4.style.backgroundColor = "darkcyan";
    op4.style.color = "white";

    op3.style.backgroundColor = "gainsboro";
    op3.style.color = "black";

    op5.style.backgroundColor = "gainsboro";
    op5.style.color = "black";
    condicion2 = true;
});


op5 = document.querySelector("#op5")
op5.addEventListener("click", ()=>{
    op5.style.backgroundColor = "darkcyan";
    op5.style.color = "white";
    
    op3.style.backgroundColor = "gainsboro";
    op3.style.color = "black";

    op4.style.backgroundColor = "gainsboro";
    op4.style.color = "black";
    condicion2 = true;
});
/*
let comprar = document.querySelector(".boton-comprar")
comprar.addEventListener("click", ()=>{
    alert("EXITO EN LA COMPRA")
});
*/
function mostrar(){
    if(condicion1 && condicion2){
        swal({
            title:'Compra exitosa',
            icon:'success'
        })
    }else{
        swal({
            title:'Compra no realizada',
            icon:'error'
        })
    }
    
}
/*
function cambiarColor(color){
    op.style.color = color;
}
*/