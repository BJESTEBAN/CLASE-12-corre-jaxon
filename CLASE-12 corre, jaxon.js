var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  loadImage(path.png)
  //loadAnimation de boy (niño)
 loadAnimation(jake1.png)
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino)
  sprite(path.png)
//agregar imagen de path
agregar(path.png)
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.scale=1.2;

//crear sprite de boy (niño)
sprite(jake2.png)
//agregar animación para boy
boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
visibilidad (false)
//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
visibilidad (falso)
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  M0ousex (izquierda,derecha)
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  invisible (left)
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
