---
title: processing js 动画与游戏制造
thumbnail: http://processingjs.org/images/header.png
date: 2017-05-17 11:37:25
tags: [ js, 动画, processing ]
banner: http://processingjs.org/images/header.png
---

# processing 动画转换

  <canvas width="300" height="300" data-processing-sources="{% asset_path a.pde %}" ></canvas>

# 如何使用

Processing 有自己的 动画规则语言 较为易懂易用

你需要一个
 - processing.js

 - anything.pde
 
 - fire.html

 fire.html
 
 ``` html
 <script src="processing.js"></script> 
<canvas data-processing-sources="anything.pde"></canvas>

 ```

anything.pde
``` javascript
// Global variables
float radius = 50.0;
int X, Y;
int nX, nY;
int delay = 16;

// Setup the Processing Canvas
void setup(){
  size( 300, 300 );
  strokeWeight( 10 );
  frameRate( 15 );
  X = width / 2;
  Y = height / 2;
  nX = X;
  nY = Y;  
}

// Main draw loop
void draw(){
  
  radius = radius + sin( frameCount / 4 );
  
  // Track circle to new destination
  X+=(nX-X)/delay;
  Y+=(nY-Y)/delay;
  
  // Fill canvas grey
  background( 100 );
  
  // Set fill-color to blue
  fill( 0, 121, 184 );
  
  // Set stroke-color white
  stroke(255); 
  
  // Draw circle
  ellipse( X, Y, radius, radius );    
  // yellow square
fill(255, 255, 0);
rect(70, 70, 20, 20);  

// red square
pushMatrix();
fill(255, 0, 0); 
rotate(30);
translate(70, 70);
scale(2.0);
rect(0, 0, 20, 20);
popMatrix();

// green square
pushMatrix();
fill(218, 232, 193); 
translate(70, 70);
rotate(30);
scale(2.0);
rect(0, 0, 20, 20);
popMatrix();
              
}


// Set circle's next destination
void mouseMoved(){
  nX = mouseX;
  nY = mouseY;  
}

```

就这样 就是上 显示的 

例子可以看 ：[processing 学习](http://processingjs.org/learning/)

[大师级 ](https://www.openprocessing.org/browse#)

或者 [可汗学院](https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations?ref=resume_learning#concept-intro)

  <canvas width="300" height="300" data-processing-sources="{% asset_path b.pde %}" ></canvas>
