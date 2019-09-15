$(document).ready(function(){
    
    $('#preco').mask('000.000.000.000.000,00', {reverse: true});

    $("#form").validate({
        debug: false,
        rules: {
            cate:{
                required: true,
                

            },
            nome:{
                required: true,
                

            },
            preco:{
                required: true,
                

            },
            descricao: {
                required: true,
            },
            disponivel: {
                required: true,
            },
            imgProd: {
                required: true,
            },
            imgTamanho: {
                required: true,
            },
            

        },
        errorPlacement: function (error, element) {
            alert(element);
            var aux = $(element).parent();
            
                error.insertAfter(aux).addClass("invalid-feedback")
            
                //error.insertAfter(element).addClass("invalid-feedback")
            
            
            

            
        },
        messages: {
            cate:{
                required: "Campo Obrigatório"
            },
            nome:{
                required: "Campo Obrigatório"
            },
            preco:{
                required: "Campo Obrigatório"
            },
            descricao:{
                required: "Campo Obrigatório"
            },
            disponivel:{
                required: "Campo Obrigatório"
            },
            imgProd:{
                required: "Campo Obrigatório"
            },
            imgTamanho:{
                required: "Campo Obrigatório"
            },
           
            
        }
    });
    
  });