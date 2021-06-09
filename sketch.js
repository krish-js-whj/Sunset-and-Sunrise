const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg,time=0,gameState="RT" ;

function preload() {
    getBackgroundImg();
}
function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw()
{   if(backgroundImg){
    background(backgroundImg);
    }
    else 
    background(0)
     // add condition to check if any background image is there to add
     if (gameState=="RT"){

     }
    else{
        time+=1
    }Engine.update(engine);
    // write code to display time in correct format here
    fill(0)
    textSize(50)
    text(time,50,100)
    textSize(25)
    fill(225)
    text("Toggle between real time view and auto view by pressing left arrow and right arrow respectively. ",50,650)
   // console.log(time)
getBackgroundImg();
}
async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    var min = datetime.slice(14,16);
    var hour= hour.toString();
    var min= min.toString();
    var hourNmin=hour.concat(min)
    if (gameState=="auto"){
     if (time>2359){
       time=0;
    }
    }
   else{
    time=parseFloat(hourNmin)
    }
     
    if(time>=0400 && time<=0600){
        bg = "sunrise1.png";
    }else if(time>=0601 && time<=0800){
        bg = "sunrise2.png";
    }else if(time>=0801 && time<=0900){
        bg = "sunrise3.png";
    }else if(time>=0901 && time<=1130){
        bg = "sunrise4.png";
    }else if(time>=1131 && time<=1300){
        bg = "sunrise6.png";
    }else if(time>=1301 && time<=1430){
        bg = "sunrise5.png";
    }else if(time>=1431 && time<=1600){
        bg = "sunrise6.png";
    }else if(time>=1601 && time<=1700){
        bg = "sunset7.png";
    }else if(time>=1701 && time<=1800){
        bg = "sunset8.png";
    }else if(time>=1801 && time<=1830){
        bg = "sunset9.png";
    }else if(time>=1830 && time<=1900){
        bg = "sunset10.png";
    }else if(time>=1901 && time<=2359){
        bg = "sunset11.png";
    }else if(time>=0 && time<=0300){
        bg = "sunset12.png";
    }else if(time>=0301 && time<=0600){
        bg = "sunset11.png";
    }

    backgroundImg = loadImage(bg);

}
function keyPressed(){
    if (keyCode==RIGHT_ARROW){
        gameState="auto";
    }if (keyCode==LEFT_ARROW){
        gameState="RT"
    }
}