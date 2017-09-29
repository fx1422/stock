var docEl = document.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        //设置根字体大小
        var myfontSize = 20 * (docEl.clientWidth / 375);
        if (myfontSize > 30) {
            docEl.style.fontSize = "30px";
        } else {
            docEl.style.fontSize = 20 * (docEl.clientWidth / 375) + 'px';
        }

    };
//绑定浏览器缩放与加载时间
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);
document.body.addEventListener('touchstart', function () {
});

(function ($) {
    $.fn.alert = function () {
        return this.fadeIn(500).addClass('animation-show').removeClass('animation-hide')
    }
    $.fn.leave = function () {
        return this.addClass('animation-hide').removeClass('animation-show').fadeOut(500)
    }
})(jQuery)
