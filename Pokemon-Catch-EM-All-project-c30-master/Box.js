class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/pikachu.png");
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
