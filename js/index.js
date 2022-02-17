function getinput(inputId){
    let input = document.getElementById(inputId)
    let amount = parseFloat(input.value);
    return amount;
}



document.getElementById('calculate_btn').addEventListener('click',function(){
    let incomeAmount = getinput('incomeInput');
    let foodCost = getinput('food_cost');
    let rentCost = getinput('rent_cost');
    let clothesCost = getinput('clothes_cost');
    let totalExpensesAmount = foodCost + rentCost + clothesCost;
    let totalexpenses =document.getElementById('total_expenses') 
    totalexpenses.innerHTML = totalExpensesAmount
    
    let balances = document.getElementById('balanceRemain')
    balances.innerHTML = incomeAmount - totalExpensesAmount;
})
document.getElementById('save_btn').addEventListener('click', function(){
    let incomeAmount = getinput('incomeInput');
    let savePercentage = getinput('saveInput');
    let savingsAmount = document.getElementById('savingsAmount');
    
    savingsAmount.innerHTML = incomeAmount * (savePercentage/100);
    savingBalance = parseFloat(savingsAmount.innerHTML);
    console.log(typeof(savingBalance));
    let balances = document.getElementById('balanceRemain')
    let previousbalance = parseFloat(balances.innerHTML);
    console.log(typeof(previousbalance));
    finalBalance = previousbalance - savingBalance;
    console.log(finalBalance);
    let finalRemainingBalance = document.getElementById('finalRemainingBalance');
    finalRemainingBalance.innerHTML = finalBalance;
    // let balances = document.getElementById('balanceRemain')
    // let previousbalance = balances.innerHTML;
    // finalBalance = previousbalance - savingBalance;
    // finalRemainingBalance.innerHTML = finalBalance;

})