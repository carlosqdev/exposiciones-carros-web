let listadoDeComentarios = document.querySelector('#ListMessages');
let botonGuardarComentario = document.querySelector('#save');
let html = "";

function validarSiExisteInformacion(){
  let nombre = document.querySelector('#nombre');
  let mensaje = document.querySelector('#mensaje');
  if (nombre.value.length && mensaje.value.length)
    return CrearNuevoMensaje(nombre.value, mensaje.value);
  else
    alert("Desbes escribir tu nombre y mensaje");
}

function LimpiarFormulario(){
  document.querySelector('#nombre').value = '';
  document.querySelector('#mensaje').value = '';
}

function CrearNuevoMensaje(nombreVisitante, mensajeVisitante){
  html += `<div class="message">
  <div class="message-body">
    <h4 class="message-body_userName">${nombreVisitante}</h4>
    <p class="message-body_content">${mensajeVisitante}</p>
  </div>
</div>`;
  return listadoDeComentarios.innerHTML = html;
}

botonGuardarComentario.addEventListener('click', (e) => {
  e.preventDefault();
  validarSiExisteInformacion();
  LimpiarFormulario();
})