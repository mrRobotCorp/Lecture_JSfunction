const picWidth = 1440;
let moveNum = 0;
const totalNum = 3;

for(var i = 0; i < totalNum; i++) { 
    document.getElementById("pic" + i).style.left = (picWidth * i) + "px";
}
document.getElementById("temp").innerText = moveNum;
// 이미지 위 dl 텍스트 active 클래스 추가로 나타나게 설정
document.getElementById("text" + moveNum).classList.add("active");

// 동적으로 점 인디케이터 생성 (동적 요소 태그 생성)
let dotList = document.createElement("ul");
dotList.setAttribute("id", "dotList");
document.getElementById("section1").appendChild(dotList);

// ul 안 li 요소 반복 생성을 위한 for문
for(var i = 0; i < totalNum; i++) {
    var li = document.createElement("li");
    li.setAttribute("id", "li" + i);
    document.getElementById("dotList").appendChild(li);
    document.getElementById("li" + i).innerText = i;
    document.getElementById("li" + i).onclick = function() {
        aniFunction();
        // 해당 요소의 id를 선택. id의 3번째 글자부터 1개 글자를 산택 (li0이면 0 선택)
        moveNum = this.id.substr(2,1);
        moveFunction();
    }
}
document.getElementById("li" + moveNum).classList.add("active");

// 좌우 이동 버튼 동적 요소로 생성
let prev_btn = document.createElement("button");
prev_btn.setAttribute("id", "prev_btn");
prev_btn.innerText = "prev";
document.getElementById("imgSet").appendChild(prev_btn);

let next_btn = document.createElement("button");
next_btn.setAttribute("id", "next_btn");
next_btn.innerText = "next";
document.getElementById("imgSet").appendChild(next_btn);

// dl 내용을 애니메이션 키프레임을 적용하여 나타나고 사라지게 하는 클래스 설정
var aniFunction = function() {
    document.getElementById("text" + moveNum).classList.remove("active");
    document.getElementById("text" + moveNum).classList.add("activeOut");
}
// 이미지 움직임 설정하는 함수 선언
var moveFunction = function() {
    for(var i = 0; i < totalNum; i++) {
        document.getElementById("pic" + i).style.left = (picWidth * (i-moveNum)) + "px";
    }
    document.getElementById("temp").innerText = moveNum;
    document.getElementById("text" + moveNum).classList.remove("activeOut");
    document.getElementById("text" + moveNum).classList.add("active");

    for(var i = 0; i < totalNum; i++) {
        // 해당되는 인디케이터 이외 active 삭제. 초기화
        document.getElementById("li" + i).classList.remove("active");
    }
    document.getElementById("li" + moveNum).classList.add("active");
}

document.getElementById("prev_btn").onclick = function() {
    aniFunction();
    if(moveNum > 0) {
        moveNum--;
    }
    moveFunction();
}

document.getElementById("next_btn").onclick = function() {
    aniFunction();
    if(moveNum < totalNum - 1) {
        moveNum++;
    }
    moveFunction();
}