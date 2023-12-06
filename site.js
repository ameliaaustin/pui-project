// function strikeText() {
//     var element = document.getElementById("strikeText");
//     element.classList.add("strikethrough")
// }

// strikeText();

const animationPath = 'bubble.json';

const animationContainer = document.getElementById('lottie-container-about');
const animation = lottie.loadAnimation({
    container: animationContainer,
    renderer: 'html',
    loop: true,
    autoplay: true,
    path: animationPath,
});
