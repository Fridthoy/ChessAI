class Pieces{

    constructor(path, xPos, yPos, farge){
        this.path = path;
        this.xPos = xPos; 
        this.yPos = yPos; 
        this.width = canvas.width/8; 
        this.height = canvas.width/8; 
        this.image = new Image(); 
        this.farge= farge;
    }
    draw(){
        this.image.src = this.path; 
        this.image.onload = this.drawImage1();
    }

    drawImage1(){
        c.drawImage(this.image, this.xPos, this.yPos, this.width, this.height); 
    }
   
}


