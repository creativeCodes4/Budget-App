// Declaration of Variables...

const menuButtons = document.querySelectorAll('.menu-btn');

const cards = document.querySelectorAll('.card');

const incomes = document.querySelector('.incomes');

const incomeAmount = document.querySelector('#income-amount');

const addIncomeButton = document.querySelector('#add-income-btn');

const incomeInput = document.querySelector('#income-input');

const expensesClass = document.querySelector('.expenses');

const addExpenseButton = document.querySelector('#add-expense-btn');

const expenseInput = document.querySelector('#expense-input');

const expenseAmount = document.querySelector('#expense-amount');

// Arrays to be used...

let income;
let expensesArray = [];

// menuButtons[0].style.borderBottom = '3px solid rgb(126, 69, 218)';
cards[0].style.display = 'block';

// Listening on Clicked Menu Button...

menuButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    let btn = button.getAttribute('data-target');
    // console.log(btn);
    cards.forEach((card) => {
      if (card.classList.contains(btn)) {
        card.style.display = 'block';
        card.style.animation = 'modalanim 1s ease forwards';
        button.backgroundColor = 'rgb(126, 69, 218)';
      } else {
        card.style.display = 'none';
        button.style.border = 'none';
      }
    });
  });
});

// Listening on Adding Income Button...

addIncomeButton.addEventListener('click', () => {
  const newIncomeValue = incomeInput.value;
  income = newIncomeValue;
  incomeAmount.textContent = income;
  incomeInput.value = '';
});


// Listening on Adding Expense Button...


addExpenseButton.addEventListener('click', () => {
  const newExpenseValue = expenseInput.value;
  expense = newExpenseValue;
  expensesArray.push(expense);
  expenseInput.value = '';
  showExpenses();
});

function showExpenses(){
  let total = 0;

  // Creating new UL and Li elements...

  const expenseUl = document.createElement('ul');
  expensesClass.innerHTML = '';
  // expenseUl.innerHTML = '';
  expensesArray.forEach( (item) => {
    expenseUl.innerHTML += `
      <li>${item}</li>
    `;    
    total += parseFloat(item);
    expensesClass.appendChild(expenseUl);
  });
  expenseAmount.textContent = total;

}
