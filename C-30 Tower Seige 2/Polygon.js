class Polygon{
    constructor(x, y, radius) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        translate(this.body.position.x,this.body.position.y);
        push();
        fill("red")
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius, this.radius);
        pop();
      }
}