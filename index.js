const prompt = require ('prompt-sync')();

console.log();

console.log(`Knight recebeu uma missão do chefe da guarda real para exterminar uma invasão de ratos mutantes e salvar 
o guerreiro que ficou encurralado. O local da invazão é no centro de uma grande cidade medieval chamada Carlin, Knight 
precisa acessar o esgoto da cidade para encontrar o armamento perdido em seguida encontrar e derrotar o Rato Gigante que 
por sinal possuí em seu organismo o antidoto para parar as mutações, Knight só precisa extrair o seu sangue e levar até 
o alquimistas Peter.`);
console.log();

console.log('Knight, primeiramente agradecemos o seu ato de coragem. ');
console.log();
let pergunta01 = prompt('Você conseguiu encontrar o acesso ao esgoto? [S/N] ').toLowerCase();
while (pergunta01 != 's' && pergunta01 != 'n'){
    console.log('Valor errado, Insira [S/N] para resposta..');
    pergunta01 = prompt('Você conseguiu encontrar o acesso ao esgoto? [S/N] ').toLowerCase();
}

console.log();

let pergunta02 = prompt('O armamento perdido foi encontrado? [S/N] ').toLowerCase();
while (pergunta02 != 's' && pergunta02 != 'n'){
    console.log('Valor errado, Insira [S/N] para resposta..');
    pergunta02 = prompt('O armamento perdido foi encontrado? [S/N] ').toLowerCase();
}

console.log();

let pergunta03 = prompt('Os boatos sobre um Rato Mutante gigante é verdade? Você o derrotou? [S/N] ').toLowerCase();
while (pergunta03 != 's' && pergunta03 != 'n'){
    console.log('Valor errado, Insira [S/N] para resposta..');
    pergunta03 = prompt('Os boatos sobre um Rato Mutante gigante é verdade? Você o derrotou? [S/N] ').toLowerCase();
}
console.log();

let pergunta04 = prompt('Você conseguiu extrair um pouco de sangue do organismo do Rato? [S/N] ').toLowerCase();
while (pergunta04 != 's' && pergunta04 != 'n'){
    console.log('Valor errado, Insira [S/N] para resposta..');
    pergunta04 = prompt('Você conseguiu extrair um pouco de sangue do organismo do Rato? [S/N] ').toLowerCase();
}

console.log();

let pergunta05 = prompt('Por ultimo, você entregou o antidoto para Peter? [S/N] ').toLowerCase();
while (pergunta05 != 's' && pergunta05 != 'n'){
    console.log('Valor errado, Insira [S/N] para resposta..');
    pergunta05 = prompt('Por ultimo, você entregou o antidoto para Peter? [S/N] ').toLowerCase();
}

console.log();

let variavelResposta = 0;

if (pergunta01 == 's'){
    variavelResposta ++
} if (pergunta02 == 's'){
    variavelResposta ++
} if (pergunta03 == 's'){
    variavelResposta ++
} if (pergunta04 == 's'){
    variavelResposta ++
}if (pergunta05 == 's'){
    variavelResposta ++
}

console.log();

if (variavelResposta == 0){
    console.log('Você falhou miserávelmente.')
} else if (variavelResposta == 1 || variavelResposta == 2){
    console.log('Você falha, mas ainda mantem a sua reputação.')
} else if (variavelResposta == 3){
    console.log('Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.')
} else if (variavelResposta == 4){
    console.log('Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.')
} else if (variavelResposta == 5){
    console.log('Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.')
}