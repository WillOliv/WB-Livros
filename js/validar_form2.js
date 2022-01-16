function validarForm() {

    var erro = document.getElementById("erro");

    try {
      var a = document.forms["formulario"]["usuario"].value;
      if (a !== "Willamsdom1@gmail.com") {
        throw "Usuário não encontrado, Cadastre-se";
    }
  
    var c = document.forms["formulario"]["senha"].value;
    if (c.length < 8 || c !== "13579531") {
        throw "Usuário não encontrado, cadastre-se";
    }

    return true;
    
    } catch (err) {
      erro.innerHTML = err;
      return false;
    }
}
