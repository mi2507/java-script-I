window.addEventListener('DOMContentLoaded', function() {

let button = document.getElementById("button");
// let resultado = document.getElementById ("resultado");

button.addEventListener('click',function() {

let check = document.querySelectorAll("input[name=question]:checked").length;

 
if (check >=1 && check <=3){
    console.log("teste");
    resultado.innerHTML = `voce é enjoado!!!`;
}

else if (check > 4){
    resultado.innerHTML = `voce é curioso!!!`;

}

else {
    resultado.innerHTML = `selecione uma opção!!!`;

}
    
});
});
