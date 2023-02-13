document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputfieldValueById('withdraw-field');
    const previousWithdrawAmount = getElementValueById('withdraw-fund');
    const previousBalance = getElementValueById('balance-fund');
    const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    setElementInnerText('withdraw-fund', totalWithdrawAmount);
    const newBalance = previousBalance - newWithdrawAmount;
    setElementInnerText('balance-fund', newBalance);
})


