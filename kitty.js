

(function() {

    var tempDots = document.getElementsByClassName('dots');
    var dots = [];
    for (var i=1;i<tempDots.length;i++)
    {
        dots.push(tempDots[i]);
    }

    var images = document.getElementsByClassName('pics');
    dots[0].style.backgroundColor = "white";


function general(current) {
    var next = current+1;
    if (next===4) {
        next=0;
    }
    if(current===4) {
        general(0);
    }


        setTimeout (function () {
            dots[next].style.backgroundColor = "white";
            images[current].classList.add("middle-to-left");
            images[next].classList.add("right-to-middle");
            dots[current].style.backgroundColor = "transparent";
        }, 1500);
        setTimeout(function() {
        images[current].classList.remove("middle-to-left");
           images[current].style.right = "-1440px";
           images[next].classList.remove("right-to-middle");
           images[next].style.right = "0px";
           general(current+1);
       }, 4800)



}
general(0);
})();
