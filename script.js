
function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{ }|;:,.<>?';

    let allowedChars = '';
    if (includeUppercase) allowedChars += uppercase;
    if (includeLowercase) allowedChars += lowercase;
    if (includeNumbers) allowedChars += numbers;
    if (includeSymbols) allowedChars += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
    }

    document.getElementById('password').value = password;
}

// Copy password to clipboard
function copyPassword() {
    const password = document.getElementById('password');
    password.select();
    document.execCommand('copy');
}

// Update slider value display
document.getElementById('length').addEventListener('input', function () {
    document.getElementById('lengthValue').textContent = this.value;
});
