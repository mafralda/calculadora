const buttonsArray = ['C', ',', '=', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0'];
const buttonBox = document.querySelector('.buttonBox');

let savedState = [];
let actualState = [];
let memoryOperator;

buttonsArray.map(buttonTextContent => {
    const newButton = document.createElement('button');
    newButton.textContent = buttonTextContent;
    newButton.onclick = () => receiveButtonContent(buttonTextContent);
    buttonBox.appendChild(newButton);    
});

displayResult(0);

function displayResult(valor) {
    const msg = document.querySelector('.calcDisplay');
        msg.textContent = convertToNumber(valor);    
}

function receiveButtonContent (textContent) {
    if (!isNaN(textContent)) {
        if (typeof actualState === 'object') {
            actualState.push(textContent);
            displayResult(actualState);
        } else {
            savedState = actualState;
            actualState = [];
            actualState.push(textContent);
            displayResult(actualState);
        }        
    } else if (textContent === ',') {
        if (!actualState.includes('.')) {
            actualState.push('.');
        }
    } else if (textContent === '+' || textContent === '-' || textContent === '/' || textContent === '*') {
        if (memoryOperator) {
            let result = executeOperation(memoryOperator);
            memoryOperator = textContent;
            displayResult(result);
            actualState = [];
            savedState = result;
        } else {
            savedState = actualState;
            memoryOperator = textContent;
            actualState = [];
        }
    } else if (textContent === '=') {
        let result = executeOperation(memoryOperator);
                
        if (!memoryOperator) {
            result = actualState;
        } else {
            displayResult(result);
            memoryOperator = null;
        }
        actualState = result;        
    } else if (textContent = 'C') {
        cleanAll ();
    }    
}

function executeOperation(operation) {
    if (operation === '+') {
        return convertToNumber(savedState) + convertToNumber(actualState);
    } else if (operation === '-') {
        return convertToNumber(savedState) - convertToNumber(actualState);
    } else if (operation === '/') {
        return convertToNumber(savedState) / convertToNumber(actualState);
    } else {
        return convertToNumber(savedState) * convertToNumber(actualState);
    }
}

function convertToNumber(variable) {
    if (typeof variable != 'number') {
        return Number(variable.join(''));
    }
    else {
        return variable;
    }
}

function cleanAll () {
    actualState = [];
    savedState = [];
    memoryOperator = undefined;
    displayResult(0);
}