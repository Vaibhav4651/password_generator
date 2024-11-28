const passwordDisplay = document.getElementById("passwordDisplay");
const copyPasswordButton = document.getElementById("copyPasswordButton");
const generatePasswordButton = document.getElementById("generatePasswordButton");
const passwordLengthSlider = document.getElementById("passwordLengthSlider");
const passwordLengthDisplay = document.getElementById("passwordLengthDisplay");
const clipboardAlert = document.getElementById("clipboardAlert");
const optionsAlert = document.getElementById("optionsAlert");

const includeNumbers = document.getElementById("includeNumbers");
const includeLetters = document.getElementById("includeLetters");
const includeMixedCase = document.getElementById("includeMixedCase");
const includePunctuation = document.getElementById("includePunctuation");

const charSets = {
    numbers: "0123456789",
    letters: "abcdefghijklmnopqrstuvwxyz",
    mixedCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    punctuation: "!@#$%^&*()_+[]{}<>?|"
};

passwordLengthSlider.addEventListener("input", () => {
    passwordLengthDisplay.textContent = passwordLengthSlider.value;
});

generatePasswordButton.addEventListener("click", () => {
    const length = passwordLengthSlider.value;
    let charPool = "";

    if (includeNumbers.checked) charPool += charSets.numbers;
    if (includeLetters.checked) charPool += charSets.letters;
    if (includeMixedCase.checked) charPool += charSets.mixedCase;
    if (includePunctuation.checked) charPool += charSets.punctuation;

    if (!charPool) {
        optionsAlert.style.display = "block";
        setTimeout(() => (optionsAlert.style.display = "none"), 3000);
        passwordDisplay.value = "";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += charPool[Math.floor(Math.random() * charPool.length)];
    }

    passwordDisplay.value = password;
});

copyPasswordButton.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordDisplay.value).then(() => {
        clipboardAlert.style.display = "block";
        setTimeout(() => (clipboardAlert.style.display = "none"), 3000);
    });
});
