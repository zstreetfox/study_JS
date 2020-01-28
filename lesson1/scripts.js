
'use strict';

let money =  +prompt('Ваш месячный доход?', 7777),
    money2,
    income = 'freelance', 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период, через запятую'),
    addExpenses2,
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    deposit2, 
    mission = 99999, 
    period = 4,
    budgetMonth,
    numArr,
    arrLength,
    allCosts,
    i,
    budgetDay;

    let showTyoeOf = function (data) {
        console.log(data, typeof(data));
    };
   
    showTyoeOf(money);
    showTyoeOf(income);
    showTyoeOf(deposit);
    // console.log(addExpenses.length);
    // console.log('Период равен ' + period + ' месяцев'  + '\nЦель заработать ' + mission + ' ,dollars');
    // console.log(addExpenses.toLowerCase());
    // console.log(addExpenses.split(' '));
    // budgetDay = money/30;
    // console.log('Бюджет на день равен :' , budgetDay);
    
    
    
    
    
    
//     budgetMonth = money - allCosts;


// console.log('Бюджет на месяц составит : ' , budgetMonth);

// i = mission / budgetMonth;

// console.log('Миссия будет завершена через ' , Math.ceil(i), 'месяцев');

// budgetDay = budgetMonth/30;

// console.log('Скорректированный бюджет на день составит :' ,Math.floor(budgetDay) );




numArr = addExpenses.split(',');
    arrLength = addExpenses.length;
    money = Number(money);
    allCosts = 0;
    for ( i = 0; i < numArr.length; i++) {
        numArr[i] = numArr[i] * 1;
        allCosts = allCosts + numArr[i];
        
    };

let getExpensesMonth = function (){
    return allCosts;
};
console.log('Расходы за месяц составят : ' , allCosts);
let getAccumulatedMonth = function (){

   return money - allCosts;

};


let accumulatedMonth = getAccumulatedMonth();


let getTargetMonth = function (){
    return mission / accumulatedMonth;
};
console.log('Cрок достижения цели в месяцах:',  Math.ceil(getTargetMonth()));

budgetDay = accumulatedMonth / 30;

console.log('бюджет на день составит :' ,Math.floor(budgetDay) );

let getStatusIncome = function () {
    if (budgetDay >= 300){
        return('У вас высокий уровень дохода');
    } else if (budgetDay <= 300) {
        return('У вас средний уровень дохода');
    } else if (budgetDay <= 0) {
        return('Что то пошло не так');
    }
    else if(budgetDay <= 150) {
        return('К сожалению у вас уровень дохода ниже среднего');
    }
    };
    console.log (getStatusIncome());

console.log (addExpenses);