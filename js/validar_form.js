function validarForm() {

    var erro = document.getElementById("erro");

    try {
      var a = document.forms["formulario"]["usuario"].value;
      if (a == null || a == "") {
        throw "Usuário inválido";
    }
  
    var b = document.forms["formulario"]["email"].value;
    var requisito1 = b.indexOf("@");
    var requisito2 = b.lastIndexOf(".");
    if (requisito1 < 1 || requisito2 < requisito1 + 2 || requisito2 + 2 >= b.length){
        throw "Email inválido";
    }
  
    var c = document.forms["formulario"]["senha"].value;
    if (c.length < 8) {
        throw "A senha deve conter no mínimo 8 caracteres"
    }

    var d = document.forms["formulario"]["repSenha"].value;
    if (d !== c ){
        throw "Senhas não condizem"
    }

    return true;
    
    } catch (err) {
      erro.innerHTML = err;
      return false;
    }
}
