import Config from "./config.js";

class GameLoop{
    constructor(update, draw, ) {

        this.update = update;
        this.draw = draw;

        this.config = new Config();

        this.animate = this.animate.bind(this);
        this.control
        this.animate();

    }

    animate() {
        

        this.animateFun = requestAnimationFrame( this.animate );
        if ( ++this.config.step < this.config.maxStep) {
            return;
        }
        this.config.step = 0;

        this.update();
        this.draw();
        //cancelAnimationFrame(st)
        //if 

    }

    cancelAnimate(){
        cancelAnimationFrame(this.animateFun)
    }
}

export default GameLoop;