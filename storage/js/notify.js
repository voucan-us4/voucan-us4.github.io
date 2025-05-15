const Notify = true;

function createNotification(message) {
    if (!Notify) return;

    const savedMessage = localStorage.getItem('readMessage');
    if (savedMessage === message) return;

    localStorage.setItem('readMessage', message);

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0, 0, 0, 0.5)';
    overlay.style.backdropFilter = 'blur(5px)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '2000';

    const notification = document.createElement('div');
    notification.style.background = '#1d1d1d';
    notification.style.color = 'white';
    notification.style.padding = '30px 40px';
    notification.style.borderRadius = '20px';
    notification.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.2)';
    notification.style.fontFamily = "'Comfortaa', sans-serif";
    notification.style.fontSize = '16px';
    notification.style.textAlign = 'center';
    notification.style.maxWidth = '400px';
    notification.style.width = '90%';
    notification.style.position = 'relative';

    const header = document.createElement('h2');
    header.textContent = 'Updates';
    header.style.marginBottom = '15px';
    header.style.fontSize = '22px';
    header.style.letterSpacing = '1px';
    header.style.color = 'white';
    header.style.textShadow = '0 0 5px rgba(255,255,255,0.2)';
    notification.appendChild(header);

    const messageSpan = document.createElement('div');
    messageSpan.textContent = message;
    messageSpan.style.marginBottom = '20px';
    notification.appendChild(messageSpan);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.padding = '10px 20px';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '70px';
    closeButton.style.background = 'rgba(255, 255, 255, 0.2)';
    closeButton.style.color = 'white';
    closeButton.style.cursor = 'pointer';
    closeButton.style.transition = 'background-color 0.3s';

    closeButton.addEventListener('mouseenter', () => {
        closeButton.style.background = 'rgba(255, 255, 255, 0.4)';
    });
    closeButton.addEventListener('mouseleave', () => {
        closeButton.style.background = 'rgba(255, 255, 255, 0.2)';
    });

    closeButton.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });

    notification.appendChild(closeButton);
    overlay.appendChild(notification);
    document.body.appendChild(overlay);
}

window.onload = () => {
    createNotification('Tabs and Navbar now update to your set background color');
};
