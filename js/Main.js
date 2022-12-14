import GameField from "./GameField.js";

import GameLoop from "./GameLoop.js";

import Snake from './Snake.js';

import Apple from './Apple.js';

import Score from './Score.js';

import Config from "./config.js";

class Main {
    constructor(button1, button2, button3, highScore) {

        this.gameField = new GameField(button2, button3);
        this.config = new Config(button1, button2, button3)
        this.apple = new Apple(button2);
        this.score = new Score(".game-score .score-count", 0, highScore);
        this.snake = new Snake(button3, this.apple.x, this.apple.y, this.stop.bind(this), this.apple.remove.bind(this), this.score.incScore.bind(this.score), this.score.setToZero.bind(this.score) );
        
        this.gameLoop = new GameLoop(this.update.bind(this), this.draw.bind(this), button3, button2, );
        


    }

    

    update() {
        // console.log(12)
        this.snake.update(this.apple, this.score, this.gameField);
        //console.log(1)
        //обновленние данных
    }


    draw() {
        //this.gameField.context.clearRect(0, 0, this.gameField.element.width, this.gameField.element.height);
        this.apple.draw();
        //this.gameField.draw()
        this.snake.draw();
        
        
    }

    stop(){this.gameLoop.cancelAnimate()}

}
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
let record = document.querySelector('.local')
let highScore = +localStorage.getItem('Score')
record.innerHTML = highScore
console.log(highScore)

new Main(btn1, btn2, btn3, highScore);
