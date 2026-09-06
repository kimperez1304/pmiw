// profe no se porque no me corre y solo me aparece en blanco y no me da ningun error, //
let principal;
  let iniciado = false;
  
  let fondo, adelante;
  let posXa;
let posXm;
let posXad;
let posY;

let velA;
let velM;
let velAd;
let mario=[];
  let frameMario = 0;
let contadorMario = 0;
  function preload() {
    
    principal=loadImage("data/principal.jpg");
    fondo=loadImage("data/fondo3.jpeg");
  adelante=loadImage("data/arbusto.png");
    
    for (let i = 0; i < 5; i++) {
    mario[i] = loadImage("data/Mario" +( i + 1 )+ ".png");
    }
  }
  
  function setup() {
     
  createCanvas(800, 600); 
  imageMode(CENTER, CENTER);
  posXa=width/2;
  
  posXad=width/2;
  posY=height/2;
  velA=1;
  
  velAd=2;
}





function draw() {
 background(220);
 


 if (iniciado == false) {
    image(principal,width/2,height/2,800,600);
    
    dibujarBoton(350, 275, 100, 50, "INICIAR");
  }
  else {
 posXa+=velA;
  if (posXa>=width+width/2) {
    posXa=width/2
  }
  image(fondo, posXa, posY, 800, 600);
  image(fondo, posXa-800, posY, width, height);
  
contadorMario++;

if (contadorMario > 8) {
  frameMario++;
  contadorMario = 0;
}

if (frameMario >= mario.length) {
  frameMario = 0;
}

image(mario[frameMario], 200, 450, 100, 120);
posXad -= velAd; if (posXad < -300) { 
posXad = 0;
}
 


 

  for (let x = posXad; x < width + 3000; x += 300) {
    image(adelante, x, 510, 300, 225);
  }

}

}

function mousePressed() {

  if (iniciado == false) {

    if (detectarZonaR(350, 275, 100, 50)) {

      iniciado = true;

    }
  }
}


function dibujarBoton(x, y, tamX, tamY, nombre) {

  if (detectarZonaR(x, y, tamX, tamY)) {
    fill(0, 255, 255);
  } else {
    fill(0, 0, 255);
  }

  rect(x, y, tamX, tamY, tamY / 4);

  textSize(tamY / 3);
  textAlign(CENTER, CENTER);

  fill(255);

  text(nombre, x + tamX / 2, y + tamY / 2);
}



function detectarZonaR(x, y, tamX, tamY) {

  if (  mouseX > x && mouseX < x + tamX && mouseY > y &&  mouseY < y + tamY) {

    return true;

  } else {

    return false;
  }
  
}
