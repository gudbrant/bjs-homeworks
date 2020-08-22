// =========== задачи №1 ===========
/*
function polindromChecker() {
    const result = palindromeInput.value.isPalindrome();
    checkedValue.innerText = `Строка ${!result && "не " || ""}является полиндромом`;
}
*/

String.prototype.isPalindrome = function () {
    let str = this;
    
    str = str.toLowerCase().replace(/\s/g,'');
    return str === str.split('').reverse().join('') ? true : false;
    
    /*
    function palindrome(str) {
        str = str.toLowerCase().repalce(/\s/g,'');
        return str === str.split('').reverse().join('') ? true : false;
    }
    */
    
    /*
    function palindrome2(str) {
        const len = Math.floor(str.length / 2);
        for (let i = 0; i < len; i++)
            if (str[i] !== str[str.length - i - 1]) {
                return false;
            }
        return true;
    }
    */
    
}

//=========== Задание №2 ===========

/*
function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');
        const parsedMarks = marks.map(Number);
        const average = getAverageMark(parsedMarks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}
*/

function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        marks[i] = Number(marks[i]);
        sum += marks[i];
    }
    
    const average = sum / marks.length;
    const roundedAverage = Math.round(average);
    
    if (roundedAverage <= 0) {
        return (roundedAverage = 0);
    }
    
    return roundedAverage;
}

//=========== Задание №3 ===========

/*
function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}
*/

function checkBirthday(birthday) {
    let now =+ new Date();
    
    birthday =+ new Date(birthday);
    let diff = now - birthday
    let millisecondsYear = 24 * 60 * 60 * 1000 * 365;
    
    let age = diff / millisecondsYear;
    
    return (age > 18);
}