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
        income: {},
        incomeMonth: 0,
        addIncome:[],
        expenses: {}, 
        addExpenses:[],
        expensesMonth: 0,
        deposit: false,
        percentDeposit: 0,
        moneyDeposit: 0,
        itemExpenses: {},  
        cashExpenses: {},

        start: function() {
            appData.budget = +salaryAmount.value;
            appData.getExpenses();
            appData.getIncomes(); 
            appData.getExpensesMonth();
            appData.getAddIncome();
            appData.getAddExpenses();
            appData.getBudget();
            appData.showResult();
        },
        showResult: function(){
            budgetMonthValue.value = this.budgetMonth;
            budgetDayValue.value = this.budgetDay;
            expensesMonthValue.value = this.expensesMonth;
            additionalExpensesValue.value = this.addExpenses.join(', ');
            additionalIncomeValue.value = this.addIncome.join(', ');
            targetMonthValue.value = Math.ceil(this.getTargetMonth());
            incomePeriodValue.value = this.calcPeriod();
            periodSelect.addEventListener('input', function(){
            incomePeriodValue.value = this.calcPeriod();
            });
            incomePeriodValue.value = this.calcPeriod();
        },
        addExpensesBlock: function(){
            let cloneExpensesItems = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
            expensesItems = document.querySelectorAll('.expenses-items');
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
                let itemIncome = item.querySelector('.income-title').value.trim();           
                let cashIncome = item.querySelector('.income-amount').value.trim();    
                if (itemIncome !== '' && cashIncome !=='' && isNumber(cashIncome)){
                    appData.income[itemIncome] = +cashIncome;
                };
            });
            for(let key in this.income){
                this.incomeMonth += +this.income[key];
            }
        },
        getExpenses: function () {
            expensesItems.forEach(function(item){
                let itemExpenses = item.querySelector('.expenses-title').value.trim();
                let cashExpenses = item.querySelector('.expenses-amount').value.trim();
                if (itemExpenses !== '' && cashExpenses !=='' && isNumber(cashExpenses)){
                    appData.expenses[itemExpenses] = +cashExpenses;
                };
            });
        },
        getAddExpenses: function(){
            appData.addExpenses = []; 
            let addExpenses = additionalExpensesItem.value.split(',');
            addExpenses.forEach(function(item){
                item = item.trim();
                if (item !== ''){
                    appData.addExpenses.push(item);
                };
            })
        },
        getAddIncome: function(){
            appData.addIncome = []; 
            additionalIncomeItem.forEach(function(item){
                let itemValue = item.value.trim();
                if (itemValue!=='' ){
                    appData.addIncome.push(itemValue);
                }
            })
        },
        calcSavedMoney: function() {
            return this.budgetMonth * PeriodSelect.value;
        },
        getExpensesMonth: function () {
            for (let key in this.expenses){
                this.expensesMonth += +this.expenses[key];
            }
        },
        
        getBudget: function (){
            this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
            this.budgetDay = Math.floor(this.budgetMonth / 30);
        },
        getTargetMonth: function(){
            return targetAmount.value / this.budgetMonth;
        },
        getStatusIncome: function () {
            if (this.budgetDay > 500){
                return('У вас высокий уровень дохода');
            } else if (this.budgetDay > 300) {
                return('У вас средний уровень дохода');
            } else if(this.budgetDay > 0 ) {
                return('К сожалению у вас уровень дохода ниже среднего');
            } else{
                return('Что то пошло не так');
            }
            },
            getInfoDeposit: function () {
                if(this.deposit){
                    do{
                        this.percentDeposit = prompt('какой годовой процент?',10);
                    }while(!isNumber(this.percentDeposit) || this.percentDeposit === '' 
                    || this.percentDeposit === null);
                    
                    do{
                        this.moneyDeposit = prompt('Какая сумма депозита', 3000);
                    }while(!isNumber(appData.moneyDeposit) || this.moneyDeposit === '' 
                    || this.moneyDeposit === null);
                    
                }
                
            },
            calcPeriod: function () {
                return this.budgetMonth * periodSelect.value;
            },
            changePeriod: function() {
                periodAmount.textContent = periodSelect.value ;
                incomePeriodValue.innerHTML = periodSelect.value * this.budgetMonth;
            }
    };
start.setAttribute('disabled', '');
salaryAmount.addEventListener('input',(e)=> {
    const salary = salaryAmount.value.trim();
    if(salary !=='' && isNumber(salary)){
        start.removeAttribute('disabled');
    }else{start.setAttribute('disabled', '')};
    });
start.addEventListener('click',appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.changePeriod);
