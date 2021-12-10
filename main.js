const botao0 = document.querySelector('.botao0');
const botao1 = document.querySelector('.botao1');
const botao2 = document.querySelector('.botao2');
const botao3 = document.querySelector('.botao3');
const botao4 = document.querySelector('.botao4');
const botao5 = document.querySelector('.botao5');
const botao6 = document.querySelector('.botao6');
const botao7 = document.querySelector('.botao7');
const botao8 = document.querySelector('.botao8');
const botao9 = document.querySelector('.botao9');

const botaoVirgula = document.querySelector('.botaoVirgula');
const botaoMais = document.querySelector('.botaoMais');
const botaoMenos = document.querySelector('.botaoMenos');
const botaoVezes = document.querySelector('.botaoVezes');
const botaoDividido = document.querySelector('.botaoDividido');
const botaoClear = document.querySelector('.botaoClear');
const botaoIgual = document.querySelector('.botaoIgual');

let termo = 0;

let primeiroArrayInteiro = [];
let primeiroArrayFracionario = [];
let primeiroFator = [];
let primeiroFatorNumerico = 0;

let segundoArrayInteiro = [];
let segundoArrayFracionario = [];
let segundoFator = [];
let segundoFatorNumerico = 0;

let primeiraOperacao = '';
let segundaOperacao = '';

//O flag geral que vai dizer se quem está sendo escrito é o primeiro ou o segundo termo
let flagGeral = false;
//O flag do primeiro/segundo termo vai dizer se quem está sendo escrito é a parte inteira ou fracionária do 
let flagPrimeiroTermo = true;
let flagSegundoTermo = false;

let resultado = 0;

let savedState = [];
let actualState = [];
let memoryOperator;

displayResult(0);

function displayResult(valor) {
    const msg = document.querySelector('.resultadoNoVisor');
    msg.textContent = valor;
}

function receberTermo2 (termo) {
    if (typeof Number(termo) === 'number') {
        actualState.push(termo);
        displayResult(actualState);
    } else if (termo === ',') {
        if (!actualState.includes('.')) {
            actualState.push('.');
        }
    } else if (termo === '+' || termo === '-' || termo === '/' || termo === '*') {
        if (memoryOperator) {
            const result = executarOperacao(memoryOperator);
            memoryOperator = termo;
            displayResult(result);
        } else {
            savedState = actualState;
            memoryOperator = termo;
            actualState = [];
        }
    } else if (termo === '=') {
        const result = executarOperacao(memoryOperator);
        displayResult(result);
        memoryOperator = null;
    }
}

// function receberTermo (termo) {
//     if (!flagGeral) {
//         if (termo === ',' && primeiroArrayInteiro.length === 0) {
//             primeiroArrayInteiro.push(0);
//             primeiroArrayInteiro.push('.');
//             flagPrimeiroTermo = 1;
//         } else if (termo === ',' && primeiroArrayInteiro.length > 0) {
//             primeiroArrayFracionario.push('.');
//             flagPrimeiroTermo = 1;
//         }
//         if ((termo != '+' || termo != '-' || termo != '/' || termo != '*' || termo != '=') && flagPrimeiroTermo === 0) {
//             primeiroArrayInteiro.push(termo);
//         } else if ((termo != '+' || termo != '-' || termo != '/' || termo != '*' || termo  != '=') && flagPrimeiroTermo === 1) {
//             primeiroArrayFracionario.push(termo);
//         } else if (termo === '+' || termo === '-' || termo === '/' || termo === '*'){
//             flagGeral = 1;
//         }

//         primeiroFator = primeiroArrayInteiro.concat(primeiroArrayFracionario).join('');
//         primeiroFatorNumerico = Number(primeiroFator.toString());
//         mostrarTermo(primeiroFatorNumerico);

//     } else if (flagGeral === 1) {
//         if (termo === ',' && flagSegundoTermo === 0) {
//             if (segundoArrayInteiro.length === 0) {
//                 segundoArrayInteiro.push(0);
//             }
//             segundoArrayInteiro.push('.');
//             flagSegundoTermo = 1;
//         } else if (!isNaN(termo) && flagSegundoTermo === 0) {
//             segundoArrayInteiro.push(termo);
//         } else if (!isNaN(termo) && flagSegundoTermo === 1) {
//             segundoArrayFracionario.push(termo);
//         } else if (termo === '=') {
//             executarOperacao(primeiraOperacao);
//             limparPrimeiroTermo();
//             limparSegundoTermo();
//             primeiroFatorNumerico = resultado;
//             mostrarTermo(resultado);
//             return;
//         }
//         segundoFator = segundoArrayInteiro.concat(segundoArrayFracionario).join('');
//         segundoFatorNumerico = Number(segundoFator.toString());
//         mostrarTermo(segundoFatorNumerico);

//     }     
// }

function executarOperacao(operacao) {
    if (operacao === '+') {
        return convertToNumber(actualState) + convertToNumber(savedState);
    } else if (operacao === '-') {
        return convertToNumber(actualState) - convertToNumber(savedState);
    } else if (operacao === '/') {
        return convertToNumber(actualState) / convertToNumber(savedState);
    } else {
        return convertToNumber(actualState) * convertToNumber(savedState);
    }
}

function convertToNumber(array) {
    return Number(array.join(''));
}

botao1.onclick = function() {
    termo = 1;
    receberTermo(termo);
}

botao2.onclick = function() {
    termo = 2;
    receberTermo(termo);
}

botao3.onclick = function() {
    termo = 3;
    receberTermo(termo);
}

botao4.onclick = function() {
    termo = 4;
    receberTermo(termo);
}

botao5.onclick = function() {
    termo = 5;
    receberTermo(termo);
}

botao6.onclick = function() {
    termo = 6;
    receberTermo(termo);
}

botao7.onclick = function() {
    termo = 7;
    receberTermo(termo);
}

botao8.onclick = function() {
    termo = 8;
    receberTermo(termo);
}

botao9.onclick = function() {
    termo = 9;
    receberTermo(termo);
}

botao0.onclick = function() {
    termo = 0;
    receberTermo(termo);
}

botaoVirgula.onclick = function() {
    termo = ',';
    receberTermo(termo);
}

botaoClear.onclick = function () {
    termo = 0;
    primeiroArrayInteiro = [];
    primeiroArrayFracionario = [];
    segundoArrayInteiro = [];
    segundoArrayFracionario = [];
    primeiroFator = [];
    primeiroFatorNumerico = 0;
    segundoFator = [];
    segundoFatorNumerico = 0;
    flagGeral = 0;
    flagPrimeiroTermo = 0;
    flagSegundoTermo = 0;
    operacao = 'vazio';
    mostrarTermo(termo);
}

botaoMais.onclick = function () {
    termo = '+';
    primeiraOperacao = 'soma';
    flagGeral = 1;
    receberTermo(termo);
}

botaoMenos.onclick = function () {
    termo = '-';
    primeiraOperacao = 'subtracao';
    flagGeral = 1;
    receberTermo(termo);
}

botaoDividido.onclick = function () {
    termo = '/';
    primeiraOperacao = 'divisao';
    flagGeral = 1;
    receberTermo(termo);
}

botaoVezes.onclick = function () {
    termo = '*';
    primeiraOperacao = 'multiplicacao';
    flagGeral = 1;
    receberTermo(termo);
}

botaoIgual.onclick = function () {
    termo = '=';
    receberTermo(termo);
}

