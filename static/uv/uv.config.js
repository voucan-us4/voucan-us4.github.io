self.__uv$config = {
    prefix: '/static/load/',
    bare:'https://nauka.politechnika-nova.edu.pl/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
//inject
(function() {
    const inject = async () => {
        const scriptElement = document.createElement('script');
        scriptElement.textContent = `console.log("Injection Test")`;
        document.head.appendChild(scriptElement);
    };

    inject();
})();
