$(document).ready(function(){
    "use strict";

    //Tarih secici
    $("#register-birthday").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1940:1999"
    });

    //Popular uyeler listesi
    $("#popular-members-list").slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 4
                }
            },
        ]
    });

    //profil notu otomatik yukseklik
    autosize($(".profile-note"));
    setInterval(function(){
        autosize.update($(".profile-note"));
    }, 100);


    //profil duzenleme sayfasi butonlari
    $("#my-profile .form-list a.icon").click(function(e){
        e.preventDefault();
        $(this).parent().find('.focus').focus();
    });

});
