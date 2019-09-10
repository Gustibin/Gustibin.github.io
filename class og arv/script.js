const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

class Figur{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
    }

    beveg(){
        this.x = this.x + Math.random() * 10 - 5;
        this.y = this.y + Math.random() * 10 - 5;
    }
    tegn(){
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.stroke();
    }
}


class Buble extends Figur{
    constructor(x, y, r){
        super(x, y, r)
    }
}


class Firkant extends Figur{
    constructor(x, y, r, h) {
        super(x, y, r);
        this.h = h;
    }
    tegn(){
        ctx.fillStyle = "purple";
        ctx.fillRect(this.x, this.y, this.r, this.h)
    }
}

let firkantArray = [];
let bubleArray = [];

for(let i = 0; i < 101; i++){
    let firkant = new Firkant(200, 200, Math.random() * 100, Math.random() * 100);
    let buble = new Buble(300, 300, Math.random()* 100);

    firkantArray.push(firkant);
    bubleArray.push(buble);
}

gameLoop();


function gameLoop(){
    tegnBakgrunn();
for(let i = 0; i < 101; i++) {
    firkantArray[i].beveg();
    firkantArray[i].tegn();

    bubleArray[i].beveg();
    bubleArray[i].tegn();
}
    requestAnimationFrame(gameLoop);
}

function tegnBakgrunn(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height); // Tegner bakgrunnsfarge på canvaset
}