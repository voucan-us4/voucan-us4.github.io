window.addEventListener('load', function () {
    const applyBackgroundColor = () => {
        const color = localStorage.getItem('backgroundColor') || '#0d0d0d';
        if (document.body.style.backgroundColor !== color) {
            document.body.style.backgroundColor = color;
        }
    };

    applyBackgroundColor();

    setInterval(applyBackgroundColor, 250);
});
