$(document).ready(function() {
    $('.runaway').on('mouseenter', function(e) {
        var $button = $(this);
        var buttonWidth = $button.outerWidth();
        var buttonHeight = $button.outerHeight();
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        // Get the current position of the button
        var currentLeft = $button.offset().left;
        var currentTop = $button.offset().top;

        var newLeft, newTop;
        do {
            newLeft = Math.random() * (windowWidth - buttonWidth);
            newTop = Math.random() * (windowHeight - buttonHeight);
        } while (
            Math.abs(newLeft - currentLeft) < 100 && 
            Math.abs(newTop - currentTop) < 100
        );

        newLeft = Math.max(0, Math.min(newLeft, windowWidth - buttonWidth));
        newTop = Math.max(0, Math.min(newTop, windowHeight - buttonHeight));

        $button.css({
            position: 'fixed',
            left: currentLeft,
            top: currentTop,
            zIndex: 1000
        }).animate({
            left: newLeft,
            top: newTop
        }, {
            duration: 300,
            easing: 'easeOutQuad'
        });
    });

    // Add custom easing
    jQuery.easing.easeOutQuad = function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    };
});
