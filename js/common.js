$(document).ready(function() {
    var $menu = $('.nav_snb li'),
        $contents = $('.scroll'),
        $doc = $('html, body');

    $menu.on('click', 'a', function(e) {
        e.preventDefault();

        var $target = $(this).parent(),
            idx = $target.index(),
            section = $contents.eq(idx),
            offsetTop = section.offset().top;
            
        $doc.stop().animate({
            scrollTop :offsetTop
        }, 100);
        return false;
    });

    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop() + ($(window).height() / 4);

        $.each($contents, function(idx) {
            var $section = $(this),
                sectionTop = $section.offset().top,
                sectionBottom = sectionTop + $section.outerHeight();

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }
        });
    });
});

