$(function() {

    let header = $('#header');


    let introH = header.innerHeight();

    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function() {
        introH = header.innerHeight();
        scrollPos = $(this).scrollTop()

        if(scrollPos > introH) {
            header.addClass('fixed');
        }

        else {
            header.removeClass('fixed');
        }
    });

    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let Id = $(this).data('scroll');
        let off = $(Id).offset().top;

        $('html, body').animate({
            scrollTop: off - 300
        }, 700);
    });
    

});




