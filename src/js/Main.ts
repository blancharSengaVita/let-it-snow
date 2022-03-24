import {canvas} from "./canvas";

const app = {
    init(){
        this.canvas = canvas.init();
        this.ctx = this.canvasElement.getContext('2d');
        this.canvas = canvas.init();
    }
}

app.init();