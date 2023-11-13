function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,640,480);
    ellipse(50, 50, 75, 70,)
    ellipse(50, 450 , 75, 70,)
    ellipse(580, 50, 75, 70,)
    ellipse(580, 450 , 75, 70,)

}


 


    function take_snapshot(){
        save('Adel.png');
    }

    