`use String`
function calculateTotalMortgage(percent, contribution, amount, date) {
    let currentDate  = new Date();  
    date = new Date(window.date.value); 
    let payPeriod = 0 - ((currentDate.getFullYear() -  date.getFullYear()) * 12) - (currentDate.getMonth() - date.getMonth());
    date = payPeriod; 
    let returnAmount = amount - contribution  
    percent = percent / 1200; 
    let monthlyPay = amount*(percent+percent/(((1+percent)**date)-1)); 
    let  totalAmount = monthlyPay * date;  
    console.log(totalAmount.toFixed(2));
    return totalAmount.toFixed(2);
}

function getGreeting(name) {
    let greeting = '';
    let RuString = /[^а-яА-ЯёЁ\-\s]/;
    if (RuString.test(name) || name === "" || name === String(undefined) || name === String(null)) {
        greeting = `Привет, мир! Меня зовут Аноним.`;
        console.log(greeting);
        return greeting;
    } else  {
        greeting = `Привет, мир! Меня зовут ${name}.`;
        console.log(greeting);
        return greeting; 
    } 
}
