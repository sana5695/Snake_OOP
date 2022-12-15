import Config from "./config.js";



class Snake {
    constructor(button3, appleX, appleY, stop, remove, score, setZero) {
        this.config = new Config();
        this.score = score
        this.setZero = setZero
        this.remove = remove
        this.stop = stop
        this.dx
        this.dy
        this.appleX = appleX
        this.appleY = appleY
        this.apple = document.querySelector('.apple')
        this.button3 = button3.addEventListener('click', () => {
            
            this.hight = document.querySelector('.hight').value;
            this.width = document.querySelector('.width').value;

            this.position = [Math.round(this.width / 2), Math.round(this.hight / 2)]
            console.log(this.position)

            this.snakeBody = [document.querySelector('[posX = "' + this.position[0] + '"][posY = "' + this.position[1] + '"]'),
                document.querySelector('[posX = "' + (this.position[0] - 1) + '"][posY = "' + this.position[1] + '"]'),
                document.querySelector('[posX = "' + (this.position[0] - 2) + '"][posY = "' + this.position[1] + '"]')
            ]
            for (let i = 0; i < this.snakeBody.length; i++) {
                this.snakeBody[i].classList.add("snakeBody");
            }
            this.snakeBody[0].classList.add("snakeHead");

            this.snakeCoordinates
            this.direction = 'right'
            setZero()
            
        })
        

        this.control();
        this.steps = true
        
        

    }



    update() {

    }


    draw() {

        let apple = document.querySelector('.apple')
        this.snakeCoordinates = [Number(this.snakeBody[0].getAttribute('posX')), Number(this.snakeBody[0].getAttribute('posY'))]
        console.log(this.snakeCoordinates)
        console.log(this.hight)
        this.snakeBody[0].classList.remove('snakeHead');
        this.snakeBody[this.snakeBody.length - 1].classList.remove('snakeBody');
        this.snakeBody.pop();
        if (this.direction == 'right') {
            if (this.snakeCoordinates[0] < this.width) {
                this.snakeBody.unshift(document.querySelector(`[posX = "${(+this.snakeCoordinates[0] + 1)}"][posY = "${this.snakeCoordinates[1]}"]`))
            } else {
                this.snakeBody.unshift(document.querySelector(`[posX = "1"][posY = "${this.snakeCoordinates[1]}"]`))
            };
        } else if (this.direction == 'left') {
            if (this.snakeCoordinates[0] > 1) {
                this.snakeBody.unshift(document.querySelector(`[posX = "${(+this.snakeCoordinates[0] - 1)}"][posY = "${this.snakeCoordinates[1]}"]`))
            } else {
                this.snakeBody.unshift(document.querySelector(`[posX = "${this.width}" ][posY = "${this.snakeCoordinates[1]}"`))
            };
        } else if (this.direction == 'down') {
            if (this.snakeCoordinates[1] > 1) {
                this.snakeBody.unshift(document.querySelector(`[posX = "${this.snakeCoordinates[0]}"][posY = "${(+this.snakeCoordinates[1] - 1)}"]`))
            } else {
                this.snakeBody.unshift(document.querySelector(`[posX = "${this.snakeCoordinates[0]}"][posY = "${this.hight}"]`))
            };
        } else if (this.direction == 'up') {
            if (this.snakeCoordinates[1] < this.hight) {
                this.snakeBody.unshift(document.querySelector(`[posX = "${this.snakeCoordinates[0]}"][posY = "${(+this.snakeCoordinates[1] + 1)}"]`))
            } else {
                this.snakeBody.unshift(document.querySelector(`[posX = "${this.snakeCoordinates[0]}"][posY = "1"]`))
            };
        } else if (this.direction == 'stop'){this.snakeBody.unshift(document.querySelector(`[posX = "${this.snakeCoordinates[0]}"][posY = "${(this.snakeCoordinates[1])}"]`))}

        if (this.snakeBody[0].getAttribute('posX') == apple.getAttribute('posX') && this.snakeBody[0].getAttribute('posY') == apple.getAttribute('posY')) {
            this.remove()
            let x = this.snakeBody[this.snakeBody.length - 1].getAttribute('posX');
            let y = this.snakeBody[this.snakeBody.length - 1].getAttribute('posY');
            this.snakeBody.push(document.querySelector('[posX ="' + x + '"][posY ="' + y + '"]'));
            this.score()

        }

        if (this.snakeBody[0].classList.contains('snakeBody')) {
            console.log('!!!!!')
            this.stop()
            
        }

        this.snakeBody[0].classList.add('snakeHead');
        for (let i = 0; i < this.snakeBody.length; i++) {
            this.snakeBody[i].classList.add("snakeBody");
        }
        this.steps = true;


    }


    control() {
        document.addEventListener("keydown", (e) => {
            if (this.steps == true) {
                if (e.keyCode == 37 && this.direction != 'right') {
                    this.direction = 'left';
                    this.steps = false;
                } else if (e.keyCode == 38 && this.direction != 'down') {
                    this.direction = 'up';
                    this.steps = false;
                } else if (e.keyCode == 39 && this.direction != 'left') {
                    this.direction = 'right';
                    this.steps = false;
                } else if (e.keyCode == 40 && this.direction != 'up') {
                    this.direction = 'down';
                    this.steps = false;
                }
            }
        });

    }
}

export default Snake;