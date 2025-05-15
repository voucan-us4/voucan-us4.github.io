setInterval(function() {
        var iframe = document.querySelector('.tab-iframe.active');
        if (iframe && iframe.contentWindow) {
            var iframeDoc = iframe.contentWindow.document;
            if (!iframeDoc.querySelector('script[src="/storage/js/injected-panic.js"]')) {
                var script = iframeDoc.createElement('script');
                script.type = 'text/javascript';
                script.src = '/storage/js/injected-panic.js';
                iframeDoc.head.appendChild(script);
        }
    }
}, 500);
