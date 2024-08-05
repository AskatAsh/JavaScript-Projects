const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".prev");
const img = document.querySelector("img");
// console.log(nextBtn, previousBtn, img);

const images = ["./images/1.jpg", "./images/2.JPG", "./images/3.jpg"];
let count = 0;

function next(){
    count++;
    if(count >= images.length){
        count = 0;
        img.src = images[count];
    }else{
        img.src = images[count];
    }
    // console.log(count);
}
function prev(){
    count--;
    if(count < 0){
        count = images.length - 1;
        img.src = images[count];
    }else{
        img.src = images[count];
    }
    // console.log(count);
}

nextBtn.addEventListener('click', next);
previousBtn.addEventListener('click', prev);