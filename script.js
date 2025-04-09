function processText() {
    const inputTextElement = document.getElementById('inputText');
    const resultElement = document.getElementById('result');
    const text = inputTextElement.value;

    if (text) {
        const capitalizedText = text.toUpperCase();
        const reversedText = capitalizedText.split('').reverse().join('');
        resultElement.textContent = reversedText;
    } else {
        resultElement.textContent = 'Please enter some text.';
    }
}
