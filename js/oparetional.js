
document.getElementById('genarate-btn').addEventListener('click', function () {
    const mathRand = randomNumber();
    const pinField = document.getElementById('input-field');
    if (mathRand > 999) {
        pinField.value = mathRand;
    }
})
document.getElementById('keyboard').addEventListener('click', function (event) {
    const keyValue = (event.target.innerText);
    const input = document.getElementById('key-input');
    const keyLength = keyValue.length;
    const totalKey = addKey(input.value, keyValue);
    if (keyLength === 1) {
        if (keyValue !== 'C' && keyValue !== '<') {
            input.value = totalKey;

        }
        else if (keyValue === '<') {
            const splitNumbers = totalKey.split('');
            const lengthSplite = splitNumbers.length - 2;
            splitNumbers.splice(lengthSplite, 2);
            const joinNumber = splitNumbers.join('');
            input.value = joinNumber;
        }
        else {
            input.value = '';
        }
    }
    else {
        alert('Please give a number')
    }
})
document.getElementById('submit-btn').addEventListener('click', function () {
    const inputRandom = inputField('input-field');
    const inputKeywords = inputField('key-input');
    if (inputKeywords === inputRandom) {
        const correct = document.getElementById('pin-correct');
        correct.style.cssText = 'display-block'
    }
    else {
        document.getElementById('pin-incorrect').style.cssText = 'display:block';
    }

})