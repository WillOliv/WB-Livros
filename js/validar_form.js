function validarForm(){

    var validarUsuario = document.getElementById("usuario_area");
    try {
        var a = document.forms["meuForm"]["usuario"].value;
        if (a == null || a == "") {
            throw "Usuário inválido";
        }
    }

    catch (err) {
        validarUsuario.style.color = "#FF0000";
        validarUsuario.innerHTML = err;
        return false;
    }

    return true;

    ////////////////////////////////////////
    var validarEmail = document.getElementById("email_area");
    try {
        var b = document.forms["meuForm"]["email"].value;
        var requisito1 = b.indexOf("@");
        var requisito2 = b.lastIndexOf(".");
        var requisito3 = b.indexOf(".com");
        if (requisito1 < 1 || requisito2 < requisito1 + 2 || requisito3 + 2 >= requisito2.length || requisito3 < 1 || requisito3 > 2 || b == null || b == ""){
            throw "Email inválido"
        }

    }

    catch (err) {
        validarEmail.style.color = "#FF0000";
        validarEmail.innerHTML = err;
        return false;
    }

    return true;

    ////////////////////////////////////////
    var validarSenha = document.getElementById("senha_area");
    try{
        var c = document.forms["meuForm"]["senha"].value
        var req1 = c.length(8)
        if (c < req1 || c == null || c == "") {
            throw "Digite no mínimo 8 caracteres"
        }
    }

    catch (err) {
        validarSenha.style.color = "#FF0000";
        validarSenha.innerHTML = err;
        return false;
    }

    return true;

    var validarRepSenha = document.getElementById("repSenha_area");
    try{
        var d = document.forms["meuForm"]["repSenha"].value
        if (d != c){    
            throw "As senhas precisam ser iguais"
        }
    }

    catch (err) {
        validarRepSenha.style.color = "#FF0000";
        validarRepSenha.innerHTML = err;
        return false;
    }

    return true;
}
