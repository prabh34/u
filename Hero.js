class Hero {
    constructor(x,y,width,height) {
      var options = {
          restitution:0,
		  friction:0.1,
		  density:0.1
      }
	  
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("superhero2.png")
      World.add(world, this.body);
    }
    display(){
	  var angle=this.body.angle;
      var pos =this.body.position;
	  push();
	  translate(this.body.position.x,this.body.position.y);
      rectMode(CENTER);
	  image(this.image,0,0,this.width,this.height);
	  pop();

      //fill("white");
      //rect(pos.x, pos.y, this.width, this.height);
    }
  };