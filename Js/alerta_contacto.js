// Referenciamos el formulario.
const form = document.getElementById('formulario');

// Referenciar los inputs.
const nombre1 = document.getElementById('nombre')
const nombre2 = document.getElementById('nombre2')
const correo = document.getElementById('correo')
const mensaje = document.getElementById('mensaje')

// Funcion para dejar en blanco los inputs.
function borrarCampos(){
    nombre1.value = ''
    nombre2.value = ''
    correo.value = ''
    mensaje.value = ''
}

// Evento submit para mostrar el modal
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Muestra el modal.
    const modal = new bootstrap.Modal(document.getElementById('enviadoModal'));
    modal.show();

    // LLamado a la funcion para borrar los campos.
    borrarCampos();
});