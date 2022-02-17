// function of gettin input
function getinput(inputId){
    let input = document.getElementById(inputId)
    let amount = parseFloat(input.value);
    return amount;
}


// calculate button event handle

document.getElementById('calculate_btn').addEventListener('click',function(){
    let incomeAmount = getinput('incomeInput');
    let foodCost = getinput('food_cost');
    let rentCost = getinput('rent_cost');
    let clothesCost = getinput('clothes_cost');
    let error_msg1 = document.getElementById('error_msg1');
    let error_msg2 = document.getElementById('error_msg2');
    let error_msg3 = document.getElementById('error_msg3');
    let error_msg4 = document.getElementById('error_msg4');
    

    
    let totalExpensesAmount = foodCost + rentCost + clothesCost;
    let totalexpenses =document.getElementById('total_expenses') 
    totalexpenses.innerHTML = totalExpensesAmount
    
    let balances = document.getElementById('balanceRemain')
    balances.innerHTML = incomeAmount - totalExpensesAmount;
    error_msg1.style.display = 'none';
    error_msg2.style.display = 'none';
    error_msg3.style.display = 'none';
    error_msg4.style.display = 'none';
    
    
    
    // validation for Negetive value
    
    if(incomeAmount <= 0 || foodCost <= 0 || rentCost <= 0 ||clothesCost <= 0){
        
        error_msg2.style.display = 'block';
        error_msg1.style.display = 'none';
        error_msg3.style.display = 'none';
        error_msg4.style.display = 'none';
    }
    
    
    
    // validation for income amount and other value 
    
    if(foodCost > incomeAmount|| rentCost> incomeAmount || clothesCost > incomeAmount ){
        error_msg1.style.display = 'block';
        error_msg2.style.display = 'none';
        error_msg3.style.display = 'none';
        error_msg4.style.display = 'none';
    }
    // validation for the summation of other values than income
    if((foodCost + rentCost) > incomeAmount|| ( rentCost + clothesCost)> incomeAmount || (clothesCost + foodCost) > incomeAmount || (foodCost + rentCost + clothesCost ) > incomeAmount){
        error_msg4.style.display = 'block';
        error_msg1.style.display = 'none';
        error_msg2.style.display = 'none';
        error_msg3.style.display = 'none';
    }
    // validation for checking number and null value
    if(isNaN(incomeAmount) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost)){
        
        error_msg3.style.display = 'block';
        error_msg2.style.display = 'none';
        error_msg1.style.display = 'none';
        error_msg4.style.display = 'none';
    }
    
    
    
})
document.getElementById('save_btn').addEventListener('click', function(){
    let incomeAmount = getinput('incomeInput');
    let savePercentage = getinput('saveInput');
    let savingsAmount = document.getElementById('savingsAmount');
    let error_msg1 = document.getElementById('error_msg1');
    let error_msg2 = document.getElementById('error_msg2');
    let error_msg3 = document.getElementById('error_msg3');
    let error_msg5 = document.getElementById('error_msg5');
    savingsAmount.innerHTML = incomeAmount * (savePercentage/100);
    savingBalance = parseFloat(savingsAmount.innerHTML);
    let balances = document.getElementById('balanceRemain');
    let previousbalance = parseFloat(balances.innerHTML);
    finalBalance = previousbalance - savingBalance;
    let finalRemainingBalance = document.getElementById('finalRemainingBalance');
    finalRemainingBalance.innerHTML = finalBalance;
    error_msg1.style.display = 'none';
    error_msg2.style.display = 'none';
    error_msg5.style.display = 'none';
    
    // validation for input of saving amount for negetive value
    if(savePercentage <= 0){
        error_msg2.style.display = 'block';
        error_msg3.style.display = 'none';
    }
    if(isNaN(savePercentage)){
        
        error_msg3.style.display = 'block';
        error_msg2.style.display = 'none';
    }
    if(savingBalance > previousbalance){
        error_msg5.style.display = 'block';
        error_msg3.style.display = 'none';
        error_msg2.style.display = 'none';
        finalRemainingBalance.innerHTML = '';
    }
    
    

})