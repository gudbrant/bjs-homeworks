"use strict";
function getResult(a, b, c) {
    
    let D = b**2 - 4 * a * c;
    let x = [ ];
    
    if (D < 0) {
        return x = [ ];
    } else if (D == 0) {
        x = (-b + Math.sqrt(D)) / (2*a);;
        return(x);
    } else if (D > 0) {
        x = [(-b + Math.sqrt(D)) / (2*a), (-b - Math.sqrt(D)) / (2*a)];
        return(x);
    }
}

function getAverageMark(marks) {
    if (marks.length == 0) {
    	console.log("Оценок нет");
    	marks = [0];
    }
    
    if (marks.length > 5) {
    	console.log("Количество оценок больше 5");
    	marks = marks.slice(0, 5);
    }
    let averageMark = 0;
    for (let i=0; i < marks.length; i++) {
    	averageMark = averageMark + marks[i];
    }
    averageMark = (averageMark/marks.length);
    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    let now = new Date().getFullYear();
    let age = now - dateOfBirthday.getFullYear();
    if (age > 18) {
    	return `Не желаете ли олд-фэшн, ${name} ?`;
    } else {
    	return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}
