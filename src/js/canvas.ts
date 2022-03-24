import {settings} from "./settings"

export const canvas = {
    init(){
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas(); //donner une taille au canvas
        this.draw() // desssiner le canvas
        this.generateGradient(); // Faire le dégrader
        this.addEventListener(); // va permettre de resize au moment ou on ajuste
    },
    generateGradient(){
        this.gradient = this.ctx.createLinearGradient(0,0,this.canvas.width, this.canvas.height);
        this.gradient.addColorStop(0, settings.sky.gradient[0]);
        this.gradient.addColorStop(1, settings.sky.gradient[1]);
    },
    resizeCanvas(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },
    draw(){
        this.ctx.fillStyle = this.gradient;
        this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
        return this;
    },
    addEventListener(){
        window.addEventListener('resize',()=>{
            this.resizeCanvas();
            this.draw();
        });
    },
}

canvas.init();