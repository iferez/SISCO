$(document).ready(function () {
  $("#formDatosEmpresa").submit(function (e) {
    validar(e);
  });
});
function validar(e) {
  let error = false;
  let cuitEmpresaObtenido = $("#cuitEmpresa").val().length;
  let regexEmailEmpresa =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;




  if (cuitEmpresaObtenido > 11 || cuitEmpresaObtenido < 11) {
    error = true;
    $("#cuitEmpresa").addClass("is-invalid");
  }

  if ($("#razonSocial").val() == "") {
    error = true;
    $("#razonSocial").addClass("is-invalid");
  }

  if ($("#actPrincipal option:selected").val() == 0) {
    error = true;
    $("#actPrincipal").addClass("is-invalid");
  }

  if ($("#rump").val() == "") {
    error = true;
    $("#rump").addClass("is-invalid");
  }

  if ($("#tDomicilio option:selected").val() == 0) {
    error = true;
    $("#tDomicilio").addClass("is-invalid");
  }

  if ($("#provincia option:selected").val() == 0) {
    error = true;
    $("#provincia").addClass("is-invalid");
  }

  
  if ($("#telefono").val().length < 8) {
    error = true;
    $("#telefono").addClass("is-invalid");
  }

  if (!$("#validationMailEmpresa").val().match(regexEmailEmpresa)) {
    error = true;
    $("#validationMailEmpresa").addClass("is-invalid");
  }

  if (error) {
    e.preventDefault();
  }
}
