let operator = '';
let num1 = '';
let num2 = '';


const expression = document.querySelector('#exprn');
const display = document.querySelector('#display')
const digits = Array.from( document.getElementsByClassName('num_data'));
const container = document.querySelector('.container')

// Add function
function add(num1, num2){
    return (parseFloat(num1) + parseFloat(num2))
}

// Subtract function
function subtract(num1, num2){
    return (parseFloat(num1) - parseFloat(num2))
}

// Divide function
function divide(num1, num2){
    return (parseFloat(num1) / parseFloat(num2)) 
}

// Multiply function
function multiply(num1, num2){
    return (parseFloat(num1) * parseFloat(num2))
}



digits.forEach(digit => {
    digit.addEventListener('click', function(e){
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = container.dataset.previousKeyType
        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent
                delete container.dataset.previousKeyType                
              }
            else {
            display.textContent = displayedNum + keyContent
            }
          }
        else if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
        ) {
        container.dataset.previousKeyType = 'operator'
        
        if (num1 == ''){
        num1 = display.textContent;
        container.dataset.operator = action
        operator = action
        }
        
        else{
            num2 = display.textContent
            let ans = calculate(operator, num1, num2)
            num1 = ans
            display.textContent = ans
            container.dataset.operator = action
            operator = action
        }
        
        container.dataset.operator = action
        }

        else if (action === 'decimal') {
            display.textContent = displayedNum + '.'
          }
          
        else if (action === 'clear') {
            display.textContent = 0;
            num1 = ''
            num2 = ''
          }
          
        else if (action === 'calculate') {
            if (num1 != ''){
                num2 = display.textContent;}
            const operator = container.dataset.operator
            display.textContent = calculate(operator, num1, num2)
          }

        else if (action === 'delete') {
        console.log('delete key!')
        }
    }) 
})

function calculate(operator, num1, num2){
   
    if (operator === 'add') {
        return add(num1, num2);
    } else if (operator === 'subtract') {
        return subtract(num1, num2);
    } else if (operator === 'multiply') {
        return multiply(num1, num2);
    } else if (operator === 'divide') {
        return divide(num1, num2);
    }
  }
