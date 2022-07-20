$(document).ready(function () {
  $("#altaEmpresa").submit(function (e) {
    validar(e);
  });
});

function validar(e) {
  let error = false;
  let errorDos = false;

  let regexEmailEmpresa =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;




  $("#cuitEmpresa").removeClass("is-invalid");
  $("#mailEmpresa").removeClass("is-invalid");
  $("#telefono").removeClass("is-invalid");

  /*
  $("#calle").removeClass("is-invalid");

  if ($("#tipoDomicilio").val() != "") {
    errorDos = true;
    $("#calle").addClass("is-invalid");
  }

  if (errorDos == true && $("#calle").val() != "") {
    errorDos = false;
  }
 

     /* Valida cambio tipo de domicilio 
     if($("#tipoDomicilio").val() != ""){
      errorDos = true;
      $("#calle").addClass("is-invalid");
      $("#altura").addClass("is-invalid");
      $("#codPostal").addClass("is-invalid");
      $("#provincia").addClass("is-invalid");
      $("#municipio").addClass("is-invalid");
      $("#localidad").addClass("is-invalid");
  }


  if(errorDos==true 
      && $("#calle").val() != ""
      && $("#altura").val() != ""
      && $("#codPostal").val() != ""
      && $("#provincia").val() != ""
      && $("#municipio").val() != ""
      && $("#localidad").val() != ""){
        errorDos = false;
  }
  */

  /* Si completa tipo de domicilio borra el error*/
  $("#calle").removeClass("is-invalid");
  $("#altura").removeClass("is-invalid");
  $("#codPostal").removeClass("is-invalid");
  $("#provincia").removeClass("is-invalid");
  $("#municipio").removeClass("is-invalid");
  $("#localidad").removeClass("is-invalid");

  /* Valida cambio tipo de domicilio */
  if ($("#tipoDomicilio").val() != "") {
    errorDos = true;
  }

  /* Agrega el error*/
  if (errorDos == true && $("#calle").val() == "") {
    $("#calle").addClass("is-invalid");
  }

  if (errorDos == true && $("#altura").val() == "") {
    $("#altura").addClass("is-invalid");
  }
  if (errorDos == true && $("#codPostal").val() == "") {
    $("#codPostal").addClass("is-invalid");
  }
  if (errorDos == true && $("#provincia").val() == "") {
    $("#provincia").addClass("is-invalid");
  }
  if (errorDos == true && $("#municipio").val() == "") {
    $("#municipio").addClass("is-invalid");
  }
  if (errorDos == true && $("#localidad").val() == "") {
    $("#localidad").addClass("is-invalid");
  }

  /* Valida todos los campos req y cambia estado*/
  if (
    errorDos == true &&
    $("#calle").val() != "" &&
    $("#altura").val() != "" &&
    $("#codPostal").val() != "" &&
    $("#provincia").val() != "" &&
    $("#municipio").val() != "" &&
    $("#localidad").val() != ""
  ) {
    errorDos = false;
  }

  /*NORMAL*/

  if ($("#cuitEmpresa").val().length <= 10) {
    error = true;
    $("#cuitEmpresa").addClass("is-invalid");
  }

  if (!$("#mailEmpresa").val().match(regexEmailEmpresa)) {
    error = true;
    $("#mailEmpresa").addClass("is-invalid");
  }

  if ($("#telefono").val().length <= 7 ) {
    error = true;
    $("#telefono").addClass("is-invalid");
  }

  if (errorDos) {
    e.preventDefault();
  }

  if (error) {
    e.preventDefault();
  }
}
