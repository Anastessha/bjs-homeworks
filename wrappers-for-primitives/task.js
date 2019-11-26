'use strict'

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    let mortgageEndDay = new Date(date),
    today = new Date(),
    months = mortgageEndDay.getMonth() - today.getMonth() + ((mortgageEndDay.getFullYear() - today.getFullYear()) * 12);
            
    let p = percent / (12 * 100),
    payOfMonth = (amount - contribution) * (p + p / (((1 + p) ** months) - 1)),
    totalAmount = payOfMonth * months;
    
    console.log(totalAmount);
    return totalAmount.toFixed(2);
}


function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    
    // код для задачи №2 писать здесь
    
    let greeting;
    
    if (name == null || name == undefined || name == '') {
        greeting = `Привет, мир! Меня зовут Аноним`;
    } else {
        greeting = `Привет, мир! Меня зовут ${name}`;
    }
    return greeting;
}