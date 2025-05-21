window.globalSohu = function() {
    function createPopMask(ele) {
        var popHtml = '<div class="pop-mask" style="position: fixed;left:0;top:0;bottom:0;right:0;background:rgba(0,0,0,0.7);z-index: 140;"></div>';
        $('body').append(popHtml);
    }
    var common = {
        playVideo: function (option) {
            var defOption = {
                width: 818,
                height: 460,
                allowFullScreen: 'true',
                allowscriptaccess: 'always',
                wmode: 'Transparent',
                autoPlay: true
            };
            if (!option) return
            for(var keyName in defOption) {
                if (!option[keyName]) {
                    option[keyName] = defOption[keyName];
                }
            }
            if (option.v_id) {
                option.v_id = String(option.v_id)
            }
            if ($('.pop-mask').length) {
                if($('.pop-mask').length > 1) {
                    $('.pop-mask').eq(0).remove();
                }
                $('.pop-mask').show();
            } else {
                createPopMask();
            }
            $('#videoPopSouhu').addClass('show');
            if (option.url) {
                $('#videoPopSouhu .video-player').html('<video style="position:absolute;left:0;top:0;bottom:0;right:0;width:100%;" controls="" autoplay src="'+ option.url +'"></video>')
            } else {
                var video = new videoHack().play('#video_placeholder', option)
            }
        },
        pauseVideo: function () {
            $('.pop-video').removeClass('show');
            $('.pop-mask').removeClass('show');
        },
        // 打开对应弹窗
        showPop: function showPop(name) {
            this.hidePop();
            $(name).addClass('show');
            if($('.pop-mask').length > 1) {
                $('.pop-mask').eq(0).remove();
            }
            if ($('.pop-mask').length) {
                $('.pop-mask').show();
            } else {
                createPopMask();
            }
        },
        // 关闭弹窗
        hidePop: function hidePop() {
            // $('.popup,.pop-mask').removeClass('show');
            $('.popup').removeClass('show');
            var hasVideo = $('.popup').find('.video-box').length;
            if (hasVideo) {
                $('.popup').find('.video-box').html('<span>视频正在下载中...</span>')
            }
            $('.pop-mask').hide();
        },
    };

    function init() {
        // fn.scrollSlideBar();
        //fn.otherEvent();

        //内容页视频
        $('.cms_content_video').each(function () {
            var video_id = $(this).attr("video-id"), querySec = 'cms_content_video_' + Math.floor(Math.random() * 10000);
            $(this).addClass(querySec);
            if (video_id) {
                var video = new videoHack().play('.' + querySec, {
                    v_id: video_id,
                    autoPlay: false
                })
            }
        });
    }

    return {
        common: common,
        init: init
    };
}();

$(function() {
    globalSohu.init();
});
