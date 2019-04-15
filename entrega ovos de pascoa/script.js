window.addEventListener('DOMContentLoaded', function(event) {
    
    let paises = document.getElementById("opcoesPaises");
    let respostaPais = document.getElementById("RespostaPais")
    let cidades = document.getElementById("cidadesBrasil")
    
    paises.addEventListener('change', function (){
        document.querySelector(`.cidadesBrasil`).style.display = "none";
        
        if(paises.value == "selecione") {
            respostaPais.innerHTML = ``
        }
        
        else if(paises.value == "australia") {
            respostaPais.innerHTML =`🍫 Minha amiga vai ganhar dois ovos de chocolate branco 🍬`
        }
        
        else if(paises.value == "eua") {
            respostaPais.innerHTML = `🍬 Minha amiga vai ganhar dois ovos de chocolate ao leite 🍫`
        }
        
        else if(paises.value == "inglaterra") {
            respostaPais.innerHTML = `🍫 Minha amiga vai ganhar dois ovos de chocolate amargo 🍬`
        }

        else if(paises.value == "brasil") {
            document.querySelector(`.cidadesBrasil`).style.display = "block"
            document.querySelector(`.resposta-pais`).style.display = "none";
            cidades.addEventListener('change', function (){
                let respostaBrasil = document.getElementById("respostaBrasil")

            const cidadeValue = this.value;

            if (cidadeValue == "selecione") {
                respostaBrasil.innerHTML = ``
            }

            else if (cidadeValue == "caxias") {
                respostaBrasil.innerHTML = `🍫 Minha amiga vai ganhar um ovo de chocolate ao leite e um ovo de chocolate branco 🍬`
            }

            else if(cidades.value == "porto") {
                respostaBrasil.innerHTML = `🍬 Minha amiga vai ganhar um ovo de chocolate amargo e um ovo de chocolate ao leite 🍫`
            }

            else if(cidades.value == "sp") {
                respostaBrasil.innerHTML = `🍬 Minha amiga vai ganhar duas caixas de bombons 🍫`
            }
        });
    }})
})