//PC适配代码
function elementFit(ele, isScale) {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	windowWidth = windowWidth < 1000 ? 1000 : windowWidth ;
	var _s = windowWidth / 1920;
	_s = Math.max(_s, windowHeight / 1080);
	if (isScale) {
		$('body').css({
			"transform": 'scale(' + _s + ')'
		});
	} else {

		$('.page,.logo,.nav-menu,.video_enter').css({
			"transform": 'translateZ(0) scale(' + _s + ')'
		});
	}
	$(".warp").height($(window).height() - 55)
}

elementFit();
$(window).on('resize', function () {
	setTimeout(elementFit, 100)
});
//开场
//var mediavideo1=document.getElementById('video_enter');
//var mediavideo2=document.getElementById('video_loop');
//mediavideo1.addEventListener('ended',function(){
//	$('.video_enter').hide();
//	$('.swiper-container-m,#cyou_top').addClass('on')
//	mediavideo2.play();
//},false);
//主体切换
var swiper = new Swiper('.swiper-container-m', {
	//	effect : 'fade',
	fadeEffect: {
		crossFade: false,
	},
	direction: 'vertical',
//	initialSlide: 2,
	slidesPerView :'auto',
	speed: 500,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	simulateTouch: false, //禁止鼠标模拟
	mousewheel: true,
	lazy: {
	    loadPrevNext: true,
	},
	on: {
		slideChange: function () {
			if (this.activeIndex != 0) {
				$('#cyou_top').hide();
				$('.box_xl').removeClass('show');
				$('.nav-menu').addClass('on');
			} else {
				$('#cyou_top').show();
				$('.box_xl').addClass('show');
				$('.nav-menu').removeClass('on');
			};
		},
		init: function () {
			var checkBottom = setTimeout(() => {
				if($("body > #cyou_bottom").length>0){
					$(".ss_bot").html($("#cyou_bottom"));
					clearInterval(checkBottom);
				}
			}, 1000);
		}
	},
});
//p1
var sc_news = new Swiper('.sc_news', {
	autoplay: true,
	grabCursor: true,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	pagination: {
		el: '.sp_news',
		clickable :true,
	},
});
//p2
var sc_sq1 = new Swiper('.sc_sq1', {
	effect: 'fade',
	autoplay: true,
	grabCursor: true,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	pagination: {
		el: '.sp_sq1',
		clickable :true,
	},
});
var sc_sq2 = new Swiper('.sc_sq2', {
	effect: 'fade',
	autoplay: true,
	grabCursor: true,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	pagination: {
		el: '.sp_sq2',
		clickable :true,
	},
});
//p3
$('.btns_sect li').each(function (i) {
	$(this).click(function () {
		$(this).addClass('on').siblings().removeClass('on').parent('ul').siblings('ul').children('li').removeClass('on');
		$('.p3_info li').eq(i).fadeIn().addClass('on').siblings().fadeOut().removeClass('on');
		$('.p3_role img').eq(i).addClass('on').siblings().removeClass('on');
	})
})
//p4
$('.btn_paper,.p4_paper').click(function () {
	$('.paper_page').addClass('show');
	$('.video_page').removeClass('show');
})
$('.btn_video,.p4_video').click(function () {
	$('.video_page').addClass('show');
	$('.paper_page').removeClass('show');
})
$('.p4_back').click(function () {
	$('.video_page,.paper_page').removeClass('show');
})
//p5
$('#btns_p5 a').each(function (i) {
	$(this).click(function () {
		$(this).addClass('on').siblings().removeClass('on');
		$('.list_lx li').eq(i).addClass('on').siblings().removeClass('on');
	})
})
$('.news_tit a').click(function () {
	var $this = $(this), index = $this.index();
	if ($this.hasClass('on') || $this.hasClass('more')) return;

	$this.addClass('on').siblings().removeClass('on');
	$this.parents().next().find('ul').eq(index).addClass('on').siblings().removeClass('on')
})
$('.sq_list a').each(function () {
	var bTag = this.querySelector('.textcont');
	var emTag = this.querySelector('.comm');

	if (bTag && emTag) {
		var text = bTag.textContent;
		var match = text.match(/【(.*?)】/);

		if (match) {
			var bracketContent = match[0];
			var remainingText = text.replace(bracketContent, '').trim();

			emTag.textContent = bracketContent;
			bTag.textContent = remainingText;
		}
	}
})
//p7
var sc_hot1 = new Swiper('.sc_hot1', {
	slidesPerView : 2,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	navigation: {
      nextEl: '.sbn_hot1',
      prevEl: '.sbp_hot1',
    },
});
var sc_hot2 = new Swiper('.sc_hot2', {
	slidesPerView : 2,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	navigation: {
      nextEl: '.sbn_hot2',
      prevEl: '.sbp_hot2',
    },
});
$('.btns_p5 a').each(function(i){
	$(this).click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$('.hot_boxb .hot_boxsb').eq(i).fadeIn().siblings('.hot_boxsb').fadeOut();
	})
})
var sc_rew = new Swiper('.sc_rew', {
	slidesPerView : 5,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	navigation: {
      nextEl: '.sbn_rew',
      prevEl: '.sbp_rew',
    },
});
//p8
$('.btns_pp a').each(function(i){
	$(this).click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$('.list_pp li').eq(i).fadeIn().siblings('li').fadeOut();
	})
})
//设置综合小列表2条新闻，2条公告，2条社区
function setMultiple(){
	var list = $(".news_bot .news_list ul");
	var list1 = list.eq(1).find("li:lt(1)");
	var list2 = list.eq(2).find("li:lt(2)");
	list.eq(0).append(list1).append(list2);
}
setMultiple();
