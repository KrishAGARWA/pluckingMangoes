class Stone{
constructor(){
 var options={
isStatic:false,
restitution:0,
friction:1,
density:1.2
 }
this.body=Bodies.circle(100,500,30,options)
this.radius=30

this.image=loadImage("stone.png")
    World.add(world,this.body)

 



}
display(){
var po=this.body.position
imageMode(CENTER)
image(this.image,po.x,po.y,30,30)
ellipseMode(RADIUS)
//ellipse(po.x,po.y,30,30)
}




}