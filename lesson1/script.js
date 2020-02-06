
'use strict';

let isNumber = function(n) {
return !isNaN(parseFloat(n)) && isFinite(n)
};
let plus = document.getElementsByTagName('button')[0],
    plusplus = document.getElementsByTagName('button')[1],
    checkbox = document.querySelector('#deposit-check'),
    additional_income = document.querySelectorAll('.additional_income-item'),
    // budget_month = document.getElementsByClassName('budget_month-value'),
    budget_day = document.getElementsByClassName('budget_day-value'),
    expenses_month = document.getElementsByClassName('expenses_month-value'),
    additional_income = document.getElementsByClassName('additional_income-value'),
    additional_expenses = document.getElementsByClassName('additional_expenses-value'),
    income_period = document.getElementsByClassName('income_period-value'),
    target_month = document.getElementsByClassName('target_month-value'),
    salary_amount = document.querySelector('.salary-amount'),
    income_title = document.querySelector('.income-title'),
    income_amount = document.querySelector('.income-amount'),
    expenses_title = document.querySelector('.expenses-title'),
    expenses_amount = document.querySelector('.expenses-amount'),
    sadditional_expenses_item = document.querySelector('.additional_expenses-item'),
    deposit_amount = document.querySelector('.deposit-amount'),
    deposit_percent = document.querySelector('.deposit-percent'),
    target_amount = document.querySelector('.target-amount'),
    period_select = document.querySelector('.period-select'),
    result_total  = document.querySelector('.result-total '),
    cancel = document.querySelector('#cancel');
  



let money = 0,
start = function() {
    do {
      money = +prompt('Ваш месячный доход?', 8888);
    } 
    while (isNaN(money) || money === '' || money === null);
  };
    
  start();
  start = document.getElementById('start');






  let   appData = {
        budget: money,
        budgetDay: 0,
        budgetMonth: 0,
        income: [],
        addIncome:[],
        expenses: [], 
        addExpenses:[],
        expensesMonth: 0,
        deposit: false,
        percentDeposit: 0,
        moneyDeposit: 0,
        mission: 99999,
        period: 3,
        itemExpenses: {},  
        cashExpenses: {},
        asking: function(){
        if (confirm('Есть ли у вас доп. источник заработка?')) {
            let itemIncome,
            cashIncome;
                do {
                     itemIncome = prompt('Как вы подрабатываете?','taxi');
                }while (isNumber(itemIncome) || itemIncome ==='' || itemIncome === null); 

                do {
                    cashIncome = prompt('Сколько на этом в месяц зарабатываете?',777);
                }while (!isNumber(cashIncome) || cashIncome === '' || cashIncome === null);
            
            appData.income[itemIncome] = cashIncome;
            }

            let addExpenses = prompt('Перечислите возможные расходы через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            for (let i = 0; i < 2 ; i++) {
                
                do{
                    appData.itemExpenses = prompt('Введите обязательную статью расходов?','food');
                } while (isNumber(appData.itemExpenses) || appData.itemExpenses ==='' 
                || appData.itemExpenses === null);

                do {
                    appData.cashExpenses = prompt('Во сколько это обойдется?',1);
                    
                } while (!isNumber(appData.cashExpenses) || appData.cashExpenses === '' 
                || appData.cashExpenses === null);
                appData.expenses[appData.itemExpenses] = appData.cashExpenses;
                
            }
        },

        getExpensesMonth: function () {
            for (let key in appData.expenses){
                appData.expensesMonth += +appData.expenses[key];
            }
        },
        
        getBudget: function (){
            appData.budgetMonth = appData.budget - appData.expensesMonth;
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
        },
        getTargetMonth: function(){
            return appData.mission / appData.budgetMonth;
        },
        getStatusIncome: function () {
            if (appData.budgetDay > 500){
                return('У вас высокий уровень дохода');
            } else if (appData.budgetDay > 300) {
                return('У вас средний уровень дохода');
            } else if(appData.budgetDay > 0 ) {
                return('К сожалению у вас уровень дохода ниже среднего');
            } else{
                return('Что то пошло не так');
            }
            },
            getInfoDeposit: function () {
                if(appData.deposit){
                    do{
                        appData.percentDeposit = prompt('какой годовой процент?',10);
                    }while(!isNumber(appData.percentDeposit) || appData.percentDeposit === '' 
                    || appData.percentDeposit === null);
                    
                    do{
                        appData.moneyDeposit = prompt('Какая сумма депозита', 3000);
                    }while(!isNumber(appData.moneyDeposit) || appData.moneyDeposit === '' 
                    || appData.moneyDeposit === null);
                    
                }
                
            },
            calcSavedMoney: function () {
                return appData.budgetMonth * appData.period;
            }
  };
 
    appData.asking();
    appData.getExpensesMonth();
    appData.getBudget();
    appData.getInfoDeposit();
    appData.calcSavedMoney();
    console.log (appData.getStatusIncome());
    
    
    
    console.log('Расходы за месяц составят : ' , appData.expensesMonth);

    if ( appData.getTargetMonth()>0){
        console.log('Cрок достижения цели в месяцах:'
        , Math.ceil(appData.getTargetMonth()));  
    }else{
                console.log('Цель не будет достигнута');      
        };
        // console.log('Наша программа включает в себя данные: ');
        
        // for (const key in appData) {
        //    console.log(' Ключ: ' + key + '\n Значение: ' + appData[key]);
           
        // };
      console.log(
        appData.budget,
        appData.budgetDay,
        appData.budgetMonth,
        appData.income,
        appData.addIncome,
        appData.expenses, 
        appData.addExpenses,
        appData.expensesMonth,
        appData.addExpenses.map(word => 
            word[0].toUpperCase() + word.substring(1)).join(', '));

     