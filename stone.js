class Stone{
constructor(){
 var options={
isStatic:false,
restitution:0,
friction:1,
density:1.2
 }
this.body=Bodies.rectangle(100,500,30,30,options)
this.width=width
this.height=height
this.image=loadImage("sprites/stone.png")
    World.add(world,this.body)

 



}
display(){
var po=this.body.position
imageMode(CENTER)
image(this.image,po.x,po.y,30,30)

}




}