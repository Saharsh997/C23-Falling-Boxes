class Ground{
    constructor(x, y, width, height1){
        var options = 
        {
            isStatic: true
        }
        this.rect = Bodies.rectangle(x, y, width, height1, options);
        World.add(world, this.rect);

        this.width = width;
        this.height = height1;

    }

    display(){
        rectMode(CENTER);
        rect(this.rect.position.x, this.rect.position.y, this.width, this.height);
    }
} 
