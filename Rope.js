class Rope{
  constructor(bodyA,pointB){
    var options={
      bodyA: bodyA,
      pointB: pointB,
      stiffness:1.2,
      length:180

    }
    this.pointB=pointB;
    this.body=Constraint.create(options);
    World.add(world,this.body);
  }
  fly() {
    this.body.bodyA=null;
  }
  attach(body) {
    this.body.bodyA=body;
  
  }
  display() {
    if(this.body.bodyA) {
    var pointA=this.body.bodyA.position;
    var pointB=this.body.pointB;
    strokeWeight(0);
    stroke("blue");
    line(pointB.x,pointB.y,pointA.x,pointA.y)
    }
  }
}