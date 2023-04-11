import Particle from "./particle.js";

export default class New extends Particle {
  constructor(x, y) {
    super(x, y);
    this.x = x + (Math.random() * 180 - 30);
    this.y = y + (Math.random() * 180 - 30);
    this.speed = 6 + Math.random();
    this.time = 2;
    this.maxTime = 20 + Math.floor(Math.random() * 30);
  }

  update() {
    // update the position of your particle
    this.y = this.y - this.speed;
    this.speed = this.speed * 0.5;
    this.time = this.time + 5;
  }

  draw() {
    //   draw the particle
    push();
    translate(this.x, this.y);
    stroke(2);
    fill(99, 125, 266);
    point(0, 0, 6);
    noStroke();
    ellipse(0, 0, 20, 20, 3);
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
