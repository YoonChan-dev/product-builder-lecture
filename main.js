const generateBtn = document.getElementById('generate');
const numbersDiv = document.getElementById('numbers');
const themeToggle = document.getElementById('theme-toggle');

// 저장된 테마 불러오기
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    numbersDiv.innerHTML = '';
    for (const number of Array.from(numbers).sort((a, b) => a - b)) {
        const span = document.createElement('span');
        span.textContent = number;
        numbersDiv.appendChild(span);
    }
});
