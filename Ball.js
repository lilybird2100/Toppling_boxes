//creating blueprint  for ball body
class Ball{
    constructor(x,y,radius){
        var ball_options = {
            restitution: 1
        }
    // "this" is a keyword. it is used to provide refernce properties for class
    this.body = Bodies.circle(x,y,radius,ball_options);
    this.radius= radius;
    World.add(world,this.body); 
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius); 
    }

}