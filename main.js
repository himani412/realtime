nosex=0;
nosey=0;
difference=0;
leftx=0;
rightx=0;
function setup(){
    video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(560,150);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotposes);
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("noseX = "+nosex+" noseY = "+nosey);

        leftx=results[0].pose.leftWrist.x;
        rightx=results[0].pose.rightWrist.x;
        difference=floor(leftx - rightx);
        console.log("leftWristX = "+ leftx + " rightWristX = " + rightx +" difference = "+ difference);
        
    }
}
function modelLoaded(){
    console.log('ModelLoaded!');
}
function draw(){
    background('#FFD700');
    document.getElementById("squaresides").innerHTML= "Width and Height of a square will be = "+difference+" px";
    fill('#adff2f');
    stroke('#0000FF');
    square(nosex,nosey,difference);
}