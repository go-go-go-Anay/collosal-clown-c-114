function preload(){

}

function setup(){

    canvas = createCanvas(450, 360);
    canvas.position(535, 300);

    video = createCapture(VIDEO);
    video.hide();
    video.size(450, 450)
}

function draw(){

    image(video, 0, 0, 450, 360);
}