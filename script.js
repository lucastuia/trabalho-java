$(document) .ready(function(){
    
    function CienciasHumanas() {
        var escolha = prompt("Selecione a matéria (letra minúscula)");

        switch (escolha.toLowerCase()) { 
            case "história":
                alert("Texto de História:");
                break;
            case "geografia":
                alert("Texto de Geografia:");
                break;
            case "filosofia":
                alert("Texto de Filosofia:");
                break;    
            case "sociologia":
                alert("Texto de Sociologia:");
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
                alert("Texto de Física:");
                break;
            case "biologia":
                alert("Texto de Biologia:");
                break;
            case "química":
                alert("Texto de Química:");
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
                alert("Texto de Artes: Foi a matéria com menos “diversidade e quantidade” de conteúdos, afinal, nãos últimos meses, trabalhamos apenas com autorretrato e a produção do curta(o qual ainda não foi terminado), sinopse e a produção de cartazes desse curta, ou seja, tudo girou em volta do curta.");
                break;    
            case "inglês":
                alert("Texto de Inglês: Trabalhamos com Future tenses, como Will, going to, present continuous para futuro, present simple para futuro, future perfect tense; também trabalhamos com os nomes de produtos tecnológicos como o telefone, computador, etc. Além de vermos a linguagem do html e CSS.");
                break;
            case "português":
                alert("Texto de Português: Trabalhamos mais recentemente com subgêneros e gêneros literários, como o épico, dramático e o lírico.  Terminamos de ver o gênero textual de entrevista. Também o uso dos “porquês”. Além de trabalharmos a crônica, inclusive fazer uma cena de filme.  ");
                break;    
            default:
                alert("Isso não existe ou a matéria foi escrita errada.");
                break;    
        }
    }
    var botaoMateria = document.getElementById("btn_ling");
    botaoMateria.addEventListener("click", Linguagens);
    
    
    $("#btn_mat") .click(function(){
        alert("Texto de Matemática: Resumidamente trabalhamos fazendo e montando gráficos e contas, tanto no excel quanto no geogebra e caderno. Montamos e resolvemos funções (constante, crescente, decrescente, exponencial, etc), equações de primeiro e segundo grau, porcentagens, tabelas e potências.")
     });
    
    $("#btn_tec") .click(function(){
       alert("Texto do Técnico: Trabalhamos mais recentemente com a linguagem de Javascript com o JQUERY, onde já está sendo testada nesse mesmo trabalho. Também usamos a linguagem HTML e CSS para produzir alguns sites de venda ou coisas do gênero, inclusive na produção de formulários (login, cadastro e busca). Fizemos sites e portifólio utilizando a plataforma do Bootstrap com tema livre, que a propósito facilitou a produção de sites.")
    });

    $("#btn_pv") .click(function(){
        alert("Texto de Projeto de vida: Estudamos sobre as entrevistas de emprego (dinâmicas, métodos, maneiras de agir e falar) onde fizemos um trabalho de simulação de entrevista de emprego. Trabalhamos mais recentemente produzindo miniaulas, a qual fiz sobre Aristóteles. ")
     });

     $("#btn_pp") .click(function(){
        alert("Texto de Projeto profissional:")
     });



});
