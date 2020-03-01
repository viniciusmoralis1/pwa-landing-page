if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then((res) => {
            console.log('Service Worker Registered', res);
        }).catch((err) => {
            console.log('Error: ', err);
        });
        navigator.serviceWorker.ready.then((registration) => {
            console.log("Service Worker is ready");
        });
    });
}