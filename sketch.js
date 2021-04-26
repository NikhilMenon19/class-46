function preload(){
dum = loadImage("dummy-removebg-preview.png")
gen = loadImage("gen.png")
guddu = loadImage("guddu.png")
}

function setup() {
  createCanvas(displayWidth-30,displayHeight-110);
 dum1= createSprite(100, 80, 50, 50);
 dum1.addImage(dum)
 dum1.scale=0.3
 dum2= createSprite(100, 290, 50, 50);
 dum2.addImage(dum)
 dum2.scale=0.3  
 dum3= createSprite(100, 520, 50, 50);
 dum3.addImage(dum)
 dum3.scale=0.3 
 
 shooter=createSprite(width-130,height/2)
 shooter.addImage(gen)
 shooter.scale=0.4
 shooter.rotation=360

 edges=createEdgeSprites();
}


function draw() {
  background(0);  

shooter.velocityY=0;

if(keyDown("UP")){
shooter.velocityY=-3
}

if(keyDown("DOWN")){
  shooter.velocityY=3
  }

shooter.collide(edges)

if(keyDown("enter") && frameCount%9===0){
  bullet=createSprite(shooter.x-130,shooter.y+10)
  bullet.addImage(guddu)
  bullet.velocityX=-16
  bullet.scale=0.06
}




  drawSprites();
}
