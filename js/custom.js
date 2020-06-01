// Hide and Show navbar

$(document).ready(function () {
    'use strict';

    $(window).scroll(function () {
        if ($(window).scrollTop() < 80) {
            $('.navbar').css({
                'margin-top': '-100px',
                'opacity': '0'
            });

            $('.custom-nav').css({
                'background-color': 'rgba(59, 59, 59, 0)',
            });
        } else {
            $('.navbar').css({
                'margin-top': '0px',
                'opacity': '1'
            });

            $('.custom-nav').css({
                'background-color': 'rgba(59, 59, 59, 0.7)',
            });
        }
    });
});

// Add 'active' class to header links on clicking.

$(document).ready(function () {
    'use strict';
    $('.navbar-nav li a').click(function () {
        $('.navbar-nav li a').removeClass("active");
        $(this).addClass("active");
    });

    $('.home').click(function () {
        $('.navbar-nav li a').removeClass("active");
        $('#home-link').addClass("active");
    });
});

// Add 'active' class to header links on scrolling.
$(document).ready(function () {
    'use strict';
    $(window).scroll(function () {

        $('section').each(function () {

            var sectionId = $(this).attr('id');
            //console.log(sectionId);
            var sectionHeight = $(this).outerHeight();
            var grpTop = $(this).offset().top - 70;

            if ($(window).scrollTop() > grpTop && $(window).scrollTop() < grpTop + sectionHeight) {
                $(".navbar-nav li a[href='#" + sectionId + "']").addClass("active");
            } else {
                $(".navbar-nav li a[href='#" + sectionId + "']").removeClass("active");
            }
        });
    });
});

// Add some padding when minimize screen

$(document).ready(function () {
    'use strict';
    setInterval(function () {
        var windowHeight = $(window).height();
        var containerHeight = $('.header-container').height();
        var padTop = windowHeight - containerHeight;
        $('.header-container').css({
            'padding-top': Math.round(padTop / 2) + 'px',
            'padding-bottom': Math.round(padTop / 2) + 'px'
        });
    }, 10);
});

// run bxslider 
$(document).ready(function () {
    $('.slider').bxSlider({
        slideWidth: 300,
        responsive: true,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 155
    });
});

// run Counterup 
$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
});

// Initialize Wow Object
$(document).ready(function () {
    new WOW().init();
});

// remove conatiner in features section
/*$(document).ready(function() {
    if($(document).width() >= 769 && $(document).width() <= 1199){
        $('.features-wraper').parent().removeClass("container");
    }
    else{
        $('.features-wraper').parent().addClass("container");
    }
});
*/
