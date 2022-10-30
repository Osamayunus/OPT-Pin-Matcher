function inputField(inputId) {
    const inputValueField = document.getElementById(inputId);
    const inputValueString = inputValueField.value;
    const inputValue = parseInt(inputValueString);
    return inputValue;
}
function addKey(key1, key2) {
    const added = key1 + key2;
    return added;
}
function randomNumber() {
    const mathRandomFloot = Math.random() * 10000;
    const mathRandom = Math.round(mathRandomFloot);
    return mathRandom;
}