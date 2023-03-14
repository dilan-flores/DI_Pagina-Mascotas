let op;
let condicion = false; // Verifica si está seleccionada la hora y fecha


op = document.querySelector(".calendario")
op.addEventListener("click", ()=>{
    op.style.backgroundColor = "darkcyan";
    op.style.color = "white";
    condicion = true;
});


function mostrar(){
    if(condicion){
        swal({
            title:'Cita agendada',
            icon:'success'
        })
    }else{
        swal({
            title:'Cita no realizada',
            icon:'error'
        })
    }
}