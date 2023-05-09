window.onload = function () {

    // -----------Analog Clock-----------
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
    
    // body 안 clockSec과 새로 생성한 clock 안에 자식요소 추가
    document.getElementById("clockSec").appendChild(clockSet);
    document.getElementById("clock").appendChild(span1);
    document.getElementById("clock").appendChild(span2);
    document.getElementById("clock").appendChild(span3);

    var analog = function() {
        var day = new Date();
        var hh = day.getHours() * 30; // 전체 360도 / 12시간 -> 시간 당 30도씩 
        var mm = day.getMinutes() * 6; // 전체 360도 / 60분 -> 분 당 6도씩
        var ss = day.getSeconds() * 6; // 전체 360도 / 60초 -> 초 당 6도씩

        document.getElementById("hour").style.transform = "rotate(" + (hh + (mm/12)) + "deg)"; // 30도 + (분 당 움직이는 각도)
        document.getElementById("min").style.transform = "rotate(" + mm + "deg)"; 
        document.getElementById("sec").style.transform = "rotate(" + ss + "deg)";
    }

    // analog()함수 매초 실행
    setInterval( function() {
        analog();
    });

    // -----------Digital Clock-----------
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
        
        // result1,2에 각각 오늘 날짜와 시간을 넣어서 선언
        result1 = "TODAY : " + year + ". " + month + ". " + date + ". " + "(" + myDay[day] + ")";
        result2 = ampm + "\u00a0" + hour + ":" + minutes + ":" + seconds;
        // 날짜와 시간을 넣은 result1,2를 id text1,2 안으로 삽입
        document.getElementById("text1").innerText = result1;
        document.getElementById("text2").innerText = result2;
    }
    // myTime()함수 매초 실행
    setInterval(function () {
        myTime();
    });
}