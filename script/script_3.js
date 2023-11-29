var userInput = prompt('Введіть фразу:');

function printText(text, index = 0) {
    const outputText = document.getElementById('text');
    if (index < text.length) {
        outputText.textContent += text[index];
        index += 1;
        setTimeout(() => {
            printText(text, index);
        }, 200);
    }
}

printText(userInput);
