class Box {
    constructor(x,y,height,angle){
      push();
      super(x,y,20,height,angle);
      Matter.Body.setAngle(this.body, angle);
      visibility=3;
      pop();
    }
  }