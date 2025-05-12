window.addEventListener("load", function () {
    const userBgColor = localStorage.getItem('backgroundColor') || '#000';

    const loadingScreen = document.createElement("div");
    loadingScreen.id = "loadingScreen";
    Object.assign(loadingScreen.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: userBgColor,
        backgroundSize: "cover",
        color: getTextColor(userBgColor),
        zIndex: "1000",
        fontFamily: "'Comfortaa', cursive",
        backdropFilter: "blur(10px)"
    });

    const logo = document.createElement("img");
    Object.assign(logo.style, {
        src: "/storage/images/logo2.png",
        maxWidth: "150px",
        marginBottom: "20px",
        filter: getTextColor(userBgColor) === '#000' ? 'invert(1)' : 'none'
    });

    const text = document.createElement("p");
    Object.assign(text.style, {
        fontSize: "32px",
        fontWeight: "bold",
        opacity: "0.8"
    });
    text.textContent = "Loading";

    const tipText = document.createElement("p");
    Object.assign(tipText.style, {
        fontSize: "18px",
        fontWeight: "normal",
        marginTop: "10px",
        textAlign: "center",
        maxWidth: "80%",
        opacity: "0.8"
    });
    tipText.textContent = "Want to suggest a game or app? Join our discord!";

    const progressBarContainer = document.createElement("div");
    Object.assign(progressBarContainer.style, {
        width: "80%",
        height: "10px",
        borderRadius: "5px",
        overflow: "hidden",
        border: `2px solid ${getTextColor(userBgColor)}`,
        marginTop: "20px",
        backgroundColor: adjustBrightness(userBgColor, -30),
        position: "relative",
        boxShadow: `0 0 10px ${adjustBrightness(userBgColor, 50)}`
    });

    const progressBar = document.createElement("div");
    Object.assign(progressBar.style, {
        height: "100%",
        width: "0%",
        background: `linear-gradient(90deg, ${adjustBrightness(userBgColor, 70)}, ${adjustBrightness(userBgColor, 30)})`,
        transition: "width 0.2s ease-in-out"
    });

    progressBarContainer.appendChild(progressBar);
    loadingScreen.append(logo, text, tipText, progressBarContainer);
    document.body.appendChild(loadingScreen);

    let loadingDots = 3;
    const loadingDotsMax = 3;
    const dotInterval = setInterval(() => {
        text.textContent = "Loading" + ".".repeat(loadingDots);
        loadingDots = loadingDots > 0 ? loadingDots - 1 : loadingDotsMax;
    }, 500);

    let progress = 0;
    const progressInterval = setInterval(() => {
        if (progress < 100) {
            progress += 1;
            progressBar.style.width = `${progress}%`;
        } else {
            clearInterval(progressInterval);
            clearInterval(dotInterval);
            setTimeout(() => loadingScreen.remove(), 300);
        }
    }, 30);
});

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Comfortaa&display=swap";
document.head.appendChild(fontLink);

function getTextColor(bgColor) {
    const r = parseInt(bgColor.slice(1, 3), 16);
    const g = parseInt(bgColor.slice(3, 5), 16);
    const b = parseInt(bgColor.slice(5, 7), 16);
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000' : '#fff';
}

function adjustBrightness(hex, percent) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    r = Math.min(255, Math.max(0, r + (r * percent) / 100));
    g = Math.min(255, Math.max(0, g + (g * percent) / 100));
    b = Math.min(255, Math.max(0, b + (b * percent) / 100));

    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}
