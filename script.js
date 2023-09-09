$(document) .ready(function(){
    
    function CienciasHumanas() {
        var escolha = prompt("Selecione a matéria (letra minúscula)");

        switch (escolha.toLowerCase()) { 
            case "história":
                alert("texto de História:");
                break;
            case "geografia":
                alert("texto de Geografia:");
                break;
            case "filosofia":
                alert("texto de Filosofia:");
                break;    
            case "sociologia":
                alert("texto de Sociologia:");
                break; 
            default:
                alert("Isso não existe ou a matéria foi escrita errada.");
                break;    
        }
    }
    var botaoMateria = document.getElementById("btn_ch");
    botaoMateria.addEventListener("click", CienciasHumanas);


    
    function CienciasDaNatureza() {
        var escolha = prompt("Selecione a matéria (letra minúscula)");

        switch (escolha.toLowerCase()) { 
            case "física":
                alert("texto de Física:");
                break;
            case "biologia":
                alert("texto de Biologia:");
                break;
            case "química":
                alert("texto de Química:");
                break;    
            default:
                alert("Isso não existe ou a matéria foi escrita errada.");
                break;    
        }
    }
    var botaoMateria = document.getElementById("btn_cn");
    botaoMateria.addEventListener("click", CienciasDaNatureza);


    
    function Linguagens() {
        var escolha = prompt("Selecione a matéria (letra minúscula)");

        switch (escolha.toLowerCase()) { 
            case "artes":
                alert("texto de Artes:");
                break;    
            case "inglês":
                alert("texto de Inglês:");
                break;
            case "português":
                alert("texto de Português:");
                break;    
            default:
                alert("Isso não existe ou a matéria foi escrita errada.");
                break;    
        }
    }
    var botaoMateria = document.getElementById("btn_ling");
    botaoMateria.addEventListener("click", Linguagens);
    
    
    $("#btn_mat") .click(function(){
        alert("teste1")
     });
    
    $("#btn_tec") .click(function(){
       alert("teste2")
    });

    $("#btn_pv") .click(function(){
        alert("teste3")
     });

     $("#btn_pp") .click(function(){
        alert("teste4")
     });



});
