class Box{
    constructor(x, y, width, height){
        var options = 
        {
            density : 1,
            restitution : 0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world,this.body);

        this.width = width;
        this.height = height;    
    }

    display(){
        var pos = this.body.position;
        push();
        fill("blue");
        stroke ("yellow");
        strokeWeight(3);
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        rect(0, 0, this.width , this.height);
        pop();

    }


}