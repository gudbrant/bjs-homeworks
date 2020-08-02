
//2x^2+4x-3=0
function getResult(a, b, c) {
    "use strict";
    let D = Math.pow(b, 2) - 4 * a * c;
    let x = [];
    
    if (D < 0) {
        return('Корней нет')
    } else if (D == 0) {
        x[0] = (-1 * b) / (2 * a);
        return(x);
    } else if (D > 0) {
        x = [((-b) + Math.pow(D, 0.5)) / (2 * a), ((-b) - Math.pow(D, 0.5)) / (2 * a)];
        return(x);
    }
}

function getAverageMark(marks) {
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
    let now = new Date();
    let age = now.getFullYear() - dateOfBirthday.getFullYear();
    let message;
    if (age > 18) {
    	message = `Не желаете ли олд-фэшн, ${name} ?`;
    } else {
    	message = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    console.log(message);
    return message;
}
