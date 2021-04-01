class Box{
    constructor(x, y, width, height) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        if(Math.round(this.body.speed)<1.3){
          push();
          fill("blue")
          rect(this.body.position.x, this.body.position.y, this.width, this.height);
          pop();
        } else {
          World.remove(world,this.body)
          push();
          //translate(this.body.position.x, this.body.position.y);
          this.visibility -= 5
          tint(255,this.visibility)
          pop();
        }
      }
}
  