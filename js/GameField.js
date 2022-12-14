import Config from "./config.js";

class GameField {
    constructor(button1, button3) {
        this.heightField = document.querySelector('.hight')
        this.widthField = document.querySelector('.width')
        
        this.config = new Config();
        this.field = document.getElementById('field');
        this.cell = document.getElementsByClassName('cell');
        this.button1 = button1.addEventListener('click', () => {
            this.hight = this.heightField.value;
            this.width = this.widthField.value;
            this.x = 1;
            this.y = this.heightField.value;

            
            this.draw();
        })

        this.button3 = button3.addEventListener('click', () => {

            this.draw();
        })





        //this.update();
        //this.element.width = Number(widthField.value*this.config.sizeCell);
        //this.element.height = Number(heightField.value*this.config.sizeCell);
        //console.log(document.getElementById("field"))
        //container.appendChild( this.element );
        //this.context = this.element.getContext( "2d" );
        //console.log(document.getElementById("field"));
    }

    draw() {

        this.clear()
        this.field.style.width = (`${this.config.sizeCell * this.width}px`)
        this.field.style.height = (`${this.config.sizeCell * this.hight}px`)
        for (let i = 0; i < (this.hight * this.width); i++) {



            let cels = document.createElement('div');

            this.field.appendChild(cels);

            cels.classList.add('cell');
        }

        for (let i = 0; i < this.cell.length; i++) {
            //console.log(this.cell.length)
            if (this.x > this.width) {
                this.x = 1;
                this.y--;
            }
            this.cell[i].setAttribute('posX', this.x);
            this.cell[i].setAttribute('posY', this.y);
            this.x++;
            //console.log(this.y)
            //console.log(this.x)
            console.log(this.cell.length)
        }

    };

    clear() {
        console.log('clear')
        this.y= Number(this.heightField.value)+1;
        this.field.innerHTML = ''
        return
    }
}






export default GameField;