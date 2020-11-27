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

const statusIncomeAmount = document.querySelector('#status-income-amount');

const statusExpenseAmount = document.querySelector('#status-expense-amount');

const statusAmount = document.querySelector('#status-amount');

const statusIcon = document.querySelector('#status-icon');



// Variables & Array to be used...

let income = 0;
let budget = 0;
let totalExpenses = 0;
let status = 0;
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
  updateStatus();
});


// Listening on Adding Expense Button...


addExpenseButton.addEventListener('click', () => {
  const newExpenseValue = expenseInput.value;
  expense = newExpenseValue;
  expensesArray.push(expense);
  expenseInput.value = '';
  showExpenses();
  updateStatus();
});

function showExpenses(){
  let total = 0;

  // Creating new UL and Li elements...

  const expenseUl = document.createElement('ul');

  expensesClass.innerHTML = '';

  // Looping over all items to add them to the list as well as getting the total...

  expensesArray.forEach( (item) => {
    expenseUl.innerHTML += `
      <li>${item}</li>
    `;    
    total += parseFloat(item);
    expensesClass.appendChild(expenseUl);
  });

  // Storing The Total for later use...

  totalExpenses = total;

  // Updating the Expenses Total...

  expenseAmount.textContent = total;

}


function updateStatus() {
  status = income - totalExpenses;
  statusExpenseAmount.textContent = totalExpenses;
  statusIncomeAmount.textContent = income;
  statusAmount.textContent = status;

  // Styling the Status if the budget is lower than the Expenses...

  if (status < 0) {
    statusIcon.style.color = 'rgb(190, 40, 85)';
  }
  else{
    statusIcon.style.color = 'rgb(126, 69, 218)';
  }

}

