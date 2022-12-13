import Config from "./config.js";



class Snake {
    constructor() {
        this.config = new Config();
        this.position = [4, 4]

        this.control();
        

    }



    update() {

    }

    draw() {

        let snakeBody = [document.querySelector('[posX = "' + this.position[0] + '"][posY = "' + this.position[1] + '"]'),
            document.querySelector('[posX = "' + (this.position[0] - 1) + '"][posY = "' + this.position[1] + '"]'),
            document.querySelector('[posX = "' + (this.position[0] - 2) + '"][posY = "' + this.position[1] + '"]')
        ]
        //console.log (snakeBody)
       for (let i = 0; i < snakeBody.length; i++) {
            snakeBody[i].classList.add("snakeBody");
        }
        snakeBody[0].classList.add("snakeHead");

    }

    death() {



    }

    control() {


    }
}

export default Snake;