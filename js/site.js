// creates bubble animation
const bubbleAnimation = 'animations/bubble.json';

const bubbleAnimationContainer = document.getElementById('lottie-container-about');
const animation = lottie.loadAnimation({
    container: bubbleAnimationContainer,
    renderer: 'html',
    loop: true,
    autoplay: true,
    path: bubbleAnimation,
});
