import Config from "./config.js";

class GameLoop{
    constructor(update, draw, button3, button2, button1) {

        this.update = update;
        this.draw = draw;
        
        this.config = new Config();

        this.animate = this.animate.bind(this);
        this.control
        this.stop = button2.addEventListener('click', () => {this.cancelAnimate()})
        this.start = button3.addEventListener('click', () => {this.cancelAnimate();this.animate();})
        

    }

    animate() {
        
        
        this.animateFun = requestAnimationFrame( this.animate );
        if ( ++this.config.step < this.config.maxStep) {
            return;
        }
        this.config.step = 0;
        console.log('loop')
        
        this.update();
        this.draw();

    }

    cancelAnimate(){
        console.log('stop')
        cancelAnimationFrame(this.animateFun)
    }
}

export default GameLoop;