function preload(){
  // put preload code here
}

var colorList = [80,
 110,
 140,
 170,
 200
];

var colorList1 = ['#ff0000',
 '#3E000C',
 '#FB4B4E',
 '#FFCBDD',
 '#7C0B2B'
];

var colorList2 = ['#ffcc00',
 '#F18805',
 '#FF6201',
 '#E55934',
 '#FFD289'
];

var colorList3 = ['#00FF00',
 '#1F2421',
 '#285238',
 '#285238',
 '#18FF6D'
];

var colorList4 = ['#0000ff',
 '#0060A5',
 '#2EC0F9',
 '#222E50',
 '#88CCF1'
];

function setup() {

}

function draw() {

  createCanvas(windowWidth,windowHeight);
  background("#000000")
  noStroke();
  frameRate(10);


      for(var y = 0; y < windowHeight; y += 20)
      {
      for(var x = 0; x < windowWidth; x += 40)
      {

      if(mouseX < pmouseX && abs(mouseX-pmouseX) > abs(mouseY-pmouseY)){
        var index = (floor(random() * colorList1.length));
        var colorHex = colorList1[index];
        fill(color(colorHex));
      }

      else if(mouseX > pmouseX && abs(mouseX-pmouseX) > abs(mouseY-pmouseY)){
        var index = (floor(random() * colorList2.length));
        var colorHex = colorList2[index];
        fill(color(colorHex));
      }

      else if(mouseY < pmouseY && abs(mouseX-pmouseX) < abs(mouseY-pmouseY)){
        var index = (floor(random() * colorList3.length));
        var colorHex = colorList3[index];
        fill(color(colorHex));
      }
      else if(mouseY > pmouseY && abs(mouseX-pmouseX) < abs(mouseY-pmouseY)){
        var index = (floor(random() * colorList4.length));
        var colorHex = colorList4[index];
        fill(color(colorHex));
      }

      else {
        var index = (floor(random() * colorList.length));
        var colorHex = colorList[index];
        fill(color(colorHex));
      }

        ellipse(x+10,y+10,random()*20);
      }
    }
    stroke("white");
    strokeWeight(20);
    line(pmouseX, pmouseY, mouseX, mouseY);
    fill("black");
    noStroke();
    rect(0,0,windowWidth,40);
    fill("white");
    textSize(20);
    text('Move UP, DOWN, RIGHT or LEFT to change colors', windowWidth/2-250, 30)
}
