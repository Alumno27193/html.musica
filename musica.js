song = "";

function preload()
{
	song = loadSound("no se va.mp3");
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("poseNet");
}
function gotPoses(identificador){
if(identificador.length>0){
scoreRightWrist=identificador[0].pose.keypoints[10].score;
scoreLeftWrist=identificador[0].pose.keypoints[9].score;
rightWristX=identificador[0].pose.rightWrist.X;
leftWristY=identificador[0].pose.leftWrist.y;
leftWristX=identificador[0].pose.leftWrist.x;
rightWristY=identificador[0].pose.rightWrist.y;

}



}
function dj(){
    song.play();
    song.setVolume(1);
song.rate(1);
}
function draw(){
	image(video,0,0,600,500);
	fill("#FF0000");
	stroke("#FF0000");
	if(scoreRightWrist>0.2){
		circle(rightWristx,rightWristY,20);
		if (rightWristY>0&&rightWristY<100) {
		document.getElementById	("velocidad").innerHTML="0.5";
		song.rate(0.5);
		}
		if (rightWristY>100&&rightWristY<200){
		document.getElementById("velocidad").innerHTML="1";
		song.rate(1);
		}
		if (rightWristY>200&&rightWristY<300) {
document.getElementById("velocidad").innerHTML="1.5"			
song.rate(1.5);	
}
if (rightWristY>300&&rightWristY<400) {
	document.getElementById("velocidad").innerHTML="2"
song.rate(2);
}
if (rightWristY>400&&rightWristY<500) {
	document.getElementById("velocidad").innerHTML="2.5"
song.rate(2.5);
}
	}
	if(scoreLeftWrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);
		InNumberleftWristY = Number(leftWristY);
		new_leftWristY = floor(InNumberleftWristY *2);
		leftWristY_divide_1000 = new_leftWristY/1000;
		document.getElementById("volumen").innerHTML = "Volumen = " + leftWristY_divide_1000;		
		song.setVolume(leftWristY_divide_1000);	
	}
 }
function dj() {
	song.play();
	song.setVolumen(1);
	song.rate(1)
}