const form = document.querySelector('form');
const amount = document.getElementById('amount');
const expense = document.getElementById('expense');
const category = document.getElementById('category');

const expenseList = document.querySelector('ul');

amount.oninput = () => {
    let value = amount.value.replace(/\D/g, '');

    value = Number(value) / 100;

    amount.value = formatCurrencyBR(value);
}

function formatCurrencyBR(value) {
    value = value.toLocaleString('pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        });
    
    return value;
}

form.onsubmit = (event) => {
    event.preventDefault();

    const newExpense = {
        id: new Date().getTime(),
        amount: amount.value,
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        createdAt: new Date()
    }

    addExpense(newExpense);
}

function addExpense(newExpense) {
    try {
        const expenseItem = document.createElement('li');
        expenseItem.classList.add('expense-item');

        const expenseIcon = document.createElement('img');
        expenseIcon.setAttribute('src', 'img/${newExpense.category_id}.svg');
        expenseIcon.setAttribute('alt', newExpense.category_name);

        const expenseInfo = document.createElement('div');
        expenseInfo.classList.add('expense-info');

        const expenseName = document.createElement('strong');
        expenseName.textContent = newExpense.expense;

        const expenseCategory = document.createElement('span');
        expenseCategory.textContent = newExpense.category_name;

        expenseInfo.append(expenseName, expenseCategory);

        expenseItem.append(expenseIcon, expenseInfo);

        expenseList.append(expenseItem);

        updateTotal();
    } catch (error) {
        alert('Erro ao adicionar despesa: ' + error.message);
    }
}

function updateTotal() {
    try {

        const itens = expenseList.children;


    } catch (error) {
        alert('Erro ao atualizar total: ' + error.message);
    }
}