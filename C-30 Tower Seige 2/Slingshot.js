class Slingshot{
    constructor(bodyA,pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.014,
            length : 2
        }

        this.bodyA = bodyA;
        this.pointB = pointB;
    
        this.body = Matter.Constraint.create(options)

        World.add(world,this.body)
    }
    display(){

        if(this.body.bodyA){
            var pointA = this.bodyA.position
            var pointB = this.pointB
    
            push();
            strokeWeight(5)
            stroke("red")
            line(pointA.x,pointA.y,pointB.x,pointB.y)
            pop();
            console.log(pointA.y)
        }
    }

    fly(){
        this.body.bodyA = null;
    }

    attach(body){
        this.body.bodyA = body
    }
  };