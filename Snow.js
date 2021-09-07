class Snow{
    constructor(x,y){
        var options={
            restitution:1,
            isStatic:false
            
        }
        this.r=30;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        this.image=loadImage("snow5.webp");
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
        

    }
}