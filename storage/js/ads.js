if (localStorage.getItem("Ads") === null) {
    localStorage.setItem("Ads", "true");
}

setInterval(function() {
    if (localStorage.getItem('Ads') === 'true') {
        var iframe = document.querySelector('.tab-iframe.active');
        if (iframe && iframe.contentWindow) {
            var iframeDoc = iframe.contentWindow.document;
            if (!iframeDoc.querySelector('script[src="//pl26618098.profitableratecpm.com/9b/d6/dd/9bd6dd1837226b9fe69dcbb4f296d85a.js"]')) {
                var script = iframeDoc.createElement('script');
                script.type = 'text/javascript';
                script.src = '//pl26618098.profitableratecpm.com/9b/d6/dd/9bd6dd1837226b9fe69dcbb4f296d85a.js';
                iframeDoc.head.appendChild(script);
            }
        }
    }
}, 500);
