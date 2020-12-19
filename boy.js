class Boy{
constructor(){
 var options={
isStatic:true,
 }
this.body=Bodies.rectangle(200,600,200,200,options)
this.width=width
this.height=height
this.image=loadImage("sprites/boy.png")
    World.add(world,this.body)

 



}
display(){
var po=this.body.position
imageMode(CENTER)
image(this.image,po.x,po.y,200,200)

}




}