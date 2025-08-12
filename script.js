let isSingleMode = true;
const wordOutput = document.getElementById('wordOutput');
const modeToggle = document.getElementById('modeToggle');
const generateBtn = document.getElementById('generateBtn');

// Переключение режима
modeToggle.addEventListener('click', () => {
    isSingleMode = !isSingleMode;
    modeToggle.textContent = isSingleMode ? 'Режим: одиночный' : 'Режим: парный';
});

// Генерация слов
generateBtn.addEventListener('click', () => {
    wordOutput.style.opacity = 0;
    
    setTimeout(() => {
        if (isSingleMode) {
            wordOutput.innerHTML = `...${getRandomWord()}`;
        } else {
            wordOutput.innerHTML = `...${getRandomWord()}<br>...${getRandomWord()}`;
        }
        wordOutput.style.opacity = 1;
    }, 300);
});

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}