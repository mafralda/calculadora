const arrayBotoes = ['C', ',', '=', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0'];
const caixaBotoes = document.querySelector('.caixaBotoes');

let savedState = [];
let actualState = [];
let memoryOperator;

arrayBotoes.map(buttonTextContent => {
    const newButton = document.createElement('button');
    newButton.textContent = buttonTextContent;
    newButton.onclick = receberTermo(buttonTextContent);
    caixaBotoes.appendChild(newButton);    
});

displayResult(0);

function displayResult(valor) {
    const msg = document.querySelector('.resultadoNoVisor');
    msg.textContent = valor;
}

function receberTermo (termo) {
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