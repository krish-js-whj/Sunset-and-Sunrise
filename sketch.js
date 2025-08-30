const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var response,responseJSON,datetime,hour=0,hourS,minS,hourNmin;
var bg,time=0,Hour=10,gameState="auto" ;

function preload() {
    getBackgroundImg();
  //  getbg()
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
    console.log("BackgroundIsLoading")
     // add condition to check if any background image is there to add
       getBackgroundImg();
   
        if (time>2359){
       time=0;
    }if (Hour>23.59){
        Hour=0;
     }
    Engine.update(engine);
    // write code to display time in correct format here
    fill(225)
    stroke("black")
    strokeWeight(3)
    textSize(50)

   if(gameState=="RT")
   {   if (time<1200)
       text(hourS+":"+minS+" A.M.",50,100);
        else 
        text(hourS-12+":"+minS+" P.M.",50,100);
    }
    else {
        Hour+=0.01;
         getbg()
      //  text(time,100,100)
     // text((Math.round(Hour*10)/10),100,500)
       text(Math.round(Hour),50,100);
    //   text(bg,50,200)

      
    }
    textSize(25)
    noStroke()
    text("Toggle between real time view and auto view by pressing left arrow and right arrow respectively. ",50,650)
    text("You might experience delay while switching",50,675)
    // console.log(time)
  // getbg()

}
function keyPressed(){
    if (keyCode==RIGHT_ARROW){
        gameState="auto";
        getbg()
    }if (keyCode==LEFT_ARROW){
        gameState="RT"
        getBackgroundImg();
    }
}
async function getBackgroundImg(){

     
    
    if (gameState=="RT"){ 
        response = await fetch("https://api.api-ninjas.com/v1/worldtime?timezone=Asia/Kolkata");
     responseJSON = await response.json();
     hour = responseJSON.hour;
     min = responseJSON.min;
     hourS= hour.toString();
     minS= min.toString();
     hourNmin=hourS.concat(minS);
     time=parseFloat(hourNmin)
     console.log(time)
    }
    if (gameState=="auto"){
    }
     if(time>=0400 &&time<=0600)
     {
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
        bg = "sunrise5.png";
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

function getbg()
{if((Math.round(Hour*10)/10)>4.00 &&(Math.round(Hour*10)/10)<=6)
     {
        bg = "sunrise1.png";
    } if((Math.round(Hour*10)/10)>6.00 && (Math.round(Hour*10)/10)<=8.00){
        bg = "sunrise2.png";
    } if((Math.round(Hour*10)/10)>8.00 && (Math.round(Hour*10)/10)<=9.00){
        bg = "sunrise3.png";
    } if((Math.round(Hour*10)/10)>9.00 && (Math.round(Hour*10)/10)<=11.51){
        bg = "sunrise4.png";
    } if((Math.round(Hour*10)/10)>11.50 && (Math.round(Hour*10)/10)<=13.00){
        bg = "sunrise6.png";
    } if((Math.round(Hour*10)/10)>13.00 && (Math.round(Hour*10)/10)<=14.51){
        bg = "sunrise5.png";
    } if((Math.round(Hour*10)/10)>14.50 && (Math.round(Hour*10)/10)<=16.00){
        bg = "sunrise5.png";
    } if((Math.round(Hour*10)/10)>16.00 && (Math.round(Hour*10)/10)<=17.00){
        bg = "sunset7.png";
    } if((Math.round(Hour*10)/10)>17.00 && (Math.round(Hour*10)/10)<=18.00){                                                     
        bg = "sunset8.png";
    } if((Math.round(Hour*10)/10)>18.00 && (Math.round(Hour*10)/10)<=18.51){
        bg = "sunset9.png";
    } if((Math.round(Hour*10)/10)>18.50 && (Math.round(Hour*10)/10)<=19.00){
        bg = "sunset10.png";
    } if((Math.round(Hour*10)/10)>19.00 && (Math.round(Hour*10)/10)<=20.51){
        bg = "sunset11.png";
    } if((Math.round(Hour*10)/10)>20.51 && (Math.round(Hour*10)/10)<=23.99){
        bg = "sunset12.png";
    } if((Math.round(Hour*10)/10)>0.00 && (Math.round(Hour*10)/10)<=3.00){
        bg = "sunset12.png";
    } if((Math.round(Hour*10)/10)>3.00 && (Math.round(Hour*10)/10)<=4.00){
        bg = "sunset11.png";
    }
    backgroundImg = loadImage(bg);}





