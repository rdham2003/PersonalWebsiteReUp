const nameElement = document.getElementById('title');
const nameText = nameElement.textContent;
const typingSpeed = 100;
function typeName() {
    nameElement.textContent = ''; 
    let index = 0;

    const typingInterval = setInterval(() => {
        if (index < nameText.length) {
            nameElement.textContent += nameText.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval); 
        }
    }, typingSpeed);
}

typeName();