class block {
    constructor(x, y){
        var options = {
            'restitution':0.8,
			'density':0.01
        }
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 40;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
		    World.add(world, this.body);
		    colors = ["green", "red", "blue", "purple", "orange"];
		    color = random(colors);
    }
    display(){
		rectMode(CENTER);
		push();
		var pos =this.body.position;
		fill(color);
		rect(pos.x, pos.y, this.width, this.height);
		pop();
    }
}