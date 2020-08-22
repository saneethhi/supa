class Paper{
  constructor(x,y){
    var options = {
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      density: 1.2
     }
    this.body = Bodies.circle(x,y,5,options);
    World.add(world,this.body);
    }
   Display(){
     var pos = this.body.position;
     var angle = this.body.angle; 
     push(); 
     translate(pos.x, pos.y);
     rotate(angle);
     circletMode(PIE);
     fill("red");
     circle(0, 0, this.radius, options);
     pop();
   }
}
