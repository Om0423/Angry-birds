class Chain {
  constructor(bodyA,bodyB){
  var options = {
  bodyA: bodyA, 
  bodyB: bodyB,
  stiffness: 0.04,
  length: 10

  }
  this.chain = contraint.create(options);
  World.add(world.thisChain);
  }
  display(){
  var pointA = this.chain.bodyA.position;
  var pointB = this.chain.bodyB.position;

  strokWeight(4);
  line(pointA.x,pointA.y,pointB.x,pointB.y);
  

  }

}