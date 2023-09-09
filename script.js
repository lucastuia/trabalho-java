$(document) .ready(function(){
    
    function CienciasHumanas() {
        var escolha = prompt("Selecione a matéria");

        switch (escolha.toLowerCase()) { 
            case "História":
                alert("Matéria: História. Este é o texto de História:")
                break;
            case "Geografia":
                alert("Matéria: Geografia. Este é o texto de Geografia:")
                break;
            case "Filosofia":
                alert("Matéria: Filosofia. Este é o texto de Filosofia:")
                break;    
            case "Sociologia":
                alert("Matéria: Sociologia. Este é o texto de Sociologia:")
                break; 
            default:
                alert("Isso não existe ou a matéria foi escrita errada.")
                break;    
        }
    }


    var botaoMateria = document.getElementById("btn_ch");
    botaoMateria.addEventListener("click", CienciasHumanas);
    
    $("#btn_mat") .click(function(){
        alert("teste3")
     });
    
    $("#btn_tec") .click(function(){
       alert("teste4")
    });

    $("#btn_pv") .click(function(){
        alert("teste5")
     });

     $("#btn_pp") .click(function(){
        alert("teste6")
     });



});
