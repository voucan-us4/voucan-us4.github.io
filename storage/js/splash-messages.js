const phrases = [
    `hi guys`,
    `cheese`,
    `dont type this on your keyboard: up, up, down, down, left, right, left, right, B, A, enter`,
    `emerity said you should watch bleach`,
    `im going to put bleach in your eyes`,
    `shoutout to @literalaj on yt`,
    `im in your walls`,
    `"play the strongest battlegrounds" - literalaj`,
    /*{ other: 'loop', width: '200px', type: "video", src: `https://media.tenor.com/SIpmtvnEsDIAAAPo/rotating-chips.mp4` },*/
    `jackson is batman`,
    `jacob is the WORST violin. Make sure to bully him (8th grade violin, probably 400 pounds tbh)`,
    /*{ type: "image", width: '400px', src: `https://c.tenor.com/9MVlipGuNioAAAAC/tenor.gif` },*/
    `"im the best kahoot player" - Jay C`,
];

const paragraph = document.getElementById('dynamicParagraph');

paragraph.style.userSelect = 'none';

function changeText() {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

    if (typeof randomPhrase === "string") {
        paragraph.textContent = randomPhrase;
    } else if (randomPhrase.type === "image") {
        paragraph.innerHTML = `<img src="${randomPhrase.src}" alt="Splash Image" style="max-width: ${randomPhrase.width};">`;
    } else if (randomPhrase.type === "video") {
        paragraph.innerHTML = `<video ${randomPhrase.other} autoplay style="max-width: ${randomPhrase.width}; height: auto; "> <source src="${randomPhrase.src}" type="video/mp4"> </video>`;
    }
}

paragraph.addEventListener('click', changeText);
window.onload = changeText;
