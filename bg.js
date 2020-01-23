const body=document.querySelector("body");
const IMAGE_NUMBER=3;

function init(){

    const randNum=getRandom();

    drawBG(randNum);

}


function getRandom(){
    return Math.floor(Math.random()*IMAGE_NUMBER);
}

function drawBG(number){

    const image=new Image();
    
    image.src=`images/${number+1}.jpg`;

    image.classList.add("bgImage");

    body.prepend(image);

}

init();
