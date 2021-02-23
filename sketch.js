var dog
var database, foodS, foodStock

function preload()
{
	dogImg = loadImage("images/dogImg.png")
  happydogImg = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite(250, 250, 80, 80)
  dog.addAnimation("dogimage", dogImg)
  dog.scale = 0.1
  foodStock=database.ref('food')
  foodStock.on("value",readStock)
}


function draw() {  
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happydogImg)
  }
  drawSprites();
  stroke(3)
  text("foodStock: "+ foodStock, 250, 230)

}
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  if(x<-0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}


