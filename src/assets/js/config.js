(function($) {
    $(function(){


        $(".md_header__search input").focus(function(){
            $(this).parents().children(".icon_nav").addClass("hide");
        }).blur(function(){
            $(this).parents().children(".icon_nav").removeClass("hide");
        });


        //sidrメニュー
        $('#drawer_trigger').sidr({
            name: 'drawer',
            source: '#drawer_menu',
            side: 'right',
            renaming: false,
            displace: false,
            onOpen: function() {
                $('#drawer_trigger').addClass('open');
                $('#drawer_triggerBtn').addClass('active');
                $('#drawer_cover').fadeIn(300);
                $('.sidr_slide__close').show();
                $("meta[name='viewport']").attr('content','width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=no');
            },
            onClose: function() {
                $('#drawer_trigger').removeClass('open');
                $('#drawer_triggerBtn').removeClass('active');
                $('#drawer_cover').fadeOut(300);
                $('.sidr_slide__close').hide();
                $("meta[name='viewport']").attr('content','width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=yes');
            }
        });
        $('#drawer_cover').on("click", function () {
            $.sidr('close', 'drawer');
        });
        $('.sidr_slide__close').on("click", function () {
            $.sidr('close', 'drawer');
        });
        $(window).touchwipe({
            // wipeRight: function() {
            // $.sidr('close', 'drawer');
            // },
            wipeLeft: function() {
             $.sidr('open', 'drawer');
            },
            preventDefaultEvents: false
        });

    //スムーズスクロール
        $('a[href^="#"]').click(function(){
            var speed = 600;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            return false;
        });
        var url = $(location).attr('href');
        if (url.indexOf("?id=") == -1) {
        }else{
            var url_sp = url.split("?id=");
            var hash   = '#' + url_sp[url_sp.length - 1];
            var tgt    = $(hash);
            var pos    = tgt.offset().top;
            $("html, body").animate({scrollTop:pos}, 600, "swing");
        }
    });
})(jQuery);

