const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshButton = document.querySelector(".refresh");
const copyButton = document.querySelector(".copy");

//------------------------- For Single Color control -----------------------------
const colorBox = document.querySelector(".color-box");
const colorInput = document.querySelectorAll(".color input");
const singleColorTextarea = document.querySelector("#singleColor");
const refreshBtn = document.querySelector(".refreshColor");
const copyBtn = document.querySelector(".copyColor");
/*******************************************************************************/

const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
    if(isRandom){
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }

    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    gradientBox.style.background = gradient;
    textarea.value = `background: ${gradient}`;
}

const copyCode = () => {
    navigator.clipboard.writeText(textarea.value);
    copyButton.innerText = "Code Copied";
    setTimeout(() => copyButton.innerText = "Copy Code", 1600);
}

colorInputs.forEach(input => {
    input.addEventListener("input", () => generateGradient(false));
});

selectMenu.addEventListener("change", () => generateGradient(false));
refreshButton.addEventListener("click", () => generateGradient(true));
copyButton.addEventListener("click",  copyCode);


//------------------------- For Single Color control -----------------------------
const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomColor}`;
}

const generateColor = (random) => {
    if (random) {
        colorInput[0].value = generateRandomColor();
    }
    const color = `${colorInput[0].value}`;
    colorBox.style.background = color;
    singleColorTextarea.value = `background: ${color}`;
}

const copyColorCode = () => {
    navigator.clipboard.writeText(singleColorTextarea.value);
    copyBtn.innerText = "Code Copied";
    setTimeout(() => copyBtn.innerText = "Copy Code", 1600);
}

colorInput.forEach(input => {
    input.addEventListener("input", () => generateColor(false));
});

refreshBtn.addEventListener("click", () => generateColor(true));
copyBtn.addEventListener("click",  copyColorCode);

/*******************************************************************************/