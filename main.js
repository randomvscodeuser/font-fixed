leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
    canvas = createCanvas(550, 400);
    canvas.position(560, 100);
    video = createCapture(VIDEO);
    video.size(550, 550);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#969A97");
    textSize(difference);
    fill('#ADD8E6');
    text('alex',20, 200);
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x
        difference = floor(leftWristX - rightWristX);
    }
}