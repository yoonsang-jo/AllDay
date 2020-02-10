$(function () {
    /* SUB-WRAP LAYOUT */
    var subHeight = $(window).height() - $(".btn").height();
    //alert(subHeight);
    $(".sub-wrap").css('min-height', subHeight);
    $(".sub-wrap").css('padding-bottom', $(".btn").height());
    $(window).resize(function(){
        var subHeight = $(window).height() - $(".btn").height();
        $(".sub-wrap").css('min-height', subHeight);
        $(".sub-wrap").css('padding-bottom', $(".btn").height());
    });
    /* //SUB-WRAP LAYOUT */
    
    
    /* 인증하기 버튼 */
    $(".send").click(function(){
        $(this).text("재발송");
        $(this).removeClass("blue");
        $(".authenticate").css('display','block');
    });
    /* //인증하기 버튼 */
    
    
    /* 인풋 텍스트 클리어 */
    $(".input-outer > input").keyup(function(){
        var inputLen = $(this).val().length; 
        //alert(inputLen);
        if(inputLen > 0){
            $(this).next().show();
        }else{
            $(this).next().hide();
        }
    });
    
    $(".input-clear").click(function () {
        $(this).prev().val('');
        $(this).prev().focus();
        $(this).hide();
    });
    /* //인풋 텍스트 클리어 */
    
    
    /* 뒤로가기 */
    // 사파리에서 동작 안함 (추후 수정)
    $('.back').click(function () {
        history.back();
    });
    /* //뒤로가기 */
    
    
    /* 체크박스 */
    $("input.confirm").click(function(){
        if($("input.confirm").is(":checked") == true) {
//            alert("aa");
            $(".btn").addClass("on");
            $(".btn3").addClass("on");
        }else{
//            alert("bb");
            $(".btn").removeClass("on");
            $(".btn3").removeClass("on");
        }
    });
    /* //체크박스 */
    
    
    /* 비주얼 (스와이프) */
    var swiper1 = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      //loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    
    var swiper2 = new Swiper('.swiper-container2', {
      slidesPerView: 'auto',
      //loop: true,
    });
    
    
    var swiper3 = new Swiper('.swiper-container3', {
      slidesPerView: 'auto',
      //loop: true,
    });
    
    var swiper4 = new Swiper('.swiper-container4', {
      slidesPerView: 1,
      spaceBetween: 30,
      //loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        //loop: true,
        disableOnInteraction: false,
      },pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    
    var swiper5 = new Swiper('.swiper-container5', {
      slidesPerView: 'auto',
      //loop: true,
    });
    
    
    var swiper6 = new Swiper('.swiper-container6', {
      slidesPerView: 'auto',
    });
    /* //비주얼 (스와이프) */
    
    
    /* 탑메뉴 */
    $(".nav-ham").click(function(){
        //alert("aa");
        $("html, body").addClass("not-scroll");
        $(".black_bg").fadeIn();
        $(".top-menu").animate({
            right : 0
        });
    });
    
    $(".top-close").click(function () {
        $("html, body").removeClass("not-scroll");
        $(".black_bg").fadeOut();
        if ($(window).width() > 767) {
            $(".top-menu").animate({
                right: -25 + "rem"
            });
        } else {
            $(".top-menu").animate({
                right: -12.5 + "rem"
            });
        }
    });
    /* //탑메뉴 */
    
    /* 빠른문의(상세) */
    $(".quick-detail-list li").click(function(){
        $(".quick-detail-list li").removeClass("blue-line");
        $(".quick-detail-list li > span").not($(this).children("span")).css('display','none');
        $(this).addClass("blue-line").children("span").css('display','block');
    });
    /* //빠른문의(상세) */
    
    /* hotel-detail-tab */
    var conHeight01 = $(".con-01").outerHeight();
        $(".con-box").css('height', conHeight01);
    var conHeight02 = 0;
    var conHeight03 = 0;
    
    $(".hotel-detail-tab ul li").click(function(){
        $(".hotel-detail-tab ul li").removeClass("on");
        $(this).addClass("on");
    });
    $(".hotel-detail-tab ul li").eq(0).click(function(){
        conHeight01 = $(".con-01").outerHeight();
        $(".con-box").css('height', conHeight01);
        $(".con-box>div").removeClass("on");
        $(".con-01").addClass("on");
    });
    $(".hotel-detail-tab ul li").eq(1).click(function(){
        conHeight02 = $(".con-02").outerHeight();
        $(".con-box").css('height', conHeight02);
        $(".con-box>div").removeClass("on");
        $(".con-02").addClass("on");
    });
    $(".hotel-detail-tab ul li").eq(2).click(function(){
        conHeight03 = $(".con-03").outerHeight();
        $(".con-box").css('height', conHeight03);
        $(".con-box>div").removeClass("on");
        $(".con-03").addClass("on");
    });
    /* //hotel-detail-tab */
    
    
    $("#datepicker").datepicker({
        dateFormat: 'yy.mm.dd', //날짜 표시 형식 설정
    });
    $("#datepicker2").datepicker({
        dateFormat: 'mm.dd', //날짜 표시 형식 설정
    });
});
