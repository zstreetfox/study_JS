
'use strict';

let isNumber = function(n) {
return !isNaN(parseFloat(n)) && isFinite(n)
};

let money = 0,
start = function() {
    do {
      money = prompt('Ваш месячный доход?');
    } 
    while (!isNumber(money) || money === 0);
    money = +money;
    
  };
    
  start();

let budget = money;
  let appData = {
        income: {},
        addIncome:[],
         expenses: [],  //function(){
        //     let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период, через запятую');
        //     appData.addExpenses = addExpenses.toLowerCase().split(',');
        //     appData.deposit = confirm('Есть ли у вас депозит в банке?');
        // },
        addExpenses:[],
        deposit: false,
        mission: 99999,
        period: 3,
        budget: {},
        budgetDay: function() {
            return appData.getBudget() / 30;
        },
        budgetMonth : {} = 0,
        expensesMonth: function(){
            let sum = 0;
            for (let key in appData.expenses) {
              sum += appData.expenses[key];
            }
            appData.expensesMonth = sum;
          },
       
        asking: function(){
            let
            question1, 
            expenses1;
            
        for (let i = 0; i < 2 ; i++) {
            
                expenses1 = prompt('Введите обязательную статью расходов?');
                question1 = +prompt('Во сколько это обойдется?');
                appData.expenses[expenses1] = question1;
        };
        },
        getBudget: function (){
            return money - appData.expensesMonth;
        },
        getTargetMonth: function(){
            return appData.mission / appData.getBudget();
        },
        getStatusIncome: function () {
            if (appData.budgetDay() > 500){
                return('У вас высокий уровень дохода');
            } else if (appData.budgetDay() > 300) {
                return('У вас средний уровень дохода');
            } else if(appData.budgetDay() > 0 ) {
                return('К сожалению у вас уровень дохода ниже среднего');
            } else{
                return('Что то пошло не так');
            }
            }
  };
 
    appData.asking();
    appData.expensesMonth();
    appData.getBudget();
    appData.getTargetMonth();
    appData.getStatusIncome();
    appData.budgetDay();
    console.log('Расходы за месяц составят : ' , appData.expensesMonth);
    console.log (appData.getStatusIncome());

    if ( appData.getTargetMonth()>0){
        console.log('Cрок достижения цели в месяцах:'
        , Math.ceil(appData.getTargetMonth()));  
    }else{
                console.log('Цель не будет достигнута');
        }
        console.log('Наша программа включает в себя данные: ');
        
        for (const key in appData) {
           console.log(' Ключ: ' + key + '\n Значение: ' + appData[key]);
           
        }