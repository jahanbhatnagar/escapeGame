var line,line1,floorimg,wall1,wall2,wall3,wall4,door1,door2,door3,door4,badimg,bad,bad1;
var oues,ouesimg,ans1img,ans1,ans2img,ans2,fireimg,fire,man,manimg,wallimg,tableimg,table;
var AS1IMG,AS2IMG,as1,as2,oues1,oues1img,lossimg,loss,tv,sofa,tv1,tvimg,tv1img,sofaimg;
var oues2img,a1,a2,oues2;
function preload(){
floorimg = loadImage("floor.jpg");
badimg = loadImage("bad.jpg");
ouesimg = loadImage("oues.png");
ans1img = loadImage("ANS1.png");
ans2img = loadImage("ANS2.png");
fireimg = loadImage("fire.png");
manimg = loadImage("man.png");
wallimg = loadImage("wall1.png");
tableimg = loadImage("table.png");
AS1IMG = loadImage("AS1.png");
AS2IMG = loadImage("AS2.PNG");
oues1img = loadImage("oues1.png");
lossimg = loadImage("LOSS.PNG");
tvimg = loadImage("tv.png");
tv1img = loadImage("tv1.png");
oues2img = loadImage("oues2.png");
sofaimg = loadImage("sofa.png");
}
function setup() {
  createCanvas(1400, 600);
  line = createSprite(600,5,1600,10);
  line.shapeColor = "black";
  line1 = createSprite(600,595,1600,10);
  line1.shapeColor = "black";
  wall1 = createSprite(350,250,20,300)
  wall1.addImage(wallimg)
  wall1.scale = 0.7
  wall2 = createSprite(650,350,20,300)
  wall2.addImage(wallimg)
  wall2.scale = 0.7
  wall3 = createSprite(950,230,20,220)
  wall3.addImage(wallimg)
  wall3.scale = 0.7
  wall4 = createSprite(1250,350,20,300)
  wall4.addImage(wallimg)
  wall4.scale = 0.7
  door1 = createSprite(350,545,4,90)
  door1.shapeColor = "red";
  door2 = createSprite(650,55,4,90)
  door2.shapeColor = "red";
  door3 = createSprite(950,535,4,100)
  door3.shapeColor = "red";
  door4 = createSprite(1250,55,4,90)
  door4.shapeColor = "red";
  bad = createSprite(250,90);
  bad.addImage(badimg);
  bad.scale = 0.2;
  bad.depth = 1;
  bad1 = createSprite(750,290);
  bad1.addImage(badimg);
  bad1.scale = 0.2;
  bad1.depth = 1;
  oues = createSprite(600,200);
  oues.addImage(ouesimg);
  oues.visible = false;
  oues.depth = 9;
  oues1 = createSprite(170,170);
  oues1.addImage(oues1img);
  oues1.visible = false;
  oues1.scale = 0.4
  oues1.depth = 9
  ans1 = createSprite(600,300);
  ans1.addImage(ans1img);
  ans1.visible = false;
  ans2 = createSprite(700,300);
  ans2.addImage(ans2img);
  ans2.visible = false;
  as1 = createSprite(150,400);
  as1.addImage(AS1IMG);
  as1.visible = false;
  as2 = createSprite(250,400);
  as2.addImage(AS2IMG);
  as2.visible = false;
  fire = createSprite(50,330);
  fire.addImage(fireimg);
  fire.scale = 0.1;
  fire.depth = 1
  man = createSprite(70,100,20,20);
 // man.addImage(manimg);
 // man.scale = 0.2;
 table = createSprite(70,500);
 table.addImage(tableimg);
 table.scale = 0.1
 table.depth = 1
 loss  = createSprite(800,300);
 loss.addImage(lossimg);
 loss.scale = 1.9;
 loss.visible = false;
 sofa = createSprite(1110,530);
 sofa.addImage(sofaimg);
 sofa.scale = 0.2
 tv = createSprite(530,50);
 tv.addImage(tvimg);
 tv.scale = 0.1  
 tv.depth = 2;
 a1 = createSprite(800,300);
 a1.addImage(tvimg);
 a1.scale = 0.1;
 a1.visible = false
 a2 = createSprite(900,300);
 a2.addImage(tv1img);
 a2.scale = 0.1;
 a2.visible = false;
 oues2 = createSprite(600,300);
 oues2.addImage(oues2img);
 oues2.visible = false;
}

function draw() {
  background(floorimg);
  if(mousePressedOver(a1)){
    door3.destroy();
    oues2.destroy();
    a1.destroy();
    a2.destroy();
  }
  if(mousePressedOver(a2)){
    loss.visible = true;
    oues1.destroy();
    as1.destroy();
    as2.destroy();
  }
  if(mousePressedOver(ans1)){
    door2.destroy();
    oues.destroy();
    ans1.destroy();
    ans2.destroy();
  }
  if(mousePressedOver(as1)){
    door1.destroy();
    oues1.destroy();
    as1.destroy();
    as2.destroy();
  }
  if(mousePressedOver(as2)){
    loss.visible = true
    oues1.destroy();
    as1.destroy();
    as2.destroy();
  }
  if(mousePressedOver(ans2)){
    loss.visible = true
    oues.destroy();
    ans2.destroy();
    ans1.destroy();
  }
  man.bounceOff(bad);
  man.bounceOff(fire);
  man.bounceOff(line);
  man.bounceOff(line1);
  man.bounceOff(wall1);
  man.bounceOff(wall2);
  man.bounceOff(wall3);
  man.bounceOff(wall4);
  man.bounceOff(table);
  man.bounceOff(sofa);
  man.bounceOff(tv);
 // man.bounceOff(door1);
 // man.bounceOff(door2);
 // man.bounceOff(door3);
 // man.bounceOff(door4);
  
  if(man.isTouching(door2)){
    oues.visible = true;
    ans1.visible = true;
    ans2.visible = true;
  }
  if(man.isTouching(door1)){
    oues1.visible = true;
    as1.visible = true;
    as2.visible = true;
  }
  if(man.isTouching(door3)){
    oues2.visible = true;
    a1.visible = true;
    a2.visible = true;
  }
  if(keyDown("W")){
    man.velocityX=0;
    man.velocityY=-7;
  }
  else {
     man.velocityX=0;
    man.velocityY=0;
  }
  
    if(keyDown("S")){
    man.velocityX=0;
    man.velocityY=7;
  }
  
if(keyDown("A")){
    man.velocityX=-7;
    man.velocityY=0;
  }
  
if(keyDown("D")){
    man.velocityX=7;
    man.velocityY=0;
}
  drawSprites();

}