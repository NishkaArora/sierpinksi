let points = [];
let count = 0;
let A,B,C;
let x,y =0.0;


function setup() {
  createCanvas(1000, 1000, WEBGL);
  A = createVector(-width/2,-height/2);
  B = createVector(-width/2,-height/2);
  C = createVector(-width/2,-height/2);
  
  noStroke();
  //fill(255);
  ellipse(A.x, A.y,5,5);
  ellipse(B.x, B.y,5,5);
  ellipse(C.x, C.y,5,5);
  
}

function draw() {
  background(0);

  fill(255,0,0);
  ellipse(A.x, A.y,2,2);
  ellipse(B.x, B.y,2,2);
  ellipse(C.x, C.y,2,2);
  
  fill(255);
  
  let dice = floor(random(0, 3));
  
  if (points.length>1) {
    
    if(dice == 0)
      {
        x = ((points[points.length-1].x+A.x)/2);
        y = ((points[points.length-1].y+A.y)/2);
      }
    else if(dice == 1)
      {
        x = ((points[points.length-1].x+B.x)/2);
        y = ((points[points.length-1].y+B.y)/2);      
      }
      
    else if(dice == 2)
      {
        x = ((points[points.length-1].x+C.x)/2);
        y = ((points[points.length-1].y+C.y)/2);      
      }
  }
  
  if(count>3){
    drawPoints();
    append(points, createVector(x, y)); //add new point to array of dots to draw
  }
  
}

function drawPoints() {
  for(let i =0; i<points.length;i++)
  {
    fill(255);
    ellipse(points[i].x, points[i].y, 2, 2);
  }
}

function mouseClicked(event) {
  
  if(count==0){
  A.x = pmouseX - (width/2);
  A.y = pmouseY - (height/2);
  count++;
  } else if(count == 1){
  B.x = pmouseX - (width/2);
  B.y = pmouseY - (height/2);
    count++;
    
  } else if(count == 2) {
  C.x = pmouseX - (width/2);
  C.y = pmouseY - (height/2);
      count++;
  }
  else if (count == 3)
  {
    x= pmouseX-(width/2);
    y=pmouseY-(height/2);
    append(points, createVector(x,y));
    count++;
  }
  
  console.log(event);
}
