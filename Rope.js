class Rope {
    constructor(body1, point2, offsetX, offsetY) {
        var options = {
            bodyA: body1,
            bodyB:body2,
            pointB : {x: this.offsetX, y: this.offsetY}
        }

        this.pointB = pointB;
        this.rope = Constraint.create(options);
        
        World.add(world,this.rope);

    }

    display(){


        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;

        push();

        strokeWeight(3);
        stroke("white")
        line(pointA.x,pointA.y,pointB.x,pointB.y);

        pop();
    }
}