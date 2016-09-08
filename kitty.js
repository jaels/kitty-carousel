
(function() {
    var firstTimeout;
    var secondTimeout;
    var tempDots = document.getElementsByClassName('dots');
    var dots = [];
    for (var i=1;i<tempDots.length;i++){
        dots.push(tempDots[i]);
    }
    var images = document.getElementsByClassName('pics');
    dots[0].style.backgroundColor = "white";
    var dot1 = document.getElementById('dot1');
    var dot2 = document.getElementById('dot2');
    var dot3 = document.getElementById('dot3');
    var dot4 = document.getElementById('dot4');
    var pic1 = document.getElementById('first_kit');
    var pic2 = document.getElementById('second_kit');
    var pic3 = document.getElementById('third_kit');
    var pic4 = document.getElementById('fourth_kit');

    dot1.addEventListener('click', function () {
        clearTimeout(firstTimeout);
        clearTimeout(secondTimeout);
        pic1.classList.remove("middle-to-left");
        pic1.classList.remove("right-to-middle");

        pic2.classList.remove("middle-to-left");
        pic2.classList.remove("right-to-middle");

        pic3.classList.remove("middle-to-left");
        pic3.classList.remove("right-to-middle");

        pic4.classList.remove("middle-to-left");
        pic4.classList.remove("right-to-middle");


        pic1.style.right = "0px";

        pic2.style.right = "-1440px";
        pic3.style.right = "-1440px";
        pic4.style.right = "-1440px";

        dot1.style.backgroundColor = "white";
        dot2.style.backgroundColor = "transparent";
        dot3.style.backgroundColor = "transparent";
        dot4.style.backgroundColor = "transparent";
        general(0);
    });


    dot2.addEventListener('click', function () {
        clearTimeout(firstTimeout);
        clearTimeout(secondTimeout);
        pic1.classList.remove("middle-to-left");
        pic1.classList.remove("right-to-middle");

        pic2.classList.remove("middle-to-left");
        pic2.classList.remove("right-to-middle");

        pic3.classList.remove("middle-to-left");
        pic3.classList.remove("right-to-middle");

        pic4.classList.remove("middle-to-left");
        pic4.classList.remove("right-to-middle");


        pic2.style.right = "0px";

        pic1.style.right = "-1440px";
        pic3.style.right = "-1440px";
        pic4.style.right = "-1440px";

        dot2.style.backgroundColor = "white";
        dot1.style.backgroundColor = "transparent";
        dot3.style.backgroundColor = "transparent";
        dot4.style.backgroundColor = "transparent";
        general(1);
    });




    dot3.addEventListener('click', function () {
        clearTimeout(firstTimeout);
        clearTimeout(secondTimeout);
        pic1.classList.remove("middle-to-left");
        pic1.classList.remove("right-to-middle");

        pic2.classList.remove("middle-to-left");
        pic2.classList.remove("right-to-middle");

        pic3.classList.remove("middle-to-left");
        pic3.classList.remove("right-to-middle");

        pic4.classList.remove("middle-to-left");
        pic4.classList.remove("right-to-middle");


        pic3.style.right = "0px";

        pic1.style.right = "-1440px";
        pic2.style.right = "-1440px";
        pic4.style.right = "-1440px";

        dot3.style.backgroundColor = "white";
        dot1.style.backgroundColor = "transparent";
        dot2.style.backgroundColor = "transparent";
        dot4.style.backgroundColor = "transparent";
        general(2);
    });


    dot4.addEventListener('click', function () {
        clearTimeout(firstTimeout);
        clearTimeout(secondTimeout);
        pic1.classList.remove("middle-to-left");
        pic1.classList.remove("right-to-middle");

        pic2.classList.remove("middle-to-left");
        pic2.classList.remove("right-to-middle");

        pic3.classList.remove("middle-to-left");
        pic3.classList.remove("right-to-middle");

        pic4.classList.remove("middle-to-left");
        pic4.classList.remove("right-to-middle");


        pic4.style.right = "0px";

        pic1.style.right = "-1440px";
        pic3.style.right = "-1440px";
        pic2.style.right = "-1440px";

        dot4.style.backgroundColor = "white";
        dot1.style.backgroundColor = "transparent";
        dot2.style.backgroundColor = "transparent";
        dot3.style.backgroundColor = "transparent";
        general(3);
    });



    general(0);

    function general(current) {
        var next = current+1;
        if (next===4) {
            next=0;
        }
        if(current===4) {
            general(0);
        }

        firstTimeout = setTimeout (function () {
            dots[next].style.backgroundColor = "white";
            images[current].classList.add("middle-to-left");
            images[next].classList.add("right-to-middle");
            dots[current].style.backgroundColor = "transparent";
        }, 1500);
        secondTimeout = setTimeout(function() {
            images[current].classList.remove("middle-to-left");
            images[current].style.right = "-1440px";
            images[next].classList.remove("right-to-middle");
            images[next].style.right = "0px";
            general(current+1);
        }, 4800)
    }
})();
