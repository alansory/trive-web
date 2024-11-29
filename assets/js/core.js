var selectric = function () {
    $(function () {
        var select = $('select');
        if (select) {
            select.selectric();
        }
    });
}

//Swiper
var swiper = new Swiper('.mySwiper', {
    pagination: {
        el: '.mySwiper .swiper-pagination',
        clickable: true,
    },
    preventClicks: false,
    preventClicksPropagation: false,
    navigation: {
        nextEl: '.mySwiper .swiper-button-next',
        prevEl: '.mySwiper .swiper-button-prev'
    },
    allowTouchMove: true,
    slidesPerView: 'auto',
    /*spaceBetween: 30,*/
    setWrapperSize: true,

    /*breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 0,
            allowTouchMove: true
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 0,
            allowTouchMove: true
        },
        575: {
          slidesPerView: 1,
          spaceBetween: 0,
          allowTouchMove: true
        }
      }*/
});

//Swiper
var swiper = new Swiper('.mySwiper-3-item', {
    pagination: {
        el: '.mySwiper-3-item .swiper-pagination',
        clickable: false,
    },
    preventClicks: false,
    preventClicksPropagation: false,
    navigation: {
        nextEl: '.mySwiper-3-item .swiper-button-next',
        prevEl: '.mySwiper-3-item .swiper-button-prev'
    },
    allowTouchMove: false,
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerView: 3,
    setWrapperSize: true,

    breakpoints: {
        1231: {
            // slidesPerView: 3,
            slidesPerView: 2,
            spaceBetween: 0,
            allowTouchMove: false
        },
        991: {
            // slidesPerView: 1,
            slidesPerView: 2,
            spaceBetween: 0,
            allowTouchMove: true
        },
        767: {
            // slidesPerView: 1,
            slidesPerView: 1,
            spaceBetween: 0,
            allowTouchMove: true
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 0,
            allowTouchMove: true
        }
    }
});

//Swiper
var swiper = new Swiper('.mySwiper-5-item', {
    pagination: {
        el: '.mySwiper-5-item .swiper-pagination',
        clickable: true,

    },
    preventClicks: false,
    preventClicksPropagation: false,
    navigation: {
        nextEl: '.mySwiper-5-item .swiper-button-next',
        prevEl: '.mySwiper-5-item .swiper-button-prev'
    },

    allowTouchMove: false,
    slidesPerView: 5,
    spaceBetween: 0,
    setWrapperSize: true,

    breakpoints: {
        /*1230: {
            slidesPerView: 5,
            spaceBetween: 0,
            allowTouchMove: true
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 0,
            allowTouchMove: true
        },*/
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
            allowTouchMove: true

        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
            allowTouchMove: true
        }
    }
});

//Swiper
var swiper = new Swiper('.mySwiper2', {
    pagination: {
        el: '.mySwiper2 .swiper-pagination',
        clickable: true,

    },
    preventClicks: false,
    preventClicksPropagation: false,
    navigation: {
        nextEl: '.mySwiper2 .swiper-button-next',
        prevEl: '.mySwiper2 .swiper-button-prev'
    },
    allowTouchMove: false,
    slidesPerView: 6,
    spaceBetween: 0,
    setWrapperSize: true,

    breakpoints: {
        /*1230: {
            slidesPerView: 6,
            spaceBetween: -60,
            // spaceBetween: 0,
            allowTouchMove: true
        },
        992: {
            slidesPerView: 6,
            spaceBetween: -60,
            allowTouchMove: true
        },*/
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
            allowTouchMove: true
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
            allowTouchMove: true
        }
    }
});

//DropdownMenu & Mobile Menu
var navMenu = function () {
    $('.menu-area .left ul:not(.lang-login-account) li').hover(
        function () {
            var elm = $(this);
            elm.children(":not(.search-top, .icon-search)").show();
        },
        function () {
            $('.menu-area .left ul li .dropdown').hide();
        }
    );
    $('.menu-area .right .lang-login-account .dd').hover(function () {
        console.log('AKTÄ°F!');
        if ($(this).hasClass('account')) {
            $(this).children('.rightmenu-dropdown').children('ul').css('background', '#5db007');
        }
        $(this).toggleClass('change');
        $(this).parent().children('li').toggleClass('border-bottom-zero');
        $(this).children('.rightmenu-dropdown').toggleClass('active');
        console.log($(this.target));
    })
};


//Datepicker
var datePickerAnalysis = function () {
    $('#dob').datetimepicker({
        format: 'DD/MM/YYYY',
        icons: {
            previous: 'fas fa-chevron-left',
            next: 'fas fa-chevron-right',
        },
    });
    $('.input-group-append').click(function () {
        $('.form-control').trigger('focus');
    });
};

// Go To Up
var goUp = function () {
    if (this.scrollY > 1000) {
        $('.go-up').addClass('show');
    } else {
        $('.go-up').removeClass('show');
    }
};

goUp();

window.addEventListener('scroll', function () {
    goUp();
});

$('.go-up').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
});

// SimpleBar

/*var simpleBar = function() {
  var windowWidth = $(window).width();
    (function () {
      new SimpleBar(document.getElementById('homeAccountTypes'), {
        autoHide: false,
        forceVisible: true,
      });
    })();
}*/

var simpleBarAccountTypes = function () {
    var windowWidth = $(window).width();
    if (windowWidth < 991) {
        (function () {
            new SimpleBar(document.getElementById('customScrollbar'), {
                autoHide: false,
                forceVisible: true,
            });
        })();
    }
}

$(document).ready(function () {
    if (typeof SimpleBar != 'undefined') {
        simpleBar();
        simpleBarAccountTypes();
        $(window).resize(function () {
            simpleBar();
            simpleBarAccountTypes();
        });
    }
});
//$(document).ready(function () {
//    simpleBar();
//    simpleBarAccountTypes();
//    $(window).resize(function () {
//        simpleBar();
//        simpleBarAccountTypes();
//    });
//});

var mainmenu = function () {
    $("<span class='hover'></span>").insertBefore('.menuPos .menu');
    //close
    closedmenu = function () {
        $(".menuPos").removeClass('border-b');
        console.log('closed menu');
        /*    $(".menuPos .menu li").removeClass('active');*/
        /*    $(".menuPos .menu li").children('.dropmenu-wrapper').hide();*/
        $(".menuPos").children('.hover').css({
            width: 0,
        });
    }


    //right menu
    var dropDown = $('.header-right >ul >li.dropdown a');
    $(dropDown).click(function (e) {
        $(this).parent().children('.dropdown').toggleClass('active');
        $(this).toggleClass('active');
        if ($(this).parent().hasClass('dd') && ($(this).parent().children('.dropdown').hasClass('active'))) {
            $('.dd').find('.dropdown').removeClass('active');
            $(this).parent().children('.dropdown').addClass('active');
            $('.dd').not($(this).parent()).find('a').removeClass('active');
        }
    });
    /*  $(".rightmenu .dMenu .menuPos .menu li").children('.dropmenu-wrapper').height(0);
      $('.dropmenu-wrapper-inside').on('click', function(){
        $('.dropdownmenu-inside').slideUp();
      });
  
      $(".rightmenu .dMenu .menuPos .menu  li").on("click touchstart", function(e){
        //$(this).find('a').first().attr('href') ==
    /!*
        console.log(e.target);
        if(!$(e.target).hasClass('dropdown-trigger')){
          return false;
        }*!/
  
        if( $(this).children(".dropmenu-wrapper").height() == 0 ){
          $(".rightmenu .dMenu .menuPos .menu li").children('.dropmenu-wrapper').height(0);
          $(".rightmenu .dMenu .menuPos .menu li").removeClass('active');
    /!*      var hg = '';
          hg +=  $(this).children().children('.dropdownmenu').outerHeight();*!/
          var hg = $(this).children().children('.dropdownmenu').outerHeight();
  
          $(this).children(".dropmenu-wrapper").height(hg);
  
          $(this).toggleClass('active');
    /!*      var hg2 = Number(Number(hg) + ($(this).parent().parent().parent('.dropdownmenu').outerHeight()));
          $(this).parent().parent().parent().parent(".dropmenu-wrapper").height(hg2);
          console.log(hg2, 'hg2');*!/
          return false;
        }
        else{
          return true;
          $(".rightmenu .dMenu .menuPos .menu li").children('.dropmenu-wrapper').height(0);
          $(".rightmenu .dMenu .menuPos .menu li").removeClass('active');
        }
      });*/

    //CloseMenu
    $(".dropmenu-wrapper").on("mouseout", function () {
        if (!$('header:hover').length != 0) {
            closedmenu();
        }
    });
    //Close RightMenu
    document.addEventListener("click", function (e) {
        if (e.target && e.target.nodeName == "A") {
            if (!$(".rightmenu .dMenu .menuPos .menu li .dropmenu-wrapper:hover").length != 0) {
                $(".rightmenu .dMenu .menuPos .menu li").children('.dropmenu-wrapper').height(0);
                $(".rightmenu .dMenu .menuPos .menu li").removeClass('active');
            }
        }
        else {
            return false;
        }
    });

}
var mobilemenubtn = function () {
    $("body").prepend('<span class="close-black"></span>');

    $(".menuBtn").on("click", function () {
        $("body").addClass('left-window');
        $("body").children().addClass('window-position');
        $('html').css('overflow', 'hidden');
    });

    $(".close-black").on("click touchstart", function () {
        if ($("body").hasClass('left-window')) {
            $("body").removeClass('left-window');
            $('html').css('overflow', 'auto');
            $('.header-right .dd .dropdown').removeClass('active');
            $('.header-right .dd a').removeClass('active');
        }
        if ($("body").children().hasClass('window-position')) {
            $("body").children().removeClass('window-position');
        }
        if ($("body").hasClass('right-window')) {
            $("body").removeClass('right-window');
        }
    });
    $(".searchBtn").on("keyup", function () {
        var i;
        if ($(this).val().length >= 1) {
            $(".icon-search").css("display", 'none')
        }
        if ($(this).val().length === 0) {
            $(".icon-search").css("display", 'block')
        }
    });
}

var selectCountry = function () {
    $('.selectCountry').selectric({
        maxHeight: 122
    });
    $(".selectCountry").change(function () {
        $(this).parents(".selectric-selectCountry").children('.selectric').children('.label').addClass('selected');
    });

    $('.select-country .selectric .label').click(function () {
        $(".form-block input").each(function (index, value) {
            var elementVal = $(value).val().length;
            if (elementVal <= 0) {
                $(this).parent(".form-block").removeClass('focused');
            }
        });
    });
}
var cardSwiper = new Swiper('.box-card-slider-news', {
    navigation: {
        nextEl: '.box-card-slider-new .swiper-button-next',
        prevEl: '.box-card-slider-new .swiper-button-prev',
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,
    watchOverflow: true,
    pagination: {
        el: '.box-card-slider-new .swiper-pagination',
        clickable: true,
    },

});

var cardSwiper = new Swiper('.box-card-slider', {
    navigation: {
        nextEl: '.box-card-slider .swiper-button-next',
        prevEl: '.box-card-slider .swiper-button-prev',
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 50,
    watchOverflow: true,
    pagination: {
        el: '.box-card-slider .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1600: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            slidesPerGroup: 3,
            allowTouchMove: true
        },
        1280: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            slidesPerGroup: 2,
            allowTouchMove: true
        },
        991: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            slidesPerGroup: 2,
            allowTouchMove: true
        },
        767: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroup: 1,
            allowTouchMove: true
        }
    }
});


var headerInvest = function () {

    var megaMenuItemH = $('.header-menu .header-menu-middle-item').height();
    $(this).children('.header-menu .header-menu-middle-item .header-menu-middle-item-dropdown-sub').css('top', megaMenuItemH);

    $('.hamburger-menu').on('click', function () {
        $(".header").toggleClass('active');
        $('body').toggleClass('active');
        $('html').toggleClass('active');
    })

    if ($(window).innerWidth() < 1230) {

        $(document).on('click', function (e) {

            if ($(e.target).closest(".header-menu").length === 0 && $(e.target).closest(".hamburger-menu").length === 0) {
                $('.header').removeClass('active')
                $('body').removeClass('active');
                $('html').removeClass('active');
            }

            if ($(e.target).closest(".header-menu-middle-item-dropdown").length === 0) {
                $('.header-menu-middle-item-dropdown').removeClass('active');
            }
            if ($(e.target).closest(".header-menu-middle-item-dropdown").length !== 0 && $(e.target).closest(".header-menu-middle-item-dropdown-sub").length === 0) {
                $(e.target).closest(".header-menu-middle-item-dropdown").toggleClass('active')
                $('.header-menu-middle-item-dropdown').not($(e.target).closest(".header-menu-middle-item-dropdown")).removeClass('active')
            }
        });

    }

    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        var header = $('header');

        if (st > lastScrollTop) {

            if (($(this).scrollTop() > 0) && ($(this).scrollTop() <= 160)) {
                header.addClass('active');
                $('.banner-area').addClass('active');
            }
            if (($(this).scrollTop() >= 160) && ($(this).scrollTop() <= 860)) {
                header.addClass('active');
                $('.banner-area').addClass('active');
                header.removeClass('deactive');
                console.log('addActive');
            }
            if (($(this).scrollTop() > 860)) {
                header.addClass('deactive');
                header.removeClass('active');
            }
            else {
            }
        } else {
            header.addClass('active');
            if ($('header').hasClass('header-sub') && ($(this).scrollTop() == 0)) {
                header.removeClass('active');
                header.removeClass('deactive');
            }
            if (($(this).scrollTop() == 0)) {
                if ($('header').hasClass('header-sub')) {
                    /*          header.addClass('active');
                              header.addClass('deactive');*/
                }
                else {
                    header.removeClass('active');
                    header.removeClass('deactive');
                }
            }
            if (($(this).scrollTop() >= 80) && ($(this).scrollTop() <= 160)) {
                header.addClass('active');
                header.removeClass('deactive');
            }
            else {
                header.removeClass('deactive');
                $('.banner-area').removeClass('active');
            }
        }
        lastScrollTop = st;
    });
}

/*var horizontalTrigger = function() {
  gsap.registerPlugin(ScrollTrigger);

  {
    const process = document.querySelector('.process');
    if ((typeof(process) != 'undefined' && process != null)) {
      let sections = gsap.utils.toArray('.process__item');
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: process,
          markers: false,
          scrub: 1,
          pin: true,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + document.querySelector(".process").offsetWidth
        },
      });
    }
  }
}*/
// Go To Up
var goUp2 = function () {
    if (this.scrollY > 1000) {
        $('.go-up2').addClass('show');
    } else {
        $('.go-up2').removeClass('show');
    }
};

goUp2();

window.addEventListener('scroll', function () {
    goUp2();
});

$('.go-up2').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
});


///
headerInvest();
$('#modalLanguage').on('hidden.bs.modal', function (event) {
    $('html').css('overflow', 'auto');
})
$('#modalLanguage').on('shown.bs.modal', function (event) {
    $('html').css('overflow', 'hidden');
})


$('#modalLanguage').on('hidden.bs.modal', function (event) {
    $('html').css('overflow', 'auto');
})
$('#modalLanguage').on('shown.bs.modal', function (event) {
    $('html').css('overflow', 'hidden');
})
///


var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    var header = $('header');

    if (st > lastScrollTop) {
        if ($(this).scrollTop() > 0 && $(this).scrollTop() <= 160) {
            header.addClass('active');
            $('.banner-area').addClass('active');
        }
        if ($(this).scrollTop() >= 160 && $(this).scrollTop() <= 860) {
            header.addClass('active');
            $('.banner-area').addClass('active');
            header.removeClass('deactive');
        }
        if ($(this).scrollTop() > 860) {
            header.addClass('deactive');
            header.removeClass('active');
        } else {
        }
    } else {
        header.addClass('active');
        if ($('header').hasClass('header-sub') && $(this).scrollTop() == 0) {
            header.removeClass('active');
            header.removeClass('deactive');
        }
        if ($(this).scrollTop() == 0) {
            if ($('header').hasClass('header-sub')) {
                /*          header.addClass('active');
                  header.addClass('deactive');*/
            } else {
                header.removeClass('active');
                header.removeClass('deactive');
            }
        }
        if ($(this).scrollTop() >= 80 && $(this).scrollTop() <= 160) {
            header.addClass('active');
            header.removeClass('deactive');
        } else {
            header.removeClass('deactive');
            $('.banner-area').removeClass('active');
        }
    }
    lastScrollTop = st;
});

/*var horizontalTrigger = function() {
  gsap.registerPlugin(ScrollTrigger);

  {
    const process = document.querySelector('.process');
    if ((typeof(process) != 'undefined' && process != null)) {
      let sections = gsap.utils.toArray('.process__item');
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: process,
          markers: false,
          scrub: 1,
          pin: true,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + document.querySelector(".process").offsetWidth
        },
      });
    }
  }
}*/

// Auto open modal onload page
let isScrolledUp = false;
let lastScrollTopY = 0;

$(window).on('scroll', function () {
    if (!isScrolledUp) {
        const currentScrollTop = $(this).scrollTop();
        if (currentScrollTop < lastScrollTopY) {
            isScrolledUp = true;
            $('.js-modal-open-scroll').modal('show');

        }
    }

    lastScrollTopY = $(this).scrollTop();
});

$('.js-modal-open-scroll').on('hidden.bs.modal', function () {
    isScrolledUp = false;
});

var productOptions = document.querySelectorAll('.vertical-tabs a');
if (productOptions) {
    productOptions.forEach(function (option) {

        option.addEventListener('click', function (e) {
            var clickedText = e.target.innerText;

            var parentElement = e.target.parentElement;
            if (parentElement) {
                var closestSelectedProduct = parentElement.parentElement.parentElement.querySelector('.selected-product');

                if (closestSelectedProduct) {
                    closestSelectedProduct.innerText = clickedText;
                }
            }
        });


    });
}
