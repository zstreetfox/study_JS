
'use strict';

let money = 7777,
    money2,
    income = 'freelance', 
    addExpenses = 'интернет, такси, коммуналка', 
    addExpenses2,
    deposit = true, 
    deposit2, 
    mission = 99999, 
    period = 5,
    budgetMonth,
    numArr,
    arrLength,
    allCosts,
    i,
    budgetDay;

   
    console.log(typeof money);
    console.log(typeof income);
    console.log(typeof deposit);
    console.log(addExpenses.length);
    console.log('Период равен ' + period + ' месяцев'  + '\nЦель заработать ' + mission + ' рублей');
    console.log(addExpenses.toLowerCase());
    console.log(addExpenses.split(' '));
    budgetDay = money/30;
    console.log('Бюджет на день равен :' , budgetDay);
    
    
    money = prompt('Ваш месячный доход?');
    // money2 = prompt('Ваш месячный доход?');
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    //addExpenses2 = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    deposit = confirm('Есть ли у вас депозит в банке?');
    //deposit2 = confirm('Есть ли у вас депозит в банке?');
    numArr = addExpenses.split(',');
    arrLength = addExpenses.length;
    money = Number(money);
    allCosts = 0;
    for ( i = 0; i < numArr.length; i++) {
        numArr[i] = numArr[i] * 1;
        allCosts = allCosts + numArr[i];
        
    }
    
      

    
    
    
    budgetMonth = money - allCosts;


console.log('Бюджет на месяц составит : ' , budgetMonth);

i = mission / budgetMonth;
console.log(i);


console.log('Миссия будет завершена через ' , Math.ceil(i), 'месяцев');

budgetDay = budgetMonth/30;

console.log('Скорректированный бюджет на день составит :' ,Math.floor(budgetDay) );


if (budgetDay >= 300){
    console.log('У вас высокий уровень дохода');
} else if(budgetDay >= 150 && BudgetDay < 200) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay <= 0) {
    console.log('Что то пошло не так');
}
else if(budgetDay <= 150) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} 

