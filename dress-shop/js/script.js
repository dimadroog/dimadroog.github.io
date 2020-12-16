(function( $ ) {
	$(function() {

/*TEMPLATE COMMON*/
/* header categories & lang links */
$('.sublist-toggler').click(function(e){
    e.stopPropagation();
    $('.header-sublst').hide();
    $(this).closest('.sublist-wrapper').find('.header-sublst').fadeToggle(300);
});
$('body').on('click', function(e) {
    if($(e.target).closest('.header-sublst').length == 0) {
       $('.header-sublst').fadeOut(300); //hide list by click outside
    }
});





/*header cart list*/
refreshHeaderCart();
$('.cartlist-toggler').click(function(e){
    e.stopPropagation();
    $(this).closest('.header-cart').find('.cartlist').fadeToggle(300);
});
$('body').on('click', function(e) {
    if($(e.target).closest('.cartlist').length == 0) {
       $('.cartlist').fadeOut(300); //hide list by click outside
    }
});
$('.header-cart-amount__decrease').click(function(){
    let input = $(this).closest('.header-cart-amount').find('.header-cart-amount__val');
    if (input.val() == 1) {
        return;
    }
    input.val(parseInt(input.val())-1);
    refreshHeaderCart();
});
$('.header-cart-amount__increase').click(function(){
    let input = $(this).closest('.header-cart-amount').find('.header-cart-amount__val');
    input.val(parseInt(input.val())+1);
    refreshHeaderCart();
});
$('.header-cart-amount__val').keyup(function(){
    let input = $(this);
    if (input.val() < 1) {
        input.val(1);
    }
    refreshHeaderCart();
});
function refreshHeaderCart(){
    var sum = 0;
    $('.header-cart-item').each(function(){
        let amount = parseInt($(this).find('.header-cart-amount__val').val());
        let cost = parseInt($(this).find('.header-cart-item__cost').text());
        let item_sum = amount * cost;
        sum += item_sum;
        $(this).find('.header-cart-item__sum span').text(item_sum.toLocaleString());
    });
    $('.header-cart-footer__sum span').text(sum.toLocaleString());
};



/* mobile sidebar */
$('.aside-toggler').click(function () {
    let sidebar = $('.aside-sidebar');
    let wrapper = $('.aside-wrapper');
    let content = $('.aside-content');
    let header_container = $('.header-wrapper .container');
    let icon = $('.menu-icon');

    if (sidebar.css('width') == '0px') {
        wrapper.css('overflow-x', 'hidden');
        content.css('margin-left', '265px');
        sidebar.css('width', '265px');
        header_container.css('margin-left', '0px');

        setTimeout(function(){
            $('.menu-icon').addClass('menu-icon_active');
        }, 300);
    } else {
        content.css('margin-left', '0px');
        sidebar.css('width', '0px');
        if ($(document).width() < 810 && $(document).width() > 488 ) {
            header_container.css('margin-left', 'calc((100vw - 488px)/2)');
        } 
        setTimeout(function(){
            $('.aside-wrapper').css('overflow-x', 'visible');
            $('.menu-icon').removeClass('menu-icon_active');
        }, 300);
    }
});
$(window).resize(function(){
    let header_container = $('.header-wrapper .container');
    if ($(document).width() < 810 && $(document).width() > 488 ) {
        header_container.css('margin-left', 'calc((100vw - 488px)/2)');
    } else {
        header_container.css('margin', '0 auto');
    }
    if ($(document).width() > 810){
        $('.aside-sidebar').css('width', '0px');
        $('.aside-content').css('margin-left', '0px');
    }
});



/* mobile sidebar sublist */
$('.sidebar-sublist-toggler').click(function(e){
    let sublist = $(this).closest('.sidebar-sublist-wrapper').find('.sidebar-sublst');
    let link = $(this).closest('.sidebar-sublist-wrapper').find('.sidebar-sublist-toggler');
    if (!link.hasClass('sidebar-menu__link_active')) {
        link.addClass('sidebar-menu__link_active');
        sublist.slideDown();
    } else {
        link.removeClass('sidebar-menu__link_active');
        sublist.slideUp();
    }
});


$('.product-info__param-item').click(function(){
    let parent = $(this).closest('.product-info');
    let price = $(this).data('price').toLocaleString();
    parent.find('.product-info__param-item').removeClass('product-info__param-item_active');
    $(this).addClass('product-info__param-item_active');
    parent.find('.product-info__price span').text(price);
});



/*END TEMPLATE COMMON*/


/*PAGE MAIN*/
/*sliders*/

// $('.main-slider_one').slick({
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     nextArrow: '<a class="slick-next slick-arrow main-slider__next"></a>',
//     prevArrow: '<a class="slick-prev slick-arrow main-slider__prev"></a>',
// });

// $('.main-slider_two').slick({
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     nextArrow: '<a class="slick-next slick-arrow main-slider__next"></a>',
//     prevArrow: '<a class="slick-prev slick-arrow main-slider__prev"></a>',
// });

// $('.main-slider_three').slick({
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     nextArrow: '<a class="slick-next slick-arrow main-slider__next"></a>',
//     prevArrow: '<a class="slick-prev slick-arrow main-slider__prev"></a>',
// });



function randomNumber() {
    return Math.random() * (5000 - 1000) + 1000;
}

var main_slider_one = $('.main-slider_one');
if (main_slider_one.length > 0) {

    main_slider_one.slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: randomNumber(),
        nextArrow: '<a class="slick-next slick-arrow main-slider__next"></a>',
        prevArrow: '<a class="slick-prev slick-arrow main-slider__prev"></a>',
    }).slick("slickPause");

    setTimeout(function() {
        main_slider_one.slick("slickPlay");
    }, randomNumber());
}

var main_slider_two = $('.main-slider_two');
if (main_slider_two.length > 0) {
    main_slider_two.slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: randomNumber(),
        nextArrow: '<a class="slick-next slick-arrow main-slider__next"></a>',
        prevArrow: '<a class="slick-prev slick-arrow main-slider__prev"></a>',
    }).slick("slickPause");

    setTimeout(function() {
        main_slider_two.slick("slickPlay");
    }, randomNumber());
}

var main_slider_three = $('.main-slider_three');
if (main_slider_three.length > 0) {
    main_slider_three.slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: randomNumber(),
        nextArrow: '<a class="slick-next slick-arrow main-slider__next"></a>',
        prevArrow: '<a class="slick-prev slick-arrow main-slider__prev"></a>',
    }).slick("slickPause");

    setTimeout(function() {
        main_slider_three.slick("slickPlay");
    }, randomNumber());
}

if ($('.brands-slider').length > 0) {
    $('.brands-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 5,
        nextArrow: '<a class="slick-next slick-arrow brands-slider__next"></a>',
        prevArrow: '<a class="slick-prev slick-arrow brands-slider__prev"></a>',
          responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 810,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }],
    });
}
if ($('.news-slider').length > 0) {
    $('.news-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        nextArrow: '<a class="slick-next slick-arrow main-slider__next"></a>',
        prevArrow: '<a class="slick-prev slick-arrow main-slider__prev"></a>',
    });
}

if ($('.main-product-slider').length > 0) {
    $('.main-product-slider').slick({
        dots: true,
        // speed: 100,
        // fade: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: false,
    });
}

$('.main-product').mouseenter(function() {
    $(this).find('.main-product-slider').slick('slickGoTo', 1, true);
});
$('.main-product').mouseleave(function() {
    $(this).find('.main-product-slider').slick('slickGoTo', 0, true);
});
/*END PAGE MAIN*/








/*PAGE CATEGORY*/
/*expand filter items*/
$('.category-filter-item-toggle').click(function(e){
    e.stopPropagation();
    let parent = $(this).closest('.category-filter__item');


    if(!parent.hasClass('category-filter__item_active')){

        $('.category-filter-item__list').hide();
        $('.category-filter__item').removeClass('category-filter__item_active');

        parent.addClass('category-filter__item_active');
        $('.category-filter-mobile-header-wrapper__delimiter').css('background', '#fff');

        if ($(window).width() > 810) {

            parent.find('.category-filter-item__list').fadeIn(300);

        } else {

            parent.find('.category-filter-item__list').show("slide", { direction: "right" }, 300);
           setTimeout(function(){
                parent.find('.category-filter-item-list__mobile-footer').css('bottom', '0');
            }, 300);

        }

    } else {

        if ($(window).width() > 810) {

            parent.find('.category-filter-item__list').fadeOut(300);

        } else {

            parent.find('.category-filter-item__list').hide("slide", { direction: "right" }, 300);
            parent.find('.category-filter-item-list__mobile-footer').css('bottom', '-50px');

        }
        parent.removeClass('category-filter__item_active');
        $('.category-filter-mobile-header-wrapper__delimiter').css('background', '#f7f7f7');

    }


});
$('body').on('click', function(e) {
    if($(e.target).closest('.category-filter-item-list').length == 0) {
        $('.category-filter-item-list').hide(); 
        $('.category-filter__item').removeClass('category-filter__item_active');
    }
});

/*open filter on mobile devices*/
$('.category-filter-mobile-open__item_filter').click(function(){
    $('.category-filter-wrapper').show("slide", { direction: "right" }, 300);
});
$('.category-filter-mobile-open__item_order').click(function(){
    $('.category-filter-wrapper').fadeIn();
    setTimeout(function(){
        $('.category-filter-item-toggle_order').click();
    }, 100);
});
$('.category-filter__close').click(function(){
    $('.category-filter-wrapper').hide("slide", { direction: "right" }, 300);
});
$(window).resize(function(){
    if ($(window).width() > 810) {
        $('.category-filter-wrapper').show();
    } else {
        $('.category-filter-wrapper').hide();
    }
});

/*clear/apply filter on mobile devices*/
$('.category-filter-item-list__mobile-footer-item_clear').click(function(){
    let parent = $(this).closest('.category-filter-item-list');
    
    if (parent.hasClass('category-filter-item-list_checkbox')) {
        // alert('checkbox');
        parent.find('.category-filter-item-list__checkboxradio').prop('checked', false);
        parent.find('.ui-checkboxradio-label').removeClass('ui-checkboxradio-checked ui-state-active');

    } else if (parent.hasClass('category-filter-item-list_radio')) {

        if (parent.find('.category-filter-item-list__checkboxradio').eq(0).prop('checked') != true) {

            parent.find('.category-filter-item-list__checkboxradio').prop('checked', false);
            parent.find('.ui-checkboxradio-label').removeClass('ui-checkboxradio-checked ui-state-active');

            parent.find('.category-filter-item-list__checkboxradio').eq(0).prop('checked', true);
            parent.find('.ui-checkboxradio-label').eq(0).addClass('ui-checkboxradio-checked ui-state-active');

        }

    } else if (parent.hasClass('category-filter-item-list_range')) {
        $('.category-filter-item-list__action_range-reset').click();
    }

});

$('.category-filter-item-list__mobile-footer-item_apply').click(function(){
    $('.category-filter-wrapper').hide("slide", { direction: "right" }, 300);
});


/*jquery ui checkboxes and radio*/
if ($(".checkboxradio").length) {
    $( ".checkboxradio" ).checkboxradio({
        icon: false
    });
}


/*celect all or clean*/
$('.category-filter-item-list__checkboxradio').click(function(){
    let parent = $(this).closest('.category-filter-item-list');
    if (parent.hasClass('category-filter-item-list_checkbox')) {
        refreshCounter(parent);
    }
});
$('.category-filter-item-list__action_fill').click(function(){
    let parent = $(this).closest('.category-filter-item-list');
    if ($(this).hasClass('category-filter-item-list__action_clean')) {
        parent.find('.category-filter-item-list__checkboxradio').prop('checked', false);
        parent.find('.ui-checkboxradio-label').removeClass('ui-checkboxradio-checked ui-state-active');
    } else {
        parent.find('.category-filter-item-list__checkboxradio').prop('checked', true);
        parent.find('.ui-checkboxradio-label').addClass('ui-checkboxradio-checked ui-state-active');
    }
    refreshCounter(parent);
});
function refreshCounter(parent){
    let count = 0;
    parent.find('.category-filter-item-list__checkboxradio').each(function(){
        if ($(this).prop('checked') == true) {
            count++;
        }
    });
    parent.find('.category-filter-item-list__counter span').text(count);
    if (count > 0) {
        parent.find('.category-filter-item-list__action').addClass('category-filter-item-list__action_clean');
        parent.find('.category-filter-item-list__action img').hide();
        parent.find('.category-filter-item-list__action span').text('очистить');
    } else {
        parent.find('.category-filter-item-list__action').removeClass('category-filter-item-list__action_clean');
        parent.find('.category-filter-item-list__action img').show();
        parent.find('.category-filter-item-list__action span').text('все');
    }
}


/*filter price range*/
if ($( ".category-filter-item-list-range__slider" ).length) {
    let price_range_control_min = $('.category-filter-item-list__price-range-control-min');
    let price_range_control_max = $('.category-filter-item-list__price-range-control-max');
    let price_min = parseInt(price_range_control_min.val());
    let price_max = parseInt(price_range_control_max.val());
    $( ".category-filter-item-list-range__slider" ).slider({
        range: true,
        min: price_min,
        max: price_max,
        values: [ price_min, price_max ],
        slide: function( event, ui ) {

                $('.category-filter-item-list-range__min').text(ui.values[ 0 ].toLocaleString());
                $('.category-filter-item-list-range__max').text(ui.values[ 1 ].toLocaleString());
                price_range_control_min.val(ui.values[ 0 ]);
                price_range_control_max.val(ui.values[ 1 ]);
        }
    });
    $('.category-filter-item-list-range__min').text(price_min.toLocaleString());
    $('.category-filter-item-list-range__max').text(price_max.toLocaleString());

    $('.category-filter-item-list__action_range-reset').click(function(){
        let price_min = $('.category-filter-item-list__header-price-min').data('min-unformated');
        let price_max = $('.category-filter-item-list__header-price-max').data('max-unformated');
        $( ".category-filter-item-list-range__slider" ).slider({
            range: true,
            min: price_min,
            max: price_max,
            values: [ price_min, price_max ],
        });

        $('.category-filter-item-list-range__min').text(price_min.toLocaleString());
        $('.category-filter-item-list-range__max').text(price_max.toLocaleString());
        price_range_control_min.val(price_min);
        price_range_control_max.val(price_max);
    });
}




/*change product image on hover*/

if ($(window).width() > 810) {
    $('.category-product__body').mouseenter(function() {
        $(this).find('.category-product__bg_look').css('opacity', '1');
    });
    $('.category-product__body').mouseleave(function() {
        $(this).find('.category-product__bg_look').css('opacity', '0');
    });

    $('.category-product-footer').mouseenter(function() {
        $(this).find('.category-product-footer__sizes').css('opacity', '1');
    });
    $('.category-product-footer').mouseleave(function() {
        $(this).find('.category-product-footer__sizes').css('opacity', '0');
    });
}

/*END PAGE CATEGORY*/



/*PAGE PRODUCT DETAIL*/

/*slider*/
if ($('.pd-slider__slider').length > 0) {
    $('.pd-slider__slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        arrows: true,
        nextArrow: '<a class="slick-next slick-arrow pd-slider__next"></a>',
        prevArrow: '<a class="slick-prev slick-arrow pd-slider__prev"></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
}

/*tabs*/
if ($('.product-detail-tabs').length > 0) {
    $('.product-detail-tabs').tabs();
}


/*tabs mobile*/
$('.pd-tab-mobile-item__title').click(function(){
    $(this).toggleClass('pd-tab-mobile-item__title_active');
    $(this).closest('.pd-tab-mobile-item').find('.pd-tab-mobile-item__content').slideToggle();
});


/*dialog windows*/
if ($('.view-the-look').length > 0) {
    $('.view-the-look').dialog({ 
        autoOpen: false,
        dialogClass: 'manomy-dialog',
        draggable: false,
        modal: true,
        resizable: false,
        show: 'fade',
        zIndex: 1500,
        close: function (event) {
             $('.product-detail-gallery-main').slick('unslick');
             $('.product-detail-gallery-thumbs').slick('unslick');
        },
        create: function (event) {
            $(event.target).parent().css({ 'position': 'fixed' });
        },
        open: function(event, ui) { 
            $('.ui-widget-overlay').bind('click', function(){ 
                $(".view-the-look").dialog('close'); 
            }); 
            $('.ui-widget-overlay').hide().fadeIn();
        },
    });

    $('.view-the-look-toggler').click(function(){

        $(".product-detail-gallery-main").slick({
            slidesToShow: 1,
            arrows: true,
            asNavFor: ".product-detail-gallery-thumbs",
            autoplay: false,
            draggable: false,
            fade: true,
            nextArrow: '<a class="slick-next slick-arrow product-detail-gallery__next"></a>',
            prevArrow: '<a class="slick-prev slick-arrow product-detail-gallery__prev"></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        dots: true,
                        arrows: false,
                    }
                },
            ]
        });

        $(".product-detail-gallery-thumbs").slick({
            slidesToShow: 4,
            asNavFor: ".product-detail-gallery-main",
            vertical: true,
            focusOnSelect: true,
            autoplay: false,
            infinite: false,
            draggable: false,
            arrows: false,
        });

        $('.view-the-look').dialog('open');
    });
}


if ($('.view-sizes-table').length > 0) {
    $('.view-sizes-table').dialog({ 
        autoOpen: false,
        dialogClass: 'manomy-dialog manomy-dialog_sizes',
        draggable: false,
        modal: true,
        resizable: false,
        show: 'fade',
        zIndex: 1500,
        create: function (event) {
            if ($(document).width() > 810){
                $(event.target).parent().css({ 'position': 'fixed' });
            }
        },
        open: function(event, ui) { 
            $('.ui-widget-overlay').bind('click', function(){ 
                $(".view-sizes-table").dialog('close'); 
            }); 
            $('.ui-widget-overlay').hide().fadeIn();
        },
    });

    $('.view-sizes-table-toggler').click(function(){
        $('.view-sizes-table').dialog('open');
    });
}

/*END PAGE PRODUCT DETAIL*/

	});
})(jQuery);
