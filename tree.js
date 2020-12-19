class Tree{
constructor(){
 var options={
isStatic:true,
 }
this.body=Bodies.rectangle(1000,450,300,300,options)
this.width=width
this.height=height
this.image=loadImage("sprites/tree.png")
    World.add(world,this.body)

 



}
display(){
var po=this.body.position
imageMode(CENTER)
image(this.image,po.x,po.y,400,400)

}




}