class GameFiled {
    constructor(hight, widht) {
        this.hight = hight;
        this.widht = widht;
        //отричовка поля
    }
    
    draw(){

        const filed = document.getElementById("filed")

        filed.style.cssText = `grid-template-rows: repeat(${this.hight}, 25px);
                               grid-template-columns: repeat(${this.widht}, 25px);`

        for(let l = (this.widht-1); l>=0; l--){

            for(let i = (this.hight-1); i>=0; i--){
        
                let div = document.createElement('div');
                div.className = i+''+l+" block";
                filed.insertAdjacentElement('afterbegin',div);
        
            }
        }
    }
}

export default GameFiled;