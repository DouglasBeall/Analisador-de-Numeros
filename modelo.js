let num = document.getElementById('txtNum');
let lista = document.getElementById('lista');
let res = document.getElementById('res');
let valores = [];

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){ // Caso o número seja maior ou igual a 1 E menor que 100, irá funcionar corretamente, se não o usuário será alertado.
        return true;
    }else{
        return false;
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){ // Caso o número seja repetido, o usuário será alertado.
        return true;
    }else{
        return false;
    }
}

function adicionar(){
    if (isNumber(num.value) && !inList(num.value, valores)){ // Se o valor for realmente um valor e se ele não está na lista.
        valores.push(Number(num.value)); // Adicionar um elemento no vetor.

        let item = document.createElement('option');
        item.text = `Valor Adicionado: ${num.value}`;
        lista.appendChild(item);

        res.innerHTML = '';
    }else{
        alert('[ERRO] Número inválido ou Repetido.')
    }

    num.value = '';
    num.focus();
}

function finalizar(){
    if (valores.length == 0){
        alert('[ERRO] Adicione um valor antes de prosseguir!');
    }else{
        let total = valores.length;

        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let pos in valores){
            soma += valores[pos];

            if (valores[pos] > maior){
                maior = valores[pos];
            }

            if (valores[pos] < menor){
                menor = valores[pos];
            }
        }

        media = soma / total;

        res.innerHTML = ''
        res.innerHTML += `<p> Foram adicionados ${total} valores! </p>`;
        res.innerHTML += `<p> O maior valor adicionado é o: ${maior} </p>`;
        res.innerHTML += `<p> O menor valor adicionado é o: ${menor} </p>`;
        res.innerHTML += `<p> A soma de todos os números será de: ${soma} </p>`;
        res.innerHTML += `<p> A média de todos os valores será de: ${media} </p>`;
    }
}

function limpardados(){
    location.reload();
}