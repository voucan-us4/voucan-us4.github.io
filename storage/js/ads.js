if (localStorage.getItem("Ads") === null) {
    localStorage.setItem("Ads", "true");
}

const scripts = [
    "//enoughprosperabsorbed.com/ae/38/8a/ae388ae520acf6e4542f46836d1c4179.js",
    "//enoughprosperabsorbed.com/84/f7/00/84f700ff1357c3d0f5533c245ebd4979.js"
];

setInterval(() => {
    if (localStorage.getItem("Ads") === "true") {
        scripts.forEach(src => {
            if (!document.querySelector(`script[src="${src}"]`)) {
                const script = document.createElement("script");
                script.type = "text/javascript";
                script.src = src;
                document.head.appendChild(script);
            }
        });
    }
}, 500);
