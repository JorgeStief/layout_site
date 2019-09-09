

function limpa_formulario_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('estado').value = ("");

}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('estado').value = (conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulario_cep();
        alert("CEP não encontrado.");
        document.getElementById('cep').value = ("");
    }
}

function pesquisacep() {
    
    valor = $("#cep").val();
    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');
    
    alert(cep);
    //Verifica se campo cep possui valor informado.
    if (cep !== "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {
            
            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('estado').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = '//viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

            $("#cep").addClass("is-valid").removeClass("is-invalid")
            $("").insertAfter("#cep");

        } //end if.
        else {
            //cep é inválido.
            if($("#cep").attr('class') != "form-control is-invalid" ){
                $("#cep").addClass("is-invalid");
                $("<div> Cep Inválido</div>").insertAfter("#cep").addClass("invalid-feedback");
            }
            limpa_formulario_cep();
            
        }
    } //end if.
    else {
        if($("#cep").attr('class') != "form-control is-invalid" ){
            $("#cep").addClass("is-invalid");
            $("<div> Cep Inválido</div>").insertAfter("#cep").addClass("invalid-feedback");
        }
        //cep sem valor, limpa formulário.
        limpa_formulario_cep();
    }
}

function formatar(mascara, documento) {
    var i = documento.value.length;
    var saida = mascara.substring(0, 1);
    var texto = mascara.substring(i);

    if (texto.substring(0, 1) != saida) {
        documento.value += texto.substring(0, 1);
    }

}




function exibe(i) {



    document.getElementById(i).readOnly = true;




}

function desabilita(i) {

    document.getElementById(i).disabled = true;
}
function habilita(i) {
    document.getElementById(i).disabled = false;
}


function showhide() {
    var div = document.getElementById("newpost");

    if (idade() >= 18) {

        div.style.display = "none";
    }
    else if (idade() < 18) {
        div.style.display = "inline";
    }

}

$("#Nome").blur(function () {
    if ($("#Nome").val() == "") {
        if($("#Nome").attr('class') == "form-control is-invalid" ){

        }
        else{
            $("#Nome").addClass("is-invalid");
            $("<div> Campo Obrigatório</div>").insertAfter("#Nome").addClass("invalid-feedback");

        }
    }
    else{
        $("#Nome").addClass("is-valid").removeClass("is-invalid")
        $("").insertAfter("#Nome");
    }


});

$("#cpf").blur(function () {
    if ($("#cpf").val() == "") {
        if($("#cpf").attr('class') != "form-control is-invalid" ){
            $("#cpf").addClass("is-invalid");
            $("<div> Campo Obrigatório</div>").insertAfter("#cpf").addClass("invalid-feedback");

        }
        
    }
    else{
        var regexp = new RegExp("^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$")
        if(regexp.test($("#cpf").val())){
            $("#cpf").addClass("is-valid").removeClass("is-invalid")
            $("").insertAfter("#cpf");
        }
        else{
            if($("#cpf").attr('class') != "form-control is-invalid" ){
                $("#cpf").addClass("is-invalid");
                $("<div> CPF Inválido</div>").insertAfter("#cpf").addClass("invalid-feedback");

            }
            else{
                //$("CPF Inválido").insertAfter("#cpf");
                $("#cpf").parent().parent().find("div.invalid-feedback").html("CPF Inválido");

            }
            
        }
        
    }


});




