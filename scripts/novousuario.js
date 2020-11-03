
/* transformação da parte de login para pagina de cadastro */

function fun_cadastro(){
    const form = document.querySelector("form");
    const titulo = document.querySelector("h1");

    /* mudanças no titulo da pagina */
    titulo.classList.add("titulo-cadastro");
    titulo.innerHTML = "Cadastro ";
    /* mudanças no form da pagina */

    form.classList.add("form-cadastro");
    form.innerHTML = "<form >\n" +
        "            <div class=\"input-block\">\n" +
        "                <label for=\"login-nome\">Nome</label>\n" +
        "                <input type=\"text\" id=\"login-nome\" />\n" +
        "            </div>\n" +
        "            <div class=\"input-block\">\n" +
        "                <label for=\"login-email\">Email</label>\n" +
        "                <input type=\"email\" id=\"login-email\" />\n" +
        "            </div>\n" +
        "            <div class=\"input-block\">\n" +
        "                <label for=\"login-password\">Password</label>\n" +
        "                <input type=\"password\" id=\"login-password\" />\n" +
        "            </div>\n" +
        "            <button type=\"submit\" class=\"btn-login\">Cadastrar</button>\n" +
        "        </form>";
}