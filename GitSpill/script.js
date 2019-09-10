// Referanser til HTML-elementer
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Klassedefinisjoner
class Figur{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
    beveg(){
        this.x = this.x + Math.random()*10 - 5;
        this.y = this.y + Math.random()*10 - 5;
    }
    tegn(){
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.stroke();
    }
}

class Bubble extends Figur{
    constructor(x, y, r){
        super(x, y, r)
    }
}

class Firkant extends Figur{
    constructor(x, y, r){
        super(x, y, r)
    }

    tegn(){
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.r, this.r);
    }
}

// Globale variabler
let boble1 = new Bubble(200, 200, 50);
let boble2 = new Bubble(220, 240, 30);
let firkant = new Firkant(200, 200, 80, 20);

// Oppstart
gameloop();

//Funksjonsdefinisjoner
function gameloop(){
    tegnBakgrunn();
    boble1.tegn();
    boble1.beveg();
    boble2.tegn();
    boble2.beveg();
    firkant.beveg();
    firkant.tegn();
    requestAnimationFrame(gameloop);
}

function tegnBakgrunn(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height); // Tegner bakgrunnsfarge på canvaset
}


