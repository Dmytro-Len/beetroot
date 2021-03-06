//first tab
$('.header__item:nth-child(1)').click(() => {
    $('.main').css({
        'display': ''
    })
    $('.rating, .buy').css({
        'display': 'none'
    })
    $('.shp1').css({
        'opacity': 1,
        'fill': '#ffffff'
    })
    $('.info-tab').css({
        'display': 'block',
        'color': '#ffffff',
    })
    $('.header__item:nth-child(1)').css({
        'border-bottom': '2px solid #ffffff'
    })
    //off
    $('.shp2, shp3').css({
        'opacity': '',
        'fill': ''
    })
    $('.rate-tab, .buy-tab').css({
        'display': '',
        'color': '',
    })
    $('.header__item:nth-child(2), .header__item:nth-child(3)').css({
        'border-bottom': ''
    })
})
//second tab
$('.header__item:nth-child(2)').click(() => {
    $('.rating').css({
        'display': 'block'
    })
    $('.main, .buy').css({
        'display': 'none'
    })
    $('.shp2').css({
        'opacity': 1,
        'fill': '#ffffff'
    })
    $('.rate-tab').css({
        'display': '',
        'color': '#ffffff',
    })
    $('.header__item:nth-child(2)').css({
        'border-bottom': '2px solid #ffffff'
    })
    //off
    $('.shp1, .shp3').css({ //I AM HERE
        'opacity': '',
        'fill': ''
    })
    $('.info-tab, .buy-tab').css({
        'display': '',
        'color': '',
    })
    $('.header__item:nth-child(1)').css({
        'border-bottom': ''
    })
})
//third tab
$('.header__item:nth-child(3)').click(() => {
    $('.buy').css({
        'display': 'block'
    })
    $('.main, .rating').css({
        'display': 'none'
    })
    $('.shp3').css({
        'opacity': 1,
        'fill': '#ffffff'
    })
    $('.buy-tab').css({
        'display': 'block',
        'color': '#ffffff',
    })
    $('.header__item:nth-child(3)').css({
        'border-bottom': '2px solid #ffffff'
    })
    //off
    $('.shp1, .shp2').css({ //I AM HERE
        'opacity': '',
        'fill': ''
    })
    $('.info-tab, .rate-tab').css({
        'display': '',
        'color': '',
    })
    $('.header__item:nth-child(1), .header__item:nth-child(2)').css({
        'border-bottom': ''
    })
    

})