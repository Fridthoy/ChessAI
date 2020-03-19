class Pieces{

    constructor(path, xPos, yPos){
        this.path = path;
        this.xPos = xPos; 
        this.yPos = yPos; 
        this.width = canvas.width/8; 
        this.height = canvas.width/8; 
        this.image = new Image(); 
    }
    draw(){
        this.image.src = this.path; 
        this.image.onload = this.drawImage1();
    }

    drawImage1(){
        c.drawImage(this.image, this.xPos, this.yPos, this.width, this.height); 
    }
    setInitialpos(){
         //bønder
         for (var i = 'a'.charCodeAt(0); i <= 'h'.charCodeAt(0); i++) {
             this.x = new Pieces(sBonde,pos.getposition(String.fromCharCode(i),2)[0],pos.getposition(String.fromCharCode(i),2)[1]);
             this.y= new Pieces(hBonde,pos.getposition(String.fromCharCode(i),7)[0],pos.getposition(String.fromCharCode(i),7)[1]);
             this.x.draw();
             this.y.draw();
         }

         //restrerende
         this.torn1= new Pieces(sTorn,pos.getposition('a',1)[0],pos.getposition('a',1)[1]);
         this.torn2= new Pieces(sTorn,pos.getposition('h',1)[0],pos.getposition('h',1)[1]);
         this.torn1.draw();
         this.torn2.draw();

         this.hest1 = new Pieces(sHest,pos.getposition('b',1)[0],pos.getposition('b',1)[1]);
         this.hest2 = new Pieces(sHest,pos.getposition('g',1)[0],pos.getposition('g',1)[1]);
         this.hest1.draw(); 
         this.hest2.draw(); 
 
         this.loper1 = new Pieces(sLoper,pos.getposition('c',1)[0],pos.getposition('c',1)[1]);
         this.loper2 = new Pieces(sLoper,pos.getposition('f',1)[0],pos.getposition('f',1)[1]);
         this.loper1.draw(); 
         this.loper2.draw(); 

         //sort konge og dronning   
         this.sDronning = new Pieces(sDronning,pos.getposition('d',1)[0],pos.getposition('d',1)[1]);
         this.sKonge = new Pieces(sKonge,pos.getposition('e',1)[0],pos.getposition('e',1)[1]);
         this.sDronning.draw(); 
         this.sKonge.draw();



         //restrerende hvit
         this.htorn1= new Pieces(htorn,pos.getposition('a',8)[0],pos.getposition('a',8)[1]);
         this.htorn2= new Pieces(htorn,pos.getposition('h',8)[0],pos.getposition('h',8)[1]);
         this.htorn1.draw();
         this.htorn2.draw();

         this.hhest1 = new Pieces(hHest,pos.getposition('b',8)[0],pos.getposition('b',8)[1]);
         this.hhest2 = new Pieces(hHest,pos.getposition('g',8)[0],pos.getposition('g',8)[1]);
         this.hhest1.draw(); 
         this.hhest2.draw(); 
 
         this.hloper1 = new Pieces(hLoper,pos.getposition('c',8)[0],pos.getposition('c',8)[1]);
         this.hloper2 = new Pieces(hLoper,pos.getposition('f',8)[0],pos.getposition('f',8)[1]);
         this.hloper1.draw(); 
         this.hloper2.draw(); 

         //sort konge og dronning   
         this.hDronning = new Pieces(hDronning,pos.getposition('d',8)[0],pos.getposition('d',8)[1]);
         this.hKonge = new Pieces(hKing,pos.getposition('e',8)[0],pos.getposition('e',8)[1]);
         this.hDronning.draw(); 
         this.hKonge.draw();
    }
}
