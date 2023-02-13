function getInputfieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId) {
    const elementItem = document.getElementById(elementId);
    const elementItemString = elementItem.innerText;
    const elementItemValue = parseFloat(elementItemString);
    elementItem.innerText = '';
    return elementItemValue;
}

function setElementInnerText(elementId, elementInnerText) {
    document.getElementById(elementId).innerText = elementInnerText;
}
