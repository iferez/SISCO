$(document).ready(function () {
    $("#altaEmpresa").submit(function (e) {
      validar(e);
    });
  });
  
  function validar(e) {
    let error = false;
    let errorDos = false;
  
    $("#cuitEmpresa").removeClass("is-invalid");
    $("#razonSocialEmpresa").removeClass("is-invalid");
  
  
    /* Si completa tipo de domicilio borra el error*/
    $("input[name=calleName]").removeClass("is-invalid");
    $("input[name=alturaName]").removeClass("is-invalid");
    $("input[name=codPostalName]").removeClass("is-invalid");
    $("input[name=provinciaName]").removeClass("is-invalid");
    $("input[name=municipioName]").removeClass("is-invalid");
    $("input[name=localidadName]").removeClass("is-invalid");
  
    /* Valida cambio tipo de domicilio */
    if ($("input[name=tipoDomicilioName]").val() != "") {
      errorDos = true;
    }
  
    /* Agrega el error*/
    if (errorDos == true && $("#calle").val() == "") {
      $("input[name=calleName]").addClass("is-invalid");
    }
  
    if (errorDos == true && $("#altura").val() == "") {
      $("input[name=alturaName]").addClass("is-invalid");
    }
    if (errorDos == true && $("#codPostal").val() == "") {
      $("input[name=codPostalName]").addClass("is-invalid");
    }
    if (errorDos == true && $("#provincia").val() == "") {
      $("input[name=provinciaName]").addClass("is-invalid");
    }
    if (errorDos == true && $("#municipio").val() == "") {
      $("input[name=municipioName]").addClass("is-invalid");
    }
    if (errorDos == true && $("#localidad").val() == "") {
      $("input[name=localidadName]").addClass("is-invalid");
    }
  
    /* Valida todos los campos req y cambia estado*/
    if (
      errorDos == true &&
      $("input[name=calleName]").val() != "" &&
      $("input[name=alturaName]").val() != "" &&
      $("input[name=codPostalName]").val() != "" &&
      $("input[name=provinciaName]").val() != "" &&
      $("input[name=municipioName]").val() != "" &&
      $("input[name=localidadName]").val() != ""
    ) {
      errorDos = false;
    }
  
    /*NORMAL*/
  
    if ($("#cuitEmpresa").val() == "") {
      error = true;
      $("#cuitEmpresa").addClass("is-invalid");
    }
  
    if ($("#razonSocialEmpresa").val() == "") {
      error = true;
      $("#razonSocialEmpresa").addClass("is-invalid");
    }
  
    if (errorDos) {
      e.preventDefault();
    }
  
    if (error) {
      e.preventDefault();
    }
  }
  