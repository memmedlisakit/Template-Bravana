document.addEventListener("DOMContentLoaded", function () {
    // header top words animation
    var activ = document.querySelector(".lead .active");
    var interval = setInterval(function () {
        activ.classList.remove("active");
        if (activ.nextElementSibling == null) {
            activ.parentNode.children[0].classList.add("active");
            activ = activ.parentNode.children[0];
        } else {
            activ.nextElementSibling.classList.add("active");
            activ = activ.nextElementSibling;
        }
    }, 3000);

    // for items animation function
    var item_btns = document.querySelectorAll(".item_btns li");
    var items = document.querySelectorAll(".items .item");
    var arry = [];

    for (var i = 0; i < item_btns.length; i++) {
        arry[i] = item_btns[i];
        item_btns[i].addEventListener("click", function () {
            for (var a = 0; a < items.length; a++) {
                items[a].classList.remove("active");
                item_btns[a].classList.remove("active_btn")
            }
            items[arry.indexOf(this)].classList.add("active");
            this.classList.add("active_btn")
        })
    };

    // for teem author 
    var teem_btn = document.querySelectorAll(".teem_point li");
    var teems = document.querySelectorAll(".teem");
    var ary = [];
    for (var i = 0; i < teem_btn.length; i++) {
        ary[i] = teem_btn[i];
        teem_btn[i].addEventListener("click", function () {
            for (var j = 0; j < teems.length; j++) {
                teems[j].classList.remove("active");
                teem_btn[j].classList.remove("active");
            }
            teems[ary.indexOf(this)].classList.add("active");
            this.classList.add("active");
        })
    }



});
$(document).ready(function () {
    $(".slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<i class="fa fa-chevron-left slide_prev"></i>',
        nextArrow: '<i class="fa fa-chevron-right slide_next"></i>',
        dots: true,
        autoplay: true,
        autopalySpeed: 2000,
    });



    $(".slick-dots li button").replaceWith('<span class="dot_point"></span>')




    $(".slider").mouseenter(function () {
        $(".slide_prev").fadeIn(100);
        $(".slide_next").fadeIn(100);
    });
    $(".slider").mouseleave(function () {
        $(".slide_prev").fadeOut(100);
        $(".slide_next").fadeOut(100);
    });


    var back_to_up = 600;
    $(window).scroll(function (event) {
        if (window.pageYOffset > back_to_up) {
            $(".back_to_up .fa-chevron-up").fadeIn();
        } else {
            $(".back_to_up .fa-chevron-up").fadeOut();
        }
    });
    $(".back_to_up .fa-chevron-up").click(function () {
        $("html, body").delay(200).animate({ scrollTop: 0 }, 800)
    });
});
