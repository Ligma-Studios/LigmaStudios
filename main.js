$(document).ready(function() {
    $('.runaway').on('mouseenter', function(e) {
        var $button = $(this);
        var buttonWidth = $button.outerWidth();
        var buttonHeight = $button.outerHeight();
        var navbarWidth = $('nav').width();
        var navbarHeight = $('nav').height();

        // Get the current position of the button
        var currentLeft = $button.offset().left - $button.parent().offset().left;
        var currentTop = $button.offset().top - $button.parent().offset().top;

        // Calculate new position
        var newLeft, newTop;
        do {
            newLeft = Math.random() * (navbarWidth - buttonWidth);
            newTop = Math.random() * (navbarHeight - buttonHeight);
        } while (Math.abs(newLeft - currentLeft) < 50 && Math.abs(newTop - currentTop) < 50);

        // Ensure the new position is within the navbar
        newLeft = Math.max(25, Math.min(newLeft, navbarWidth - buttonWidth));
        newTop = Math.max(25, Math.min(newTop, navbarHeight - buttonHeight));

        // Apply the new position
        $button.css({
            position: 'absolute',
            left: currentLeft + 'px',
            top: currentTop + 'px'
        });

        // Trigger reflow
        $button[0].offsetHeight;

        // Animate to new position
        $button.css({
            left: newLeft + 'px',
            top: newTop + 'px',
            transition: 'all 0.3s ease-out'
        });
    });
});
