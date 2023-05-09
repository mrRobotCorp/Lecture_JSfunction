window.onload = function(){

    // -------------- 반응형 gnb ----------------
    var toggleMenu = false;
    var trigerMenu = document.getElementById("menu");
    var gnbMenu = document.getElementById("gnb");

    trigerMenu.onclick = function(){
        if(window.innerWidth < 1024){
            if(toggleMenu){
                toggleMenu = false;
                gnbMenu.style.width = "0";
            } else {
                toggleMenu = true;
                gnbMenu.style.width = "100%";
            }
            gnbMenu.style.transition = "all .5s"

            this.classList.toggle("active");
            gnbMenu.classList.toggle("active");
        }
    };
    window.onresize = function(){
        gnbMenu.style.transition = "none";

        if(window.innerWidth > 1024){
            gnbMenu.style.width ="calc(100% - 175px)";
        } else {
            toggleMenu = false;
            gnbMenu.style.width = "0";
            trigerMenu.classList.remove("active");
        }
    }

    // ------------- 레이어 팝업 ----------------
    function popupOpen() {
        $('.layerpop').css("position", "absolute");

        $('.layerpop').css("top",(($(window).height() - $('.layerpop').outerHeight()) / 2) + $(window).scrollTop());
        $('.layerpop').css("left",(($(window).width() - $('.layerpop').outerWidth()) / 2) + $(window).scrollLeft());
        $('#layerbox').show();
    }
    popupOpen();

    var close = document.getElementById('layerbox_close');
    var layer = document.getElementById('layerbox');

        close.addEventListener('click', function(e){
            layer.style.display='none';
        });

    // ------------ 커스텀 마우스 ---------------
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor_follower");

    function Trailer(e) {
        gsap.to(cursor, { duration: 0.3, left: e.pageX, top: e.pageY });
        gsap.to(follower, { duration: 0.6, left: e.pageX - 15, top: e.pageY - 15 });
    }

    document.addEventListener("mousemove", Trailer);


    const btnSet = document.querySelectorAll("#switch");

    // 다크모드 버튼에서 커스텀 마우스 비활성화
    btnSet.forEach(function (btnX) {
        btnX.addEventListener("mouseover", function () {
            cursor.classList.remove("cursor");
        });
        btnX.addEventListener("mouseleave", function () {
            cursor.classList.add("cursor");
        });
    });


    // -------------- 다크모드 버튼 --------------
    // document.getElementById("switch").onclick = function () {
    //     // mode.classList.add(".dark-mode");
    // }
    // const toggleSwitch = document.querySelector(
    //     '.theme-switch input[type="checkbox"]'
    // );
    // function switchTheme(e) {
    //     if (e.target.checked) {
    //     document.documentElement.setAttribute("data-theme", "dark");
    //     } else {
    //     document.documentElement.setAttribute("data-theme", "light");
    //     }
    // }

    // toggleSwitch.addEventListener("change", switchTheme, false);

    // // Store color theme for future visits
    // function switchTheme(e) {
    //     if (e.target.checked) {
    //     document.documentElement.setAttribute("data-theme", "dark");
    //       localStorage.setItem("theme", "dark"); //add this
    //     } else {
    //     document.documentElement.setAttribute("data-theme", "light");
    //       localStorage.setItem("theme", "light"); //add this
    //     }
    // }

    // var moonImg = document.getElementById('moon');
    // var sunImg = document.getElementById('sun');

    //     moonImg.addEventListener('click', function(e){
    //         sunImg.style.display='none';
    //     });

    //     sunImg.addEventListener('click', function(e){
    //         moonImg.style.display='none';
    //     });
        
    // 최근 사용 테마 불러오기
    const currentTheme = localStorage.getItem("theme")
        ? localStorage.getItem("theme")
        : null;

    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);

        if (currentTheme === "dark") {
        toggleSwitch.checked = true;
        }
    }


    // ----------- 반응형 slick slide -------------------
    $(document).ready(function() {

        $('.slick_gallery').slick({ 
            dots: true, 
            arrow: true,
            lazyLoad: 'ondemand',
            infinite: true, 
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 3, 
            responsive: [ 
                { breakpoint: 1024, 
                settings: { 
                    slidesToShow: 2, 
                    slidesToScroll: 2,
                    infinite: true, 
                    dots: true 
                    } }, 
                { breakpoint: 780, 
                    settings: { 
                    slidesToScroll: 1,
                    slidesToShow: 1, 
                    } } 
            ]
        });
    });

    // ------------- Analog Clock -------------
        // 시계 안 요소 모두 묶어주는 div 태그 생성, id 부여
        var clockSet = document.createElement("div");
        clockSet.setAttribute("id", "clock");
        
        // 각 초침의 span 태그 생성,id 부여
        var span1 = document.createElement("span");
        span1.setAttribute("id", "hour");
        var span2 = document.createElement("span");
        span2.setAttribute("id", "min");
        var span3 = document.createElement("span");
        span3.setAttribute("id", "sec");

        document.getElementById("clockSec").appendChild(clockSet);
        document.getElementById("clock").appendChild(span1);
        document.getElementById("clock").appendChild(span2);
        document.getElementById("clock").appendChild(span3);
    
        var analog = function() {
            var day = new Date();
            var hh = day.getHours() * 30; // 전체 360도 / 12시간 -> 시간 당 30도씩 
            var mm = day.getMinutes() * 6; // 전체 360도 / 60분 -> 분 당 6도씩
            var ss = day.getSeconds() * 6; // 전체 360도 / 60초 -> 초 당 6도씩
    
            document.getElementById("hour").style.transform = "rotate(" + (hh + (mm/12)) + "deg)"; 
            document.getElementById("min").style.transform = "rotate(" + mm + "deg)"; 
            document.getElementById("sec").style.transform = "rotate(" + ss + "deg)";
        }
    
        setInterval( function() {
            analog();
        });
    
        // -------------Digital Clock-----------
        var myDate;
        var year;
        var month;
        var date;
        var day;
        var hour;
        var minutes;
        var seconds;
        var ampm;
        var myDay = ["일", "월", "화", "수", "목", "금", "토"];
    
        var myTime = function () {
            myDate = new Date();
            year = myDate.getFullYear();
            month = myDate.getMonth() + 1;
            date = myDate.getDate();
            day = myDate.getDay();
            hour = myDate.getHours();
            minutes = myDate.getMinutes();
            seconds = myDate.getSeconds();
    
            if (hour < 12) {
                ampm = "AM";
            } else {
                ampm = "PM"
            }
            if (hour > 12) {
                hour = "0" + hour - 12;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            
            result1 = "TODAY : " + year + ". " + month + ". " + date + ". " + "(" + myDay[day] + ")";
            result2 = ampm + "\u00a0" + hour + ":" + minutes + ":" + seconds;

            document.getElementById("text1").innerText = result1;
            document.getElementById("text2").innerText = result2;
        }

        setInterval(function () {
            myTime();
        });

        // --------- scrollTop 구현 ------------
        $(document).ready(function(){

            var Height = $("#scrollTop").height(); 
            // Height 변수에 scrollTop 높이 적용 
            $("#scrollTop").hide();

            $(window).scroll(function(){ 
                var rolling = $(this).scrollTop() >= Height; 
        
            if(rolling) { 
                //윈도우 스크롤 기능의 값이 navHeight 의 높이와 같거나 크면
                    $("#scrollTop").fadeIn(500).css({"position":"fixed"});
                }
                else{
                    $("#scrollTop").fadeOut(300);
                }
            });
        
        });
        document.getElementById("scrollTop").onclick = function () {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    
}


