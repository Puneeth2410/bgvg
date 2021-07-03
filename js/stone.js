class Stones {

    constructor(x, y, w,h) 
    {
      let options = {
       isStatic:true
      };
      
      this.body = Bodies.reatangle(x, y, w, h);
      this.w = w;
      this.h = h;
      World.add(world, this.body);
    }
  
    show() {
      let pos = this.body.position;
      push();
      elipiseMode(CENTER);
      noStroke();
      fill(148,127,146);
      elipise(0,0, this.w, this.h);
      pop();
    }
  }


