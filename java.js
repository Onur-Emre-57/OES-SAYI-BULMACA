let secretNumber;
let attempts = 0;
let maxAttempts = 5;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('guess').value = '';
    document.getElementById('attempts').textContent = `Kalan Hak: ${maxAttempts}`;
}

function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('result').textContent = 'Lütfen 1 ile 100 arasında bir sayı girin.';
        return;
    }

    attempts++;
    const remainingAttempts = maxAttempts - attempts;

    if (guess < secretNumber) {
        document.getElementById('result').textContent = 'Tahmininiz çok düşük!';
    } else if (guess > secretNumber) {
        document.getElementById('result').textContent = 'Tahmininiz çok yüksek!';
    } else {
        document.getElementById('result').textContent = `Tebrikler! ${attempts} denemede doğru tahmin ettiniz.`;
        return; // Doğru tahmin yapıldığında işlemi bitir
    }

    if (remainingAttempts > 0) {
        document.getElementById('attempts').textContent = `Kalan Hak: ${remainingAttempts}`;
    } else {
        document.getElementById('result').textContent = `Tahmin haklarınız bitti! Doğru sayı: ${secretNumber}.`;
        document.getElementById('attempts').textContent = 'Kalan Hak: 0';
    }
}