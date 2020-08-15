//CALCULO DE NOTAS POR INPUT
var button = document.querySelector("#calcular");
var form = document.querySelector(".form");
var inputNota1 = document.querySelector('input[name="nota1"]');
var inputPeso1 = document.querySelector('input[name="peso1"]');
var inputNota2 = document.querySelector('input[name="nota2"]');
var inputPeso2 = document.querySelector('input[name="peso2"]');
var inputPeso3 = document.querySelector('input[name="peso3"]');
var inputMedia = document.querySelector('input[name="media"]');

inputNota1.addEventListener("focus", function(){
    var nota1 = inputNota1.value;
})
inputPeso1.addEventListener("focus", function(){
    var peso1 = inputPeso1.value;
})
inputNota2.addEventListener("focus", function(){
    var nota2 = inputNota2.value;
})
inputPeso2.addEventListener("focus", function(){
    var peso2 = inputPeso2.value;
})
inputPeso3.addEventListener("focus", function(){
    var peso3 = inputPeso3.value;
})
inputMedia.addEventListener("focus", function(){
    var media = inputMedia.value;
})

button.onclick = function(){
    //var div = document.querySelector("");
    var nota3 = (media*(peso1+peso2+peso3)-nota1*peso1-nota2*peso2)/peso3;
    var outputNota3 = document.createElement("p");
    if (nota3<0){
        outputNota3.textContent = "Você já atingiu a média desejada!";
    }
    else if(nota3 > 10){
        outputNota3.textContent = "Não é possível atingir a média desejada.";
    }
    else{
        outputNota3.textContent = "A nota necessária na P3 é: " + nota3.toFixed(1);
    }
}