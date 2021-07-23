class Dust
{
  constructor(x,y)
  {
      var options = {isStatic:false ,
      restitution: 0.3,
      density:0.5,
      friction:1.5
    };
      this.bodyX = x;
      this.bodyY = y;
      this.bodyW =20;
      this.bodyH = 20;

      this.body = Bodies.rectangle(this.bodyX,this.bodyY,this.bodyW,this.bodyH,options);
      World.add(world,this.body);
  }
  display()
  {

    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);

    rectMode(CENTER);
    fill("red");
    rect(0,0,this.bodyW,this.bodyH); 
    pop();
  }
};