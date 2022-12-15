class Score{
    constructor( scoreBlock, score = 0, highScore) {

        this.scoreBlock = document.querySelector( scoreBlock );
        this.score = score;
        this.highScore = highScore
        this.draw();
        //record = document.querySelector('.local')

    }
    
    incScore() {
        this.score++;
        this.draw();
        if (this.score > this.highScore){
            console.log(44)

            localStorage.setItem('Score', this.score.toString());
        
        }
    }

    setToZero() {
        this.score = 0;
        this.draw();
    }

    draw() {
        this.scoreBlock.innerHTML = this.score;
    }

}

export default Score;