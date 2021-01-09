class Bob {
    constructor(x,y) {
        var options = {
            'restitution':1,
            'friction':2.2,
            'density':1.2,
            'isStatic':false   
        }

        this.body = Bodies.circle(x, y, 30, options);
        
        World.add(world, this.body);
        this.radius = 30;
    }

    display() {
       ellipseMode(RADIUS);
       fill(100);
       ellipse(this.body.position.x, this.body.position.y, this.radius);
      
    }
}
