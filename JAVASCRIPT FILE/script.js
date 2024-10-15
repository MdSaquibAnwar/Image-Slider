let flag = 0;
function controller(s){
    flag = flag + s;

    //left  how to work 
    //   flag = 2 + (-1) = 1
    //right 
        // flag = 2 +1 = 3
//   call this function because want slider  move
    slideshow(flag);   
}

slideshow(flag);
function slideshow(num){
    // let slides = document.querySelector(".slide");
    let slides = document.getElementsByClassName("slide");
    if(num == slides.length){
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;
    }
    for(let imges of slides){
        imges.style.display ="none";
    }
    slides[num].style.display ="block"; 
}