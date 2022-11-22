class Score{
    constructor(score){
        // начальное количество очков
        this._score = score;
    }
    
    draw(){
        //отрисовка очков
        return this._score
    }

    increase(){
        //увеличение очков
        this._score += 1
        this.draw();
    }

    reset(){
        // сброс очков
        this._score = 0;
        this.draw();
    }

}

export default Score;