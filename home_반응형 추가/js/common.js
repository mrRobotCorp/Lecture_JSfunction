window.onload = function(){
    var trigerMenu = document.getElementById("menu");
    var gnbMenu = document.getElementById("gnb");

    trigerMenu.onclick = function(){
        gnbMenu.style.transition = "all .5s"
        this.classList.toggle("active");
        gnbMenu.classList.toggle("active");
    };
    window.onresize = function(){
        console.log("onresize");
        console.log(window.innerWidth);
        gnbMenu.style.transition = "none"

        if(window.innerWidth > 768){
            gnbMenu.classList.remove("active");
        }
    }
}


