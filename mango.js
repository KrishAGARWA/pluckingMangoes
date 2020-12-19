class Mango{
constructor(x,y){
 var options={
isStatic:true,
restitution:0,
friction:1
 }
this.body=Bodies.rectangle(x,y,40,40,options)
this.width=width
this.height=height
this.image=loadImage("sprites/mango.png")
    World.add(world,this.body)

 



}
display(){
var po=this.body.position
imageMode(CENTER)
image(this.image,po.x,po.y,40,40)

}




}