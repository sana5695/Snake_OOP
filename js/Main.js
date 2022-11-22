import GameFiled from "./GameFiled.js";

import Snake from './Snake.js';

import Apple from './Apple.js';

import Score from './Score.js';

class Main {
    constructor(){
        this.gameFiled = new GameFiled(10, 10);
        this.snake = new Snake(3,'red',[0,0]);
        this.apple = new Apple('red');
        this.score = new Score(0);
    }

    update(){
            //обновленние данных
    }

    
    draw(){
        //отрисовка
    }

}

export default Main;


const main = new Main();




main.gameFiled.draw();
main.snake.draw();

//console.log(main.snake.draw())
//console.log(main.snake.draw())
console.log(main.snake.draw())
//console.table(main);