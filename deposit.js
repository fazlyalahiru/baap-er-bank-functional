document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositValue = getInputfieldValueById('deposit-field');
    const previousDepositValue = getElementValueById('deposit-fund');
    const totalDepositValue = newDepositValue + previousDepositValue;
    setElementInnerText('deposit-fund', totalDepositValue);
    // document.getElementById('deposit-fund').innerText = totalDepositValue;
    const previousBalanceValue = getElementValueById('balance-fund');
    const newBalanceValue = previousBalanceValue + newDepositValue;
    setElementInnerText('balance-fund', newBalanceValue);
    // document.getElementById('balance-fund').innerText = newBalanceValue;
})
