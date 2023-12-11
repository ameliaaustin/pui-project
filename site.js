// function strikeText() {
//     var element = document.getElementById("strikeText");
//     element.classList.add("strikethrough")
// }

// strikeText();

const bubbleAnimation = 'bubble.json';

const bubbleAnimationContainer = document.getElementById('lottie-container-about');
const animation = lottie.loadAnimation({
    container: bubbleAnimationContainer,
    renderer: 'html',
    loop: true,
    autoplay: true,
    path: bubbleAnimation,
});

// const instagramAnimation = "instagram.json";

// const instagramAnimationContainer = document.getElementById('instagram');
// const animation = lottie.loadAnimation({
//     container: instagramAnimationContainer,
//     renderer: 'html',
//     loop: true,
//     autoplay: true,
//     path: instagramAnimation,
// });