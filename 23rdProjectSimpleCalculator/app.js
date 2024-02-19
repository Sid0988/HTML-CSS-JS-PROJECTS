let result = document.getElementById('result')
let calc = document.getElementById('calc')
let num1 = document.querySelector('.num1')
let num2 = document.querySelector('.num2')
let btn = document.getElementById('submit')

btn.addEventListener('click', ()=>{
    let number1 = parseFloat(num1.value)
    let number2 = parseFloat(num2.value)
    switch(calc.value){
        case "+" :
            result.innerHTML = number1 + number2;
            break;
        case "/" :
            if(number2 !== 0){
            result.innerHTML = number1 / number2
            }else{
                result.innerHTML = "can't devide by zero"
            }
            break;
        case "*":
            result.innerHTML = number1 * number2;
            break;
        case "-":
            result.innerHTML = number1 - number2
            break;
        default: ""
    }
});