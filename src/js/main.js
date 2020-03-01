if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then((res) => {
            console.log('Registrado o primeiro service worker', res);
        }).catch((err) => {
            console.log('Erro: ', err);
        });
        // navigator.serviceWorker.getRegistrations().then(function(registrations) { for(let registration of registrations) { registration.unregister() } })

    });
}