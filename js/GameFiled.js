import Config from "./config.js";

class GameFiled {
    constructor(heightFiled, widthFiled) {
        this.config = new Config();
        //console.log(document.getElementById("filed"));
        this.element = document.getElementById("filed");
        this.context = this.element.getContext( "2d" );

        this.element.width = Number(widthFiled.value*this.config.sizeCell);
        this.element.height = Number(heightFiled.value*this.config.sizeCell);
        //console.log(document.getElementById("filed"))
        //container.appendChild( this.element );
    }
    
}

export default GameFiled;