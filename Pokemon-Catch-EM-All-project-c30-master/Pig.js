class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/charmander.png");
    this.visibility = 255;
  }
  display(){
    
    if(this.body.speed<4){
      super.display();
    
    
   
  }
  
else{
  World.remove(world, this.body);
 
}
  }
};