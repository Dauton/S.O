

    /* Botão liga/desliga tela */
    $("#ligar-desligar-tela, #celular-btn-tela").click(function () {
        var mao = $("#ligar-desligar-tela");
        mao.animate({ "right": "-60px" }, 100);
        mao.animate({ "right": "-70px" }, 100);

        var botao = $("#celular-btn-tela");
        botao.animate({ "right": "0" }, 100);
        botao.animate({ "right": "-5px" }, 100)
    });
    var mao = false;
    $("#ligar-desligar-tela, #celular-btn-tela").click(function () {
        if (!mao) {
            $(".tela-inicial").css({ "display": "flex" });
            mao = true;
        } else {
            $(".tela-inicial").fadeOut(100);
            mao = false;
        }
    });


    /* Barra superior dropdown */
    var drop = false;
    $(".barra-superior").click(function () {
        if (!drop) {
            $(".barra-drop-down").slideToggle(300, 'swing');
            drop = true
        } else {
            $(".barra-drop-down").slideToggle(300, 'swing');
            drop = false
        }
    });
    $(".fa-angle-left, .fa-circle").click(function () {
        $(".barra-drop-down").slideUp(200)
    });



    /* Funções da barra superior dropdown */

        /* Função Wi-fi */
    var wifi = false;
    $(".icon:nth-child(1) i").click(function () {
        if (!wifi) {
            $(this).css({
                "background": "#353535",
                "transform": "rotate(360deg)",
                "transition": ".2s ease"
            });
            $(".barra-superior .fa-wifi").fadeOut(0)
            wifi = true;
        } else {
            $(this).removeAttr('style').css({ "transform": "rotate(-360deg)", "transition": ".2s ease" });
            $(".barra-superior .fa-wifi").fadeIn(0);
            wifi = false;
        }
    });

        /* Função Bluetooth */
    var bluetooth = false;
    $(".icon:nth-child(2) i").click(function () {
        if (!bluetooth) {
            $(this).css({
                "background": "#353535",
                "transform": "rotate(360deg)",
                "transition": ".2s ease"
            });
            $(".barra-superior .fa-bluetooth-b").fadeOut(0)
            bluetooth = true;
        } else {
            $(this).removeAttr('style').css({ "transform": "rotate(-360deg)", "transition": ".2s ease" });
            $(".barra-superior .fa-bluetooth-b").fadeIn(0);
            bluetooth = false;
        }
    });

        /* Função Modo escuro */
    var tema = false;
    $(".icon:nth-child(5) i").click(function() {
        if(!tema) {
            $(this).css({
                "background": "#353535",
                "transform": "rotate(180deg)",
                "transition": ".2s ease"
            })
            $(":root").css({
                "--dark-theme-background": "#f2f2f2",
                "--dark-theme-color-primary": "#353535",
            });
            tema = true
        } else {
            $(this).removeAttr('style').css({ "transform": "rotate(360deg)", "transition": ".2s ease" });
            $(":root").removeAttr('style');
            tema = false
        }
    });

    /* Tela de configuração */


    $("#app-configuracao, .atalhos .fa-gear").click(function() {
        $(".tela-configuracao").show(200);
    });
    $(".fa-gear").click(function() {
        $(".barra-drop-down").slideUp(200)
    });


    /* Wallpapers */

    $("#app-configuracao-wallpaper").click(function() {
        $("#wallpapers").fadeToggle(100);
    });

        /* Wallpaper 1 */
    $("#wallpaper1").click(function() {
        $(".tela-inicial").css({
            "background": "url(img/wallpaper1.jpg) no-repeat",
            "background-size": "cover"
        })
    });
        /* Wallpaper 2 */
    $("#wallpaper2").click(function() {
        $(".tela-inicial").css({
            "background": "url(img/wallpaper2.jpg) no-repeat",
            "background-size": "cover"
        })
    });
        /* Wallpaper 3 */
    $("#wallpaper3").click(function() {
        $(".tela-inicial").css({
            "background": "url(img/wallpaper3.jpg) no-repeat",
            "background-size": "cover"
        })
    });
        /* Wallpaper 4 */
    $("#wallpaper4").click(function() {
        $(".tela-inicial").css({
            "background": "url(img/wallpaper4.jpg) no-repeat",
            "background-size": "cover"
        })
    });

    $("#wallpapers img").click(function() {
        $(".wallpapers-aplicado").fadeIn(200);
        setTimeout(function(){
            $(".wallpapers-aplicado").fadeOut(200)
        },3000)
    });

    $("#wallpapers .fa-arrow-left-long").click(function() {
        $("#wallpapers").fadeOut(200);
    });
    $(".fa-circle").click(function() {
        $(".tela-configuracao, #wallpapers, #fontes").fadeOut(200)
    });

    /* Fontes */

    $("#fontes .fa-arrow-left-long").click(function() {
        $("#fontes").fadeOut(200);
    });

    $("#app-configuracao-fontes").click(function() {
        $("#fontes").fadeToggle(100);
    });
        /* Fonte 1 */
    $("#fonte1").click(function() {
        $("body").css({
            "font-family": "Arial, Helvetica, sans-serif",
        })
    });
        /* Fonte 2 */
    $("#fonte2").click(function() {
        $("body").css({
            "font-family": "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        })
    });
        /* Fonte 3 */
    $("#fonte3").click(function() {
        $("body").css({
            "font-family": "'Nunito', sans-serif",
            "font-family": "'Open Sans', sans-serif",
        })
    });

    $("#fontes ul li").click(function() {
        $(".fontes-aplicado").fadeIn(200);
        setTimeout(function(){
            $(".fontes-aplicado").fadeOut(200)
        },3000)
    });
    
