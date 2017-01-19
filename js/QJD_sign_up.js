/**
 * Created by pang on 2016/11/7.
 */
$(function () {
    var ice_height=null;
    var top_kong=$('#content').offset().top;
    $(window).on('scroll',function () {
        /*ice_height=$('.qjd_official_wx').outerHeight(true)+$('.qjd_official_wx').offset().top-$(window).scrollTop()-$(window).height();*/
        /*ice_height=$('.qjd_official_wx').offset().top-$(window).scrollTop()-$(window).height();*/
        ice_height=$('.qjd_official_wx').offset().top-$(window).scrollTop()+top_kong-$(window).height();
        /*console.log(ice_height);
        console.log($('.qjd_official_wx').offset().top);
        console.log($(window).scrollTop());
        console.log(top_kong);
        console.log($(window).height());*/
        if (ice_height>0){
            /*console.log(123);*/
            $('.qjd_activity_sign_up_btn').removeClass('qjd_activity_sign_up_btn_nofixed');
        }else {
           /* alert(12);*/
            $('.qjd_activity_sign_up_btn').addClass('qjd_activity_sign_up_btn_nofixed');
        }
    })
    $('.qjd_activity_sign_up_btn').on('click',function () {
        $('.qjd_activity_sign_up_btn').addClass('qjd_activity_sign_up_btn_nofixed');
        $(window).scrollTop($(document).height());
    })
})