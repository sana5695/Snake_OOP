import GameField from "./GameField.js";

import GameLoop from "./GameLoop.js";

import Snake from './Snake.js';

import Apple from './Apple.js';

import Score from './Score.js';

class Main {
    constructor(button1, button2, button3) {

        this.gameField = new GameField(button1);
      
        this.snake = new Snake();
        this.apple = new Apple(this.gameField);
        this.score = new Score(".game-score .score-count", 0);
        new GameLoop(this.update.bind(this), this.draw.bind(this), button3, button2);
        


    }

    

    update() {
        // console.log(12)
        this.snake.update(this.apple, this.score, this.gameField);
        //console.log(1)
        //обновленние данных
    }


    draw() {
        //this.gameField.context.clearRect(0, 0, this.gameField.element.width, this.gameField.element.height);
        
        this.gameField.draw()
        this.snake.draw();
        //this.apple.draw(this.gameField.context);
    }

}
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

new Main(btn1, btn2, btn3);
