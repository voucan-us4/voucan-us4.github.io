  let clickCount = localStorage.getItem(window.location.hostname + "_clickedAds") || 0;
  
  clickCount = parseInt(clickCount);

  if (clickCount < 10) {
    const adIframe = document.getElementById('container-9bd6dd1837226b9fe69dcbb4f296d85a');

    if (adIframe) {
      adIframe.addEventListener('click', function() {
        clickCount++;
        
        localStorage.setItem(window.location.hostname + "_clickedAds", clickCount);
        
        if (clickCount >= 10) {
          adIframe.style.display = 'none';
          
          const scriptElements = document.querySelectorAll('script[src="//pl26618098.profitableratecpm.com/9b/d6/dd/9bd6dd1837226b9fe69dcbb4f296d85a.js"]');
          scriptElements.forEach(script => script.remove());

          console.log('10th click');
        }
      });
    }

    const script = document.createElement('script');
    script.src = '//pl26618098.profitableratecpm.com/9b/d6/dd/9bd6dd1837226b9fe69dcbb4f296d85a.js';
    document.body.appendChild(script);
  } else {
    console.log('10th click');
  }
