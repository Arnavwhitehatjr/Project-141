rightWristY = 0;
rightWristX = 0;
scoreRightWrist = 0;
function setup(){
     canvas =  createCanvas(700,600);
    canvas.parent('canvas');
    
    video = createCapture(VIDEO);
    video.size(700, 600);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }

    function modelLoaded() {
      console.log('PoseNet Is Initialized');
    }
    function gotPoses(results)
{
  if(results.length > 0)
  {

    rightWristY = results[0].pose.rightWrist.y;
    rightWristX = results[0].pose.rightWrist.x;
    scoreRightWrist =  results[0].pose.keypoints[10].score;
    console.log(scoreRightWrist);
  }
}
function draw(){

  background(0); 
  image(video, 0, 0, 700, 600);

  fill("black");
  stroke("black");
  rect(680,0,20,700);

  fill("black");
  stroke("black");
  rect(0,0,20,700);

  if(scoreRightWrist > 0.2)
  {
    fill("red");
    stroke("red");
    circle(rightWristX, rightWristY, 30);
  }
}