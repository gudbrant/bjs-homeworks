//String.prototype.isPalindrome - для задачи №1



//Задание №2
    
function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        marks[i] = Number(marks[i]);
        sum += marks[i];
    }
    
    let average = sum / marks.length;
    let roundedAverage = Math.round(average);
    
    return roundedAverage;
}

//Задание №3    

function initCheckBirthday() {
    let birthday = document.getElementById('birthday').value;

    let result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now =+ new Date();
    birthday =+ new Date(birthday);
    let diff = now - birthday
    let millisecondsYear = 24 * 60 * 60 * 1000 * 365;
    let age = diff / millisecondsYear;
    return (age > 18);
}