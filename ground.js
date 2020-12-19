class Ground{
constructor(){
this.body=Bodies.rectangle(400,650,1500,10,{isStatic:true})
this.width=width
this.height=height
World.add(world,this.body)


}
display(){
var ps=this.body.position
rectMode(CENTER)
rect(ps.x,ps.y,1600,10)


}


}