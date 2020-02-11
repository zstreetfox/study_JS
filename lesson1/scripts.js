
'use strict';

let isNumber = function(n) {
return !isNaN(parseFloat(n)) && isFinite(n)
};
let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    // incomeAmount = document.querySelector('.income-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    // expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    targetAmount = document.querySelector('.target-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item');

let     appData = {
        budget: 0,
        budgetDay: 0,
        budgetMonth: 0,
        income: [],
        incomeMonth: 0,
        addIncome:[],
        expenses: [], 
        addExpenses:[],
        expensesMonth: 0,
        deposit: false,
        percentDeposit: 0,
        moneyDeposit: 0,
        itemExpenses: {},  
        cashExpenses: {},

        
            
    
            
        start: function() {
            if(salaryAmount.value !== '') {
                appData.budget = +salaryAmount.value;
            

            appData.budget = +salaryAmount.value;
            appData.getExpenses();
            appData.getIncomes(); 
            appData.getExpensesMonth();
            appData.getAddIncome();
            appData.getAddExpenses();
            appData.getBudget();
            appData.showResult();
        } else {
            return;
        }
        },
        showResult: function(){
            budgetMonthValue.value = appData.budgetMonth;
            budgetDayValue.value = appData.budgetDay;
            expensesMonthValue.value = appData.expensesMonth;
            additionalExpensesValue.value = appData.addExpenses.join(', ');
            additionalIncomeValue.value = appData.addIncome.join(', ');
            targetMonthValue.value = Math.ceil(appData.getTargetMonth());
            incomePeriodValue.value = appData.calcPeriod();
            periodSelect.addEventListener('input', function(){
                incomePeriodValue.value = appData.calcPeriod();
            });
            incomePeriodValue.value = appData.calcPeriod();
            
        },
        addExpensesBlock: function(){
            let cloneExpensesItems = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
            expensesItems = document.querySelectorAll('.expenses-items');
            
            input
            if(expensesItems.length === 3){
                expensesPlus.style.display = 'none';
            };
        },
        addIncomeBlock: function () {
            let cloneIncomesItem = incomeItems[0].cloneNode(true);
            incomeItems[0].parentNode.insertBefore(cloneIncomesItem, incomePlus);
            incomeItems = document.querySelectorAll('.income-items');
        
            if (incomeItems.length === 3) {
                incomePlus.style.display = 'none';
            }
        },
        getIncomes: function() {
            incomeItems.forEach(function(item){
                let itemIncome = item.querySelector('.income-title').value;           
                let cashIncome = item.querySelector('.income-amount').value;    
                if (itemIncome !== '' && cashIncome !==''){
                appData.income[itemIncome] = cashIncome;
                };
            });
            for(let key in appData.income){
                appData.incomeMonth += +appData.income[key]
            }
        },
        getExpenses: function () {

            expensesItems.forEach(function(item){
                let itemExpenses = item.querySelector('.expenses-title').value;
                let cashExpenses = item.querySelector('.expenses-amount').value;
                if (itemExpenses !== '' && cashExpenses !==''){
                    appData.expenses[itemExpenses] = cashExpenses;
                };
            });
            
        },
        getAddExpenses: function(){
            let addExpenses = additionalExpensesItem.value.split(',');
            addExpenses.forEach(function(item){
                item = item.trim();
                if (item !== ''){
                    appData.addExpenses.push(item);
                };
            })
        },
        getAddIncome: function(){
            additionalIncomeItem.forEach(function(item){
                let itemValue = item.value.trim();
                if (itemValue!==''){
                    appData.addIncome.push(itemValue);
                }

            })
        },
        calcSavedMoney: function() {
            return appData.budgetMonth * PeriodSelect.value;
        },
        // asking: function(){
        // if (confirm('Есть ли у вас доп. источник заработка?')) {
        //     let itemIncome = prompt('Как вы подрабатываете?','taxi');
        //     let cashIncome = ('Сколько на этом в месяц зарабатываете?',777);
        //     appData.income[itemIncome] = cashIncome;
        // }
            

        //     appData.addExpenses = addExpenses.toLowerCase().split(',');



        // },

        getExpensesMonth: function () {
            for (let key in appData.expenses){
                appData.expensesMonth += +appData.expenses[key];
            }
        },
        
        getBudget: function (){
            appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
        },
        getTargetMonth: function(){
            return targetAmount.value / appData.budgetMonth;
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
            calcPeriod: function () {
                return appData.budgetMonth * periodSelect.value;
            },
            changePeriod: function() {
                periodAmount.textContent = periodSelect.value ;
                incomePeriodValue.innerHTML = periodSelect.value * appData.budgetMonth;
            }
};

console.log(periodAmount.value);


start.addEventListener('click',appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.changePeriod);
    

    
    
    // console.log('Расходы за месяц составят : ' + appData.expensesMonth);

    // if ( appData.getTargetMonth() > 0){
    //     console.log('Cрок достижения цели в месяцах:'
    //     + Math.ceil(appData.getTargetMonth()));  
    // }else{
    //             console.log('Цель не будет достигнута');      
    //     };
        
        // appData.addExpenses.map(word => 
        //     word[0].toUpperCase() + word.substring(1)).join(', '));