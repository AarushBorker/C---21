function bounceOff(movingRect, fixedRect) {
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
    }
 }

 function isTouching(box1, box2) {
  if (box1.x-box2.x < box1.width/2+box2.width/2  &&
    box2.x-box1.x < box2.width/2+box1.width/2 &&
    box1.y-box2.y < box1.height/2+box2.height/2  &&
    box2.y-box1.y < box2.height/2+box1.height/2 )   {  
  return true
 
 
  
    }
else{
  return false
  }
}