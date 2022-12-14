import Config from "./config.js";
import { getRandomInt } from "./RandomFunction.js";


class Apple {
    constructor( button2){
        this.x = 1;
        this.y = 1;
        this.heightField = document.querySelector('.hight')
        this.widthField = document.querySelector('.width')
        this.button2 = button2.addEventListener('click', () => {
            this.hight = Number(this.heightField.value);
            this.width = Number(this.widthField.value);
        })
        this.eat
        this.config = new Config();
        
    }

    draw(){
        //cancelAnimate()
        console.log(this.width)
        
        this.eat = document.querySelector('[posx = "' + this.x + '"][posy = "' + this.y + '"]')
        console.log(this.eat)
        this.eat.classList.add("apple");
        
    }

    randomPosition(){
        this.x = getRandomInt( 1, this.width);
        this.y = getRandomInt( 1, this.hight);
    }

    remove(){
        console.log(this)
        //.eat = document.querySelector('.apple')
       this.apple.eat.classList.remove('apple');
       this.apple.randomPosition();
       //this.apple.draw()
    }

}

export default Apple;