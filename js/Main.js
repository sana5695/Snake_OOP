import GameFiled from "./GameFiled.js";

import GameLoop from "./GameLoop.js";

import Snake from './Snake.js';

import Apple from './Apple.js';

import Score from './Score.js';

class Main {
    constructor(heightFiled, widthFiled) {
        this.gameFiled = new GameFiled(heightFiled, widthFiled);
        this.snake = new Snake();
        this.apple = new Apple(this.gameFiled);
        this.score = new Score(".game-score .score-count", 0);
        this.stop = btn.addEventListener('click', () => {this.gameLoop.cancelAnimate()})
        this.gameLoop = new GameLoop(this.update.bind(this), this.draw.bind(this));
        
    }

    start(){
        this.gameLoop.animate()
    }

    //stop(){
 //       console.log(2)
   //     btn.addEventListener('click', () => {
    //        this.gameLoop.cancelAnimate()
            //cancelAnimationFrame(GameLoop);
            //new Main(document.querySelector('.inputPage'), document.querySelector('.inputLimit'));
           // console.log(Main.snake.x)
    //    })
   // }

    update() {
        this.snake.update(this.apple, this.score, this.gameFiled);
        console.log(1)
        //обновленние данных
    }


    draw() {
        this.gameFiled.context.clearRect(0, 0, this.gameFiled.element.width, this.gameFiled.element.height);
        this.snake.draw(this.gameFiled.context);
        this.apple.draw(this.gameFiled.context);
    }

}


//new Main(document.querySelector('.inputPage'), document.querySelector('.inputLimit'))
//console.log(Snake)
const btn = document.querySelector('.btn');
let button = btn.addEventListener('click', () => {
    
    //GameLoop.cancelAnimate();
    new Main(document.querySelector('.inputPage'), document.querySelector('.inputLimit'));
    //GameLoop.cancelAnimate()
    //GameLoop.cancelAnimate();
   // console.log(Main.snake.x)
})