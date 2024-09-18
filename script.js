$(document).ready(function () {

    $('.ans01').hide(0);
    $('.ans03').hide(0);
    $('.ans04').hide(0);
    $('.ans05').hide(0);


    // if ($(window).width() < 768) {

    //     $('.header').fadeOut(0);

    //     $('.home02 .section').animate({ opacity: 0 }, 0);
    //     $('.home03').animate({ opacity: 0 }, 0);
    //     $('.home05').animate({ opacity: 0 }, 0);
    //     $('.home06').animate({ opacity: 0 }, 0);
    //     $('.home07').animate({ opacity: 0 }, 0);
    //     $('.home08').animate({ opacity: 0 }, 0);

    //     $('.flow01').css({ display: 'none' });
    //     $('.flow02').css({ display: 'none' });
    //     $('.flow03').css({ display: 'none' });
    //     $('.flow04').css({ display: 'none' });
    //     $('.flow05').css({ display: 'none' });

    //     $('.flow01').css({ position: 'relative' });
    //     $('.flow01').animate({ right: '+=1000px' }, 0);

    //     $('.flow02').css({ position: 'relative' });
    //     $('.flow02').animate({ bottom: '-=1000px' }, 0);

    //     $('.flow03').css({ position: 'relative' });
    //     $('.flow03').animate({ left: '+=1000px' }, 0);

    //     $('.flow04').css({ position: 'relative' });
    //     $('.flow04').animate({ bottom: '-=1000px' }, 0);

    //     $('.flow05').css({ position: 'relative' });
    //     $('.flow05').animate({ right: '+=1000px' }, 0);

    //     $(window).on('load resize scroll', function () {

    //         if ($(window).scrollTop() < 50) {
    //             $('header').fadeOut(700);

    //             $('.landingLeft').removeClass('originLeft');
    //             $('.landingRight').removeClass('originRight');
    //         }

    //         if ($(window).scrollTop() >= 50) {
    //             $('header').fadeIn(1000);

    //             $('.landingLeft').addClass('originLeft');
    //             $('.landingRight').addClass('originRight');

    //             $('.home02 .section').animate({ opacity: 1 }, 2000);

    //         }

    //         if ($(window).scrollTop() >= 100) {
    //             $('.home03').animate({ opacity: 1 }, 2000);

    //             $('.flow01').css({ display: 'block' });
    //             $('.flow02').css({ display: 'block' });
    //             $('.flow03').css({ display: 'block' });
    //             $('.flow04').css({ display: 'block' });
    //             $('.flow05').css({ display: 'block' });
    //         }

    //         if ($(window).scrollTop() >= 1200) {
    //             $('.flow01').animate({ right: '0' }, 3000);
    //         }

    //         if ($(window).scrollTop() >= 1600) {
    //             $('.flow02').animate({ bottom: '0' }, 3000);
    //         }

    //         if ($(window).scrollTop() >= 2100) {
    //             $('.flow03').animate({ left: '0' }, 3000);
    //         }

    //         if ($(window).scrollTop() >= 2500) {
    //             $('.flow04').animate({ bottom: '0' }, 3000);
    //         }

    //         if ($(window).scrollTop() >= 3200) {
    //             $('.flow05').animate({ right: '0' }, 3000);
    //         }

    //         if ($(window).scrollTop() >= 4500) {
    //             $('.home05').animate({ opacity: 1 }, 2000);
    //         }

    //         if ($(window).scrollTop() >= 5000) {
    //             $('.home07').animate({ opacity: 1 }, 2000);
    //         }

    //         if ($(window).scrollTop() >= 5600) {
    //             $('.home06').animate({ opacity: 1 }, 2000);
    //         }

    //         if ($(window).scrollTop() >= 6200) {
    //             $('.home08').animate({ opacity: 1 }, 2000);
    //         }


    //     });
    // }


    if ($(window).width() >= 768) {

        $('header').fadeOut(0);

        $('.home02 .section').animate({ opacity: 0 }, 0);
        $('.home03').animate({ opacity: 0 }, 0);
        $('.home05').animate({ opacity: 0 }, 0);
        $('.home06').animate({ opacity: 0 }, 0);
        $('.home07').animate({ opacity: 0 }, 0);
        $('.contact').animate({ opacity: 0 }, 0);

        $('.flow01').css({ display: 'none' });
        $('.flow02').css({ display: 'none' });
        $('.flow03').css({ display: 'none' });
        $('.flow04').css({ display: 'none' });
        $('.flow05').css({ display: 'none' });

        $('.flow01').css({ position: 'relative' });
        $('.flow01').animate({ right: '+=1000px' }, 0);

        $('.flow02').css({ position: 'relative' });
        $('.flow02').animate({ bottom: '-=1000px' }, 0);

        $('.flow03').css({ position: 'relative' });
        $('.flow03').animate({ left: '+=1000px' }, 0);

        $('.flow04').css({ position: 'relative' });
        $('.flow04').animate({ bottom: '-=1000px' }, 0);

        $('.flow05').css({ position: 'relative' });
        $('.flow05').animate({ right: '+=1000px' }, 0);

        $(window).on('load resize scroll', function () {

            if ($(window).scrollTop() < 150) {
                $('header').fadeOut(700);

                $('.landingLeft').removeClass('originLeft');
                $('.landingRight').removeClass('originRight');
            }

            if ($(window).scrollTop() >= 150) {
                $('header').fadeIn(1000);

                $('.landingLeft').addClass('originLeft');
                $('.landingRight').addClass('originRight');

                $('.home02 .section').animate({ opacity: 1 }, 2000);

            }

            if ($(window).scrollTop() >= 650) {
                $('.home03').animate({ opacity: 1 }, 2000);

                $('.flow01').css({ display: 'block' });
                $('.flow02').css({ display: 'block' });
                $('.flow03').css({ display: 'block' });
                $('.flow04').css({ display: 'block' });
                $('.flow05').css({ display: 'block' });
            }

            if ($(window).scrollTop() >= 1200) {
                $('.flow01').animate({ right: '0' }, 3000);
            }

            if ($(window).scrollTop() >= 1600) {
                $('.flow02').animate({ bottom: '0' }, 3000);
            }

            if ($(window).scrollTop() >= 2100) {
                $('.flow03').animate({ left: '0' }, 3000);
            }

            if ($(window).scrollTop() >= 2500) {
                $('.flow04').animate({ bottom: '0' }, 3000);
            }

            if ($(window).scrollTop() >= 3200) {
                $('.flow05').animate({ right: '0' }, 3000);
            }

            if ($(window).scrollTop() >= 4500) {
                $('.home05').animate({ opacity: 1 }, 2000);
            }

            if ($(window).scrollTop() >= 5000) {
                $('.home07').animate({ opacity: 1 }, 2000);
            }

            if ($(window).scrollTop() >= 5600) {
                $('.home06').animate({ opacity: 1 }, 2000);
            }

            if ($(window).scrollTop() >= 6200) {
                $('.contact').animate({ opacity: 1 }, 2000);
            }


        });
    }




    $(".q01").click(function () {
        $('.ans01').hide(1000);
        $('.ans03').hide(1000);
        $('.ans04').hide(1000);
        $('.ans05').hide(1000);
        $('.ans02').show(1000);

        $(".q01").addClass("activeQ")
        $(".q02").removeClass("activeQ")
        $(".q03").removeClass("activeQ")
        $(".q04").removeClass("activeQ")
        $(".q05").removeClass("activeQ")

        $(".q01Title").css("color", "var(--primaryColor)")
        $(".q02Title").css("color", "var(--accentColor)")
        $(".q03Title").css("color", "var(--accentColor)")
        $(".q04Title").css("color", "var(--accentColor)")
        $(".q05Title").css("color", "var(--accentColor)")
    });

    $(".q02").click(function () {
        $('.ans02').hide(1000);
        $('.ans01').hide(1000);
        $('.ans04').hide(1000);
        $('.ans05').hide(1000);
        $('.ans03').show(1000);

        $(".q01").removeClass("activeQ")
        $(".q02").addClass("activeQ")
        $(".q03").removeClass("activeQ")
        $(".q04").removeClass("activeQ")
        $(".q05").removeClass("activeQ")

        $(".q01Title").css("color", "var(--accentColor)")
        $(".q02Title").css("color", "var(--primaryColor)")
        $(".q03Title").css("color", "var(--accentColor)")
        $(".q04Title").css("color", "var(--accentColor)")
        $(".q05Title").css("color", "var(--accentColor)")
    });

    $(".q03").click(function () {
        $('.ans02').hide(1000);
        $('.ans03').hide(1000);
        $('.ans04').hide(1000);
        $('.ans05').hide(1000);
        $('.ans01').show(1000);

        $(".q01").removeClass("activeQ")
        $(".q02").removeClass("activeQ")
        $(".q03").addClass("activeQ")
        $(".q04").removeClass("activeQ")
        $(".q05").removeClass("activeQ")

        $(".q01Title").css("color", "var(--accentColor)")
        $(".q02Title").css("color", "var(--accentColor)")
        $(".q03Title").css("color", "var(--primaryColor)")
        $(".q04Title").css("color", "var(--accentColor)")
        $(".q05Title").css("color", "var(--accentColor)")
    });

    $(".q04").click(function () {
        $('.ans02').hide(1000);
        $('.ans03').hide(1000);
        $('.ans01').hide(1000);
        $('.ans05').hide(1000);
        $('.ans04').show(1000);

        $(".q01").removeClass("activeQ")
        $(".q02").removeClass("activeQ")
        $(".q03").removeClass("activeQ")
        $(".q04").addClass("activeQ")
        $(".q05").removeClass("activeQ")

        $(".q01Title").css("color", "var(--accentColor)")
        $(".q02Title").css("color", "var(--accentColor)")
        $(".q03Title").css("color", "var(--accentColor)")
        $(".q04Title").css("color", "var(--primaryColor)")
        $(".q05Title").css("color", "var(--accentColor)")
    });

    $(".q05").click(function () {
        $('.ans02').hide(1000);
        $('.ans03').hide(1000);
        $('.ans04').hide(1000);
        $('.ans01').hide(1000);
        $('.ans05').show(1000);

        $(".q01").removeClass("activeQ")
        $(".q02").removeClass("activeQ")
        $(".q03").removeClass("activeQ")
        $(".q04").removeClass("activeQ")
        $(".q05").addClass("activeQ")

        $(".q01Title").css("color", "var(--accentColor)")
        $(".q02Title").css("color", "var(--accentColor)")
        $(".q03Title").css("color", "var(--accentColor)")
        $(".q04Title").css("color", "var(--accentColor)")
        $(".q05Title").css("color", "var(--primaryColor)")
    });


    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});