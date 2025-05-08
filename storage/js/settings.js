const beforeUnloadEnabled = localStorage.getItem('beforeUnloadEnabled') === 'true';
if (beforeUnloadEnabled) {
    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
    });
}

const savedTitle = localStorage.getItem('siteTitle');
if (savedTitle) {
    document.title = savedTitle;
}

const savedLogo = localStorage.getItem('siteLogo');
if (savedLogo) {
    const logoElement = document.querySelector('link[rel="icon"]'); 
    if (logoElement) {
        logoElement.href = savedLogo;
    }
}

const panicKey = localStorage.getItem('panicKey');
const panicUrl = localStorage.getItem('panicUrl');
if (panicKey && panicUrl) {
    window.addEventListener('keydown', function (event) {
        if (event.key === panicKey) {
            top.location.href = panicUrl;
        }
    });
}

let inFrame;

try {
  inFrame = window !== top;
} catch (e) {
  inFrame = true;
}

if (
  !inFrame &&
  !navigator.userAgent.includes("Firefox") &&
  localStorage.getItem("autocloakEnabled") === "true"
) {
  const popup = open("about:blank", "_blank");
  if (!popup || popup.closed) {
    alert(
      "Please enable popups for auto-about:blank to work correctly. Keep in mind some games may not work correctly in about:blank."
    );
  } else {
    const siteTitle = localStorage.getItem('siteTitle') || "Home";
    const siteLogo = localStorage.getItem('siteLogo') || "/storage/images/googleclassroom.png";

    popup.document.title = siteTitle;

    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = siteLogo;
    popup.document.head.appendChild(favicon);

    const iframe = document.createElement('iframe');
    iframe.src = '#';
    iframe.style.width = '100vw';
    iframe.style.height = '100vh';
    iframe.style.border = 'none';
    popup.document.body.style.margin = '0';
    popup.document.body.appendChild(iframe);

    const panicUrl = localStorage.getItem('panicUrl') || "https://classroom.google.com";
    window.location.href = panicUrl;
  }
}
