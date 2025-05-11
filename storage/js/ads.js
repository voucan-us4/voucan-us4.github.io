if (localStorage.getItem("Ads") === null) {
    localStorage.setItem("Ads", "true");
}

setInterval(function() {
    if (localStorage.getItem('Ads') === 'true') {
        if (!document.querySelector('script[src="//pl26618098.profitableratecpm.com/9b/d6/dd/9bd6dd1837226b9fe69dcbb4f296d85a.js"]')) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '//pl26618098.profitableratecpm.com/9b/d6/dd/9bd6dd1837226b9fe69dcbb4f296d85a.js';
            document.head.appendChild(script);
        }
    }
}, 500);
