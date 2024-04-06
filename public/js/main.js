$(document).ready(function() {
    let $button = $.backToTop({
        color: '#00afe4',
        effect: 'fade',
        position: 'bottom right',
        scrollAnimation: 500,
        theme: 'default',
        width: 35,
    });
    $button.resize(50, 50);
});