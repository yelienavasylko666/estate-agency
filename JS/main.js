$('#slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    numbers: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 568,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

const numbers = $('.item-number');
const numberTop = numbers.position().top;
let numbersAnimated = false;

$(window).scroll(function () {
    if ((($(window).scrollTop() + $(window).height()) > numberTop) && !numbersAnimated) {
        numbersAnimated = true;
        numbers.each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
    ;
})




