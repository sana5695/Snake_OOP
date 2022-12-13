import Config from "./config.js";
import { getRandomInt } from "./RandomFunction.js";

class Apple {
    constructor(canvas ){
        this.x = 0;
        this.y = 0;
        this.canvas = canvas;

        this.config = new Config();
        this.randomPosition();
    }

    draw(context){
        context.beginPath();
        context.fillStyle = "#AFF034";
        context.fillRect(this.x, this.y, this.config.sizeCell-5, this.config.sizeCell-5);
        context.fill();
    }

    randomPosition(){
        //this.x = getRandomInt( 0, this.canvas.element.width / this.config.sizeCell ) * this.config.sizeCell;
        //.y = getRandomInt( 0, this.canvas.element.height / this.config.sizeCell ) * this.config.sizeCell;
    }
}

export default Apple;