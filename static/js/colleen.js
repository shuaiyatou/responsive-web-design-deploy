/**
 * Created by M on 2017/7/8.
 */
$(function(){
    $('.nav').singlePageNav({
        offset:70
    });
//    小屏幕点击菜单按钮导航折叠隐藏消失
    $('.navbar-collapse a').click(function(){
        $('.navbar-collapse').collapse('hide');
    });
    new WOW().init();

})