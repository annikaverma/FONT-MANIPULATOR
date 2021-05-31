rwristx=0;
lwristx=0; 
distance=0;
nosex=0;
nosey=0;

function preload(){

}
function setup(){
canvas=createCanvas(500,600);
canvas.center();
video=createCapture(VIDEO);
video.size(500,600);
poseNet=ml5.poseNet(video ,modelLoaded);
poseNet.on('pose', GetResult);
}
function modelLoaded(){
   console.log("PoseNet is initialized");
}
function GetResult(results){
   if(results.length>0){
      console.log(results);

      rwristx=results[0].pose.rightWrist.x;
      lwristx=results[0].pose.leftWrist.x;
   
      distance=lwristx-rwristx;
      dis=distance.toFixed(2)
      console.log(distance);
      document.getElementById("fontSize").innerHTML=dis + "px";
      
      
      
   }
  
      
   }
function draw(){
   background('#FF6666');
   fill( '#FF0000');
   stroke('#800000');
   textSize(distance);
   text('Naytik',20,300);
   fill(0,102,153); 
  
}


