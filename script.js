const slogan = "Creativity is just intelligence having fun";
const sloganElement = document.getElementById("dynamic-slogan");
let charIndex = 0;

function displaySlogan() {
    sloganElement.textContent = slogan.slice(0, charIndex);
    charIndex++;
    if (charIndex > slogan.length) {
        charIndex = 0;
    }
}

setInterval(displaySlogan, 150); // Adjust the interval (in milliseconds) to control the speed of the animation
