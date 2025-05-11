let clickCount = localStorage.getItem(window.location.hostname + "_clickedAds") || 0;
clickCount = parseInt(clickCount);

if (clickCount < 10) {
  window.addEventListener('load', function () {
    const adElement = Array.from(document.querySelectorAll('*'))
      .find(element => element.id && element.id.includes('container-9bd6dd1837226b9fe69dcbb4f296d85a'));

    if (adElement) {
      adElement.addEventListener('click', function () {
        clickCount++;
        localStorage.setItem(window.location.hostname + "_clickedAds", clickCount);

        if (clickCount >= 10) {
          adElement.style.display = 'none';

          const scriptElements = document.querySelectorAll('script[src="//pl26618098.profitableratecpm.com/9b/d6/dd/9bd6dd1837226b9fe69dcbb4f296d85a.js"]');
          scriptElements.forEach(script => script.remove());

          console.log('10th click');
        }
      });
    }

    const existingScript = document.querySelector('script[src="//pl26618098.profitableratecpm.com/9b/d6/dd/9bd6dd1837226b9fe69dcbb4f296d85a.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = '//pl26618098.profitableratecpm.com/9b/d6/dd/9bd6dd1837226b9fe69dcbb4f296d85a.js';
      document.body.appendChild(script);
    }
  });
} else {
  console.log('10th click');
}
