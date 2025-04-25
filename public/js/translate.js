translate();
const target = document.querySelector('title');
let observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (document.title !== 'Translation Tool · EmulatorJS' && window.location.pathname === '/translate') {
            document.title = 'Translation Tool · EmulatorJS';
        }
    });
});
observer.observe(target, config = { childList: true, });
