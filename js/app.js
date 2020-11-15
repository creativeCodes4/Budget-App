// Declaration of Variables...

const menuButtons = document.querySelectorAll('.menu-btn');

const cards = document.querySelectorAll('.card');

const incomes = document.querySelector('.incomes');

const incomeAmount = document.querySelector('#income-amount');

const addIncomeButton = document.querySelector('#add-income-btn');

const incomeInput = document.querySelector('#income-input');

// Arrays to be used...

let incomeArray = [100, 1222];
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
  incomeArray.push(newIncomeValue);
  incomeInput.value = '';
  console.log(incomeArray);
});

// Showing Incomes...
let total = 0;

// Adding Income Function...

function addNewIncome(incomeValue) {
  incomeArray.push(incomeValue.parseInt());
  incomeInput.value = '';
  showIncomes();
}

// Showin Income Lists...

function showIncomes() {
  const incomeUl = document.createElement('ul');
  const newTotal = document.createTextNode(total);
  incomeArray.forEach((item) => {
    const incomeLi = document.createElement('li');
    total = total + item;
    let income = document.createTextNode(item);
    incomeLi.appendChild(income);
    incomeUl.appendChild(incomeLi);
  });

  incomes.appendChild(incomeUl);

  incomeAmount.textContent = total;
}

