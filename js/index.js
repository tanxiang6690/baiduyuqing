$(function(){
    //联系我们点击事件开始
    $(".header .header-nav .right ul li:nth-child(7)").on("click",function(){
        $(".header .header-nav .right ul li:nth-child(7) .lianXi-xxk").toggleClass("active");
    })

    //更换验证码点击事件开始
    var verifyImg=$("#main .section-1 .center .login-box .verify .verify-center img");
    var verify=$("#main .section-1 .center .login-box .verify .verify-right");
    var ac=$("#main .section-1 .center .login-box .verify .verify-center .active");
    verify.on("click",function(){
        ac=$("#main .section-1 .center .login-box .verify .verify-center .active");
        verifyImg.removeClass("active");
        var next=ac.next();
        if(next.length){
            ac.next().addClass("active");
        }else{
            verifyImg.first().addClass('active');
        }
    })
})