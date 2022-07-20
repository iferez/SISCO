const btnEnviar = document.getElementById('btn-enviar');

const validación = (e) => {
    novalido = false;

  const usuario = document.getElementById('formulario_nombre');
  const email = document.getElementById('formulario_email');
  if (usuario.value === "") {
    alert("Por favor, escribe tu nombre de usuario.");
    usuario.focus();
    usuario.classList.add("bg-danger");
    novalido = true;
  }
    
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    novalido = true;
    email.classList.add("bg-danger");
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    email.focus();
    email.classList.add("bg-danger");
    novalido = true;
  }

  if(novalido = true){
    e.preventDefault();
  }

}