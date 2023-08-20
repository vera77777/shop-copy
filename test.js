function amount(a, b) {
    //parseInt()- получить целое число
    //parseFloat()- получить дробное число
    
    alert(a+b)
}
//alert("")
//ВЫзов функции
//amount( 55, 55)
function floorDiv(a, b) {
    const remainder = a % b
    alert ((a-remainder)/b)
}
//floorDiv()
function subtraction(a, b) {
    alert(a-b)
}
function multiplication(a, b) {
    alert(a*b)
}

function calc() {
    alert("Добро пожаловать в калькулятор");
    const choise = prompt("Выбирите действие:\n1-сумма\n2-целочисленное деление\n3-вычитание\n4-умножение");
    const a =parseFloat( prompt("Введите число:"));
    const b =parseFloat( prompt("Введите второе число:"));
    if (choise==="1") {
        amount(a, b)
    }
    else if (choise==="2") {
        floorDiv(a, b)
    }
    else if (choise==="3") {
        subtraction(a, b)
    }
    else if (choise==="4") {
        multiplication(a, b)
    }
    else {
        alert("Такое действие отсутствует")
    }
}
//calc()
const firstname ='Вера';
const job = 'програмист';
const birthYear = 2007;

console.log (firstname, job)
console.log (firstname.length)
console.log (firstname[0])
console.log (firstname[firstname.length-1])