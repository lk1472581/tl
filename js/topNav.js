$('#nav ul li').on('mouseenter', function() {
    $('.nav-menu,#moreMenu').addClass('show');
});
$('#moreMenu').on('mouseleave', function() {
    $('#moreMenu').removeClass('show');
    $('#nav li').removeClass('act');
});
$('#moreMenu li').on('hover', function() {
    var index = $(this).index();
    $('#nav li').eq(index).addClass('act').siblings().removeClass('act');
});
$('.nav-menu').on('mouseleave', function() {
    $('.nav-menu,#moreMenu').removeClass('show');
});