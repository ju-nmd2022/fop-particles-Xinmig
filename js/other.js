import Particle from "./particle.js";

export default class New extends Particle {
  constructor(x, y) {
    super(x, y);
    this.x = x + Math.random() * 200;
    this.y = y + Math.random();
    this.speed = 6 + Math.random();
    this.time = 2;
    this.maxTime = 20 + Math.floor(Math.random() * 30);
  }

  update() {
    // update the position of your particle
    this.y = this.y;
    this.x = this.x + 30;
    this.speed = this.speed * 0.2;
    this.time = this.time + 8;
  }

  draw() {
    //   draw the particle
    push();
    translate(this.x, this.y);
    stroke(0);
    fill(100, 35, 66);
    ellipse(0, 0, 10);
    pop();
  }

  isDead() {
    if (this.time > this.maxTime) {
      return true;
    } else {
      return false;
    }
  }
}
