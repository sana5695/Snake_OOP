class Snake{
    constructor(size, color, startPosition){
        // инициализация змейки
        // размер
        // цвет
        // начало
        this.size = size;
        this.color = color;
        this.startPosition = startPosition;
    }

    death(){
        //логика проигрыша
    }

    update(){
        //логика обновления
    }

    draw() {
        // отрисовка змейки
        let coordinate = this.startPosition.join('');
        const position = document.getElementsByClassName(coordinate);
        position.classList.remove('block');
        return position;
    }

    control(){
        //обработка нажатий
    }
    
}

export default Snake;