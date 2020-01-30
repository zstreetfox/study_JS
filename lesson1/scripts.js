
'use strict';

let isNumber = function(n) {
return !isNaN(parseFloat(n)) && isFinite(n)
};



let money,
    money2,
    income = 'freelance', 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период, через запятую'),
    addExpenses2,
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    deposit2, 
    mission = 99999, 
    period = 3,
    budgetMonth,
    numArr,
    arrLength,
    allCosts,
    i,
    start,
    budgetDay;

    start = function() {
  do {
    money = +prompt('Ваш месячный доход?');
  } 
  while (!isNumber(money));
};
start();
console.log(money);

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
    budgetDay = money/30;
    // console.log('Бюджет на день равен :' , budgetDay);

    
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


console.log('Скорректированный бюджет на день составит :' ,Math.floor(budgetDay) );

console.log(money);
let getStatusIncome = function () {
if (budgetDay >= 300){
    return('У вас высокий уровень дохода');
} else if (budgetDay < 300) {
    return('У вас средний уровень дохода');
} else if (budgetDay <= 0) {
    return('Что то пошло не так');
}
else if(budgetDay <= 150) {
    return('К сожалению у вас уровень дохода ниже среднего');
}
};
console.log (getStatusIncome());

let getExpensesMonth = function (){
    do {
        allCosts = +prompt('Во сколько это обойдется?');
      } 
      while (!isNumber(allCosts));

    return allCosts;
};
getExpensesMonth();
console.log('Расходы за месяц составят : ' , allCosts);
let getAccumulatedMonth = function (){

   return money - allCosts;

};


let accumulatedMonth = getAccumulatedMonth();


let getTargetMonth = function (){
    return mission / accumulatedMonth;
   
};


let getStatusIncome2 = function () {
if  (getTargetMonth() < 0){
    console.log('Цель не будет достигнута');
} else if( getTargetMonth() > 0 ){
    return(console.log('Cрок достижения цели в месяцах:'
    , Math.ceil(getTargetMonth())));
}
};
getStatusIncome2();
console.log(getTargetMonth());

budgetDay = accumulatedMonth / 30;

console.log('бюджет на день составит :' ,Math.floor(budgetDay) );

