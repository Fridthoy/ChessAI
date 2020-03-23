class Pieces{

    constructor(path, xPos, yPos, farge){
        this.path = path;
        this.xPos = xPos; 
        this.yPos = yPos; 
        this.farge= farge;

        this.pos= new Position(canvas);
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
   
}


class Queen extends Pieces{
    constructor(path, xPos, yPos, farge){
        super(path, xPos, yPos, farge);
    }

    checkMove(lastpos){
        // diagonal 
        let letterPos= this.pos.returnPosition(this.xPos, this.yPos);
        let bokstav =letterPos[0].charCodeAt(0);
        let number = letterPos[1];
        let muligheter=[];
        //to the left
        let okning1= 1;
        for(let i= bokstav-1; i>= 97; i--){

            if(number+okning1 <= 8){
                muligheter.push([String.fromCharCode(i), number + okning1]);    
            }
            if(number-okning1>=1){
                muligheter.push([String.fromCharCode(i), number -okning1]);        
            }
        okning1++;
        }
        let okning2=1;
        // to the right
        for(let i= bokstav+1; i<= 104; i++){

            if(number+okning2 <= 8){
                muligheter.push([String.fromCharCode(i), number + okning2]);    
            }
            if(number-okning2>=1){
                muligheter.push([String.fromCharCode(i), number -okning2]);        
            }
        okning2++;
        }

        //adding going straight
        for(let i=97; i<=104;i++){
            muligheter.push([String.fromCharCode(i), number]);        
        }
        for(let j=1; j<=8; j++){
            muligheter.push([String.fromCharCode(bokstav), j]);
        }

        for(let i in muligheter){
            if(muligheter[i][0]== lastpos[0] && muligheter[i][1] == lastpos[1]){
                return true;
            }
        }
        return false;
    }
}


class Rook extends Pieces{
    constructor(path, xPos, yPos, farge){
        super(path, xPos, yPos, farge);
    }

    checkMove(lastpos){
        let letterPos= this.pos.returnPosition(this.xPos, this.yPos);
        let bokstav =letterPos[0].charCodeAt(0);
        let number = letterPos[1];
        let muligheter=[];

        for(let i=97; i<=104;i++){
            muligheter.push([String.fromCharCode(i), number]);        
        }
        for(let j=1; j<=8; j++){
            muligheter.push([String.fromCharCode(bokstav), j]);
        }

        for(let i in muligheter){
            if(muligheter[i][0]== lastpos[0] && muligheter[i][1] == lastpos[1]){
                return true;
            }
        }
        return false;
    }
}


class Bishop extends Pieces{
    constructor(path, xPos, yPos, farge){
        super(path, xPos, yPos, farge);
    }

    checkMove(lastpos){
        let letterPos= this.pos.returnPosition(this.xPos, this.yPos);
        let bokstav =letterPos[0].charCodeAt(0);
        let number = letterPos[1];
        let muligheter=[];

        //to the left
        let okning1= 1;
        for(let i= bokstav-1; i>= 97; i--){

            if(number+okning1 <= 8){
                muligheter.push([String.fromCharCode(i), number + okning1]);    
            }
            if(number-okning1>=1){
                muligheter.push([String.fromCharCode(i), number -okning1]);        
            }
        okning1++;
        }
        let okning2=1;
        // to the right
        for(let i= bokstav+1; i<= 104; i++){

            if(number+okning2 <= 8){
                muligheter.push([String.fromCharCode(i), number + okning2]);    
            }
            if(number-okning2>=1){
                muligheter.push([String.fromCharCode(i), number -okning2]);        
            }
        okning2++;
        }
        for(let i in muligheter){
            if(muligheter[i][0]== lastpos[0] && muligheter[i][1] == lastpos[1]){
                return true;
            }
        }
        return false;
    }
}




class King extends Pieces{
    constructor(path, xPos, yPos, farge){
        super(path, xPos, yPos, farge);
    }

    checkMove(lastpos){
        let letterPos= this.pos.returnPosition(this.xPos, this.yPos);
        let bokstav =letterPos[0].charCodeAt(0);
        let number = letterPos[1];
        let muligheter=[];

        for(let i= bokstav-1; i<=bokstav+1; i++){
            for(let j = number-1; j<= number+1; j++){
                if(i >= 97 && i<= 104 && j>=1 && j<=8){
                    muligheter.push([String.fromCharCode(i), j]);
                }
            }
        }

        console.log(muligheter);

        for(let i in muligheter){
            if(muligheter[i][0]== lastpos[0] && muligheter[i][1] == lastpos[1]){
                return true;
            }
        }
        return false;

    }

}


class Knight extends Pieces{
    constructor(path, xPos, yPos, farge){
        super(path, xPos, yPos, farge);
    }

    checkMove(lastpos){
        let letterPos= this.pos.returnPosition(this.xPos, this.yPos);
        let bokstav =letterPos[0].charCodeAt(0);
        let number = letterPos[1];
        let muligheter=[];

        for(let i = -1; i<=1; i=i+2){
            if(bokstav-2 >=97 && bokstav-2<= 104 & number+i>=1 && number+i<= 8){
                muligheter.push([String.fromCharCode(bokstav-2),number +i]);
            }
            if(bokstav+2 >=97 && bokstav+2<= 104 & number+i>=1 && number+i<= 8){
                muligheter.push([String.fromCharCode(bokstav+2),number+i])    
            }
            if(bokstav+i >=97 && bokstav+i<= 104 & number+2>=1 && number+2<= 8){
                muligheter.push([String.fromCharCode(bokstav+i), number+2]);         
            }
            if(bokstav+i >=97 && bokstav+i<= 104 & number-2>=1 && number-2<= 8){
                muligheter.push([String.fromCharCode(bokstav+i), number-2])     
            }
        }

        
        for(let i in muligheter){
            if(muligheter[i][0]== lastpos[0] && muligheter[i][1] == lastpos[1]){
                return true;
            }
        }
        return false;
    }
}


class Pown extends Pieces{
    constructor(path, xPos, yPos, farge){
        super(path, xPos, yPos, farge);
        this.count = 0;
    }

    checkMove(lastpos){
        let letterPos= this.pos.returnPosition(this.xPos, this.yPos);
        let bokstav =letterPos[0].charCodeAt(0);
        let number = letterPos[1];
        let muligheter=[];

        if(this.count ==0){
            if(this.farge == 's'){
                muligheter.push([String.fromCharCode(bokstav),number+1]);
                muligheter.push([String.fromCharCode(bokstav),number+2]);     
            }
            else{
                muligheter.push([String.fromCharCode(bokstav),number-1]);
                muligheter.push([String.fromCharCode(bokstav),number-2]);     
            }
       }
        else{
            if(this.farge =='s'){
                muligheter.push([String.fromCharCode(bokstav), number+1]);
            }
            else{
                muligheter.push([String.fromCharCode(bokstav), number-1]);               
            }
        }
        // checking if it can take other player 


        for(let i in muligheter){
            if(muligheter[i][0]== lastpos[0] && muligheter[i][1] == lastpos[1]){
                return true;
            }
        }
        return false;
    }
}