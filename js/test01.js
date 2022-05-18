// document.write("안녕");
// console.log("안녕");
// var box = 100;
// console.log(box);

// box = 30;
// console.log(box);

// box = "안녕";

// var a = 100;
// var b = "100";

// console.log(typeof(a));
// console.log(typeof(b));

// var tag = "<h1>타이틀</h1>"
// // 태그 부분까지 그대로 콘솔에 출력
// console.log(tag);
// // h1 태그가 적용되어 타이틀이 큰 폰트 사이즈로 출력
// document.write(tag);

// var s = "100";
// var t = 30;
// var d = 100;
// console.log(s);
// console.log(t);
// console.log(typeof(s));
// console.log(s + t);
// console.log(d + t);

// var s1 = true;
// var s2 = "true";
// var s3 = false;
// console.log(s1);
// console.log(s2);
// console.log(s3);

// 공백은 참으로 처리한다. + 0은 flase, 0이 아닌 모든 수는 true
// var s1 = "";
// var s2 = "  ";
// console.log(Boolean(s1));
// console.log(Boolean(s2));

// var s;
// var t = null;
// console.log(s);
// console.log(t);

// console.log(10 > 5); // true 출력

// var num = 100;
// console.log(typeof(num));

// var myNum = 300;

// function test() {
//     console.log("hi");
//     console.log(myNum);
// }

// test();

// var num1 = 10;
// console.log(num1);

// {
//     var num1 = 20;
//     console.log(num1);
// }

// console.log(num1);

// let은 중복 선언이 불가능하지만 함수 안 밖으로 따로 선언하는 것은 오류가 아님.
// let num1 = 100;
// console.log(num1);

// function test() {
//     let num1 = 50;
//     console.log(num1);
// }

// test();
// console.log(num1);

// let num1 = 15;
// let num2 = 2;
// let result = num1 + num2;

// console.log(result);

// let t1 = "학교";
// let t2 = 20;
// let t3 = 30;
// // 문자와 숫자 결합을 먼저 하면 문자 타입으로 나오지만 숫자 타입의 연산을 먼저 쓰면 계산이 되어 출력된다.
// console.log(t2 + t3 + t1);
let myNum = 1;
const totalNum = 5;

function numberSetting() {
    document.getElementById("number").innerText = myNum;
}
numberSetting();

document.getElementById("btn_prev").onclick = function() {
    console.log("이전 버튼");

    if(myNum == 1) {
        myNum = totalNum;
    } else {
        myNum--;
    }

    numberSetting();
}

document.getElementById("btn_next").onclick = function() {
    console.log("다음 버튼");

    if(myNum == totalNum) {
        myNum = 1;
    } else {
        myNum++;
    }

    numberSetting();

    document.getElementById("pic").style.border = "3px solid #00f";
    document.getElementById("pic").style.left = "500px";
}