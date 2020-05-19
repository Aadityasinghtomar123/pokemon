class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    let poke = ['sprites/pokeball1.png','sprites/pokeball2.png','sprites/pokeball3.png','sprites/pokeball4.png'];
    this.image = loadImage(random(poke));
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
