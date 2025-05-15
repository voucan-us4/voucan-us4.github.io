const panicKey = localStorage.getItem('panicKey');
const panicUrl = localStorage.getItem('panicUrl');
if (panicKey && panicUrl) {
    window.addEventListener('keydown', function (event) {
        if (event.key === panicKey) {
            top.location.href = panicUrl;
        }
    });
}
