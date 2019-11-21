'use strict'

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c) {
    
  // код для задачи №1 писать здесь
    
  let d = b * b - 4 * a * c;
  let x = [];
  if (d < 0) {
    return x;
  } else if (d > 0) {
    return [(-b + Math.sqrt(d)) / 2 * a, (-b - Math.sqrt(d)) / 2 * a];
  } else {
    return [-b / 2 * a];
  }
    
    //return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
  
  // код для задачи №2 писать здесь

  let sum = 0;
  let arrayTransf = marks.splice(5);

  if (marks.length <= 5) {
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return sum / marks.length;

  } else if (marks.length > 5) {
    for (let i = 0; i < arrayTransf.length; i++) {
      sum += arrayTransf[i]; 
    }
   return sum / arrayTransf.length;
  }
}  


function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday) {
    
  // код для задачи №3 писать здесь
    
    let year = new Date().getFullYear();
    let yearBirth = dateOfBirthday.getFullYear();
    let age = year - yearBirth;
    let result;
        
    if (age >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    
    return result;
}