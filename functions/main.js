'use strict'

//=====Задача 1=======
function getSolutions(a,b,c) {
	let D = b*b - 4*a*c;
	if (D < 0) {
		return { D: D }
	} else if (D === 0) {
		let x1 = -b / 2*a;
		return { roots: [x1], D: 0 }
	} else if (D > 0) {
		let x1 = (-b + Math.sqrt(D)) / (2 * a),
		x2 = (-b - Math.sqrt(D)) / (2 * a);
		return { roots: [x1, x2], D: D }
	}
}

function showSolutionsMessage(a,b,c) {
	let result = getSolutions(a,b,c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.D < 0) {
		console.log('Уравнение не имеет вещественных корней');
	} else if (result.D === 0) {
		console.log(`Уравнение имеет один корень:  X₁ = ${result.roots}`);
	} else if (result.D > 0) {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}
}

showSolutionsMessage(1,2,3);
showSolutionsMessage(7,20,-3);
showSolutionsMessage(2,4,2);

//=====Задача 2=======

function getAverageScore(data) {
	let scoreCard = {},
	quantity = 0,
	sum = 0;
	
	for (let item in data) {	
	
	  function marks(array) {
		  let sumMark = 0;
		  for (let i = 0; i < array.length; i++) {
		  	sumMark += array[i];
		  }
	      let averageMark = sumMark / array.length;
	      return averageMark;
	  }
	  scoreCard[item] = marks(data[item]);
	  sum += marks(data[item]);
	  quantity++;
	}
    let averageScore = sum / quantity;
    scoreCard['average'] = averageScore;
    return scoreCard;
}

console.log(getAverageScore({
	algebra: [2,4,5,2,3,4],
	geometry: [2,4,5],
	russian: [3,3,4,5],
	physics: [5,5],
	music: [2,2,6],
	english: [4,4,3],
	poetry: [5,3,4],
	chemistry: [2],
	french: [4,4]
}));

//=====Задача 3=======

function getPersonData(secretData) {
	
	function decryptedFN(secretData) {
		let data;
		for (let item in secretData) {
			if (item === 'aaa' && secretData[item] === 0) {
				data = 'Родриго';
			} else if (item === 'aaa' && secretData[item] === 1) {
				data = 'Эмильо';
			} 
		}
		return data;
	}
	
	function decryptedLN(secretData) {
		let data;
		for (let item in secretData) {
			if (item === 'bbb' && secretData[item] === 0) {
				data = 'Эмильо';
			} else if (item === 'bbb' && secretData[item] === 1) {
				data = 'Родриго';
			} 
		}
		return data;
	}
	return {firstname: decryptedFN(secretData), lastname: decryptedLN(secretData)};
	
}

console.log(getPersonData({
	aaa: 0,
	bbb: 0
}));
console.log(getPersonData({
	aaa: 0,
	bbb: 1
}));
console.log(getPersonData({
	aaa: 1,
	bbb: 0
}));
console.log(getPersonData({
	aaa: 1,
	bbb: 1
}));