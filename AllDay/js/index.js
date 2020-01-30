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
    $("input[type='checkbox']").click(function(){
        if($("input[type='checkbox']").is(":checked") == true) {
//            alert("aa");
            $(".btn").addClass("on");
        }else{
//            alert("bb");
            $(".btn").removeClass("on");
        }
    });
    /* //체크박스 */
    
    
    /* 비주얼 (스와이프) */
    var swiper1 = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        loop: true,
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
    /* //비주얼 (스와이프) */
    
    var swiper2 = new Swiper('.swiper-container2', {
      slidesPerView: 'auto',
      loop: true,
    });
});
