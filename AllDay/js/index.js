$(function () {
    /* SUB-WRAP LAYOUT */
    var subHeight = $(window).height() - $(".btn").height();
    //alert(subHeight);
    $(".sub-wrap").css('min-height', subHeight);
    $(window).resize(function(){
        var subHeight = $(window).height() - $(".btn").height();
        $(".sub-wrap").css('min-height', subHeight);
    });
    /* //SUB-WRAP LAYOUT */
    
    /* 인풋 텍스트 클리어 */
    $(".input-outer input").keyup(function(){
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
        $(this).hide();
    });
    /* //인풋 텍스트 클리어 */
    
    /* 뒤로가기 */
    // 사파리에서 동작 안함 (추후 수정)
    $('.back').click(function () {
        history.back();
    });
    /* //뒤로가기 */
});
