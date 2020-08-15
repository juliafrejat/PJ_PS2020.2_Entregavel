//REQUEST API
var button = document.querySelector("#buttonRequest");
var container = document.querySelector("#subcontainer");
var footer = document.querySelector(".footer");

button.onclick = function(){
    //limpa a página antes de preenchê-la
    container.innerHTML ="";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.polijunior.com.br/notas/");
    xhr.addEventListener("load", function(){
        var resp = JSON.parse(this.response);
        resp.forEach(function(objeto){
            //cria objeto e insere nome da materia
            var materia = document.createElement("h2");
            materia.textContent = objeto.materia;
            //cria uma div para cada materia
            var divMateria = document.createElement("div");
            divMateria.id = "materia";
            container.appendChild(divMateria);
            divMateria.appendChild(materia);

            //cria uma tabela de notas p1 e p2 para cada div
            var table = document.createElement("table");
            divMateria.appendChild(table);
            //cria linhas
            var tr_0= document.createElement("tr");
            var tr_1= document.createElement("tr");
            var tr_2= document.createElement("tr");
            table.appendChild(tr_0);
            table.appendChild(tr_1);
            table.appendChild(tr_2);
            //cria primeira coluna
            var th_0 = document.createElement("th");
            var th_1 = document.createElement("th");
            var th_2 = document.createElement("th");
            tr_0.appendChild(th_0);
            tr_0.appendChild(th_1);
            tr_0.appendChild(th_2);
            //cria colunas restantes
            var td_1_0 = document.createElement("td");
            var td_1_1 = document.createElement("td");
            var td_1_2 = document.createElement("td");
            var td_2_0 = document.createElement("td");
            var td_2_1 = document.createElement("td");
            var td_2_2 = document.createElement("td");
            tr_1.appendChild(td_1_0);
            tr_1.appendChild(td_1_1);
            tr_1.appendChild(td_1_2);
            tr_2.appendChild(td_2_0);
            tr_2.appendChild(td_2_1);
            tr_2.appendChild(td_2_2);
            
            //insere dados na tabela
            th_1.textContent = "Nota";
            th_2.textContent = "Peso";
            td_1_0.textContent ="P1";
            td_1_1.textContent = objeto.nota_p1;
            td_1_2.textContent = objeto.peso_p1;
            td_2_0.textContent ="P2";
            td_2_1.textContent = objeto.nota_p2;
            td_2_2.textContent = objeto.peso_p2;

            th_1.classList.add("text");
            th_2.classList.add("text");
            td_1_0.classList.add("text");
            td_2_0.classList.add("text");
            td_1_1.classList.add("num");
            td_1_2.classList.add("num");
            td_2_1.classList.add("num");
            td_2_2.classList.add("num");

            //cria div para os outros dados - divs de peso p3 e média pretendida
            var divExtra = document.createElement("div");
            divExtra.id = "extra";
            divMateria.appendChild(divExtra)
            //cria objetos e insere dados - divs de peso p3 e média pretendida
            var divMedia = document.createElement("div");
            var textoMedia = document.createElement("small");
            var dadoMedia = document.createElement("small");
            var divP3 = document.createElement("div");
            var textoP3 = document.createElement("small");
            var dadoP3 = document.createElement("small");
            divExtra.appendChild(divMedia);
            divExtra.appendChild(divP3);
            textoMedia.textContent = "Média Pretendida: ";
            textoP3.textContent = "Peso P3: ";
            dadoMedia.textContent = objeto.media_pretendida;
            dadoP3.textContent = objeto.peso_p3;
            divMedia.appendChild(textoMedia);
            divMedia.appendChild(dadoMedia);
            divP3.appendChild(textoP3);
            divP3.appendChild(dadoP3);

            textoMedia.classList.add("text");
            textoP3.classList.add("text");
            dadoMedia.classList.add("num");
            dadoP3.classList.add("num");
            textoMedia.classList.add("bottomText");
            textoP3.classList.add("bottomText");
            dadoMedia.classList.add("bottomText");
            dadoP3.classList.add("bottomText");

            //calcula nota necessaria na p3 e cria resposta adequada
            var nota = (objeto.media_pretendida*(objeto.peso_p1+objeto.peso_p2+objeto.peso_p3) - objeto.nota_p1*objeto.peso_p1 - objeto.nota_p2*objeto.peso_p2)/objeto.peso_p3;
            var divNota = document.createElement("div");
            divExtra.appendChild(divNota);
            var textoNota = document.createElement("small");
            divNota.appendChild(textoNota);
            if (nota < 0){
                textoNota.textContent = "Você já atingiu a média desejada!";
                textoNota.classList.add("msg");
            }
            else if (nota > 10){
                textoNota.textContent = "Não é possível atingir a média desejada.";
                textoNota.classList.add("msg");
            }
            else{
                var dadoNota = document.createElement("small");
                textoNota.textContent = "Nota Necessária na P3: ";
                dadoNota.textContent = nota.toFixed(1);
                divNota.appendChild(dadoNota);
                textoNota.classList.add("text");
                dadoNota.classList.add("num");
            }
        })
    })
    xhr.send();
}