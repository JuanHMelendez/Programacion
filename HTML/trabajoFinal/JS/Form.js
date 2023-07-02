const formulario = document.querySelector ("form");
formulario.addEventListener ("submit", handlesumit);


function handlesumit(event) {
    event.preventDefault();
    
    const user = {
        nombre: "",
        apellido: "",
        observaciones: "",

    }
    const info = new FormData (formulario);
    
    user.nombre= info.get("nombre");
    user.apellido= info.get("apellido");
    user.observaciones= info.get("observaciones");

    console.log(user);
}
