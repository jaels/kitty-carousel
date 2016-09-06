setTimeout(function() {
    var images = document.getElementsByClassName('pics');
    images[0].style.transitionProperty = "transform";
    images[0].style.transitionDuration = "4s";
    images[0].style.transform = "translateX(-1440px)";
    images[1].style.transitionProperty = "transform";
    images[1].style.transitionDuration = "4s";
    images[1].style.transform = "translateX(-1440px)";



    //function looping() {
    //    for (var i=0;i<images.length;i++) {
    //        images[i].classList.add("go-left");
    //        images[i+1].classList.add("go-to-middle");
    //        if(i===pics.length-1) {
    //            i===0;
    //        }
    //    }
    //}
},1000);
