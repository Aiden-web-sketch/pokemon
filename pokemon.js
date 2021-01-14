class Pokemon {
    constructor(x, y,radius) {
 
     var options={
         restituion:0.4
     }

      this.body=Bodies.circle(x,y,radius,options)
      World.add(world, this.body);
this.color=color("white")
this.Image=loadImage("images/images")
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill(this.color);
     imageMode(RADIUS);
      image(this.Image,0, 0);
      pop();
    }
  };