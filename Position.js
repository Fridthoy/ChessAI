class Position{
    constructor(canvas){
        this.width = canvas.width/8;
    }

    getposition(x,y){
       if(x=='a'){
           this.xpos= 0; 
       } 
       else if (x=='b'){
            this.xpos= this.width;  
       }
       else if(x=='c'){
        this.xpos= this.width*2; 
       } 
       else if (x=='d'){
        this.xpos= this.width*3;  
       }
       else if(x=='e'){
        this.xpos= this.width*4; 
       }
       else if (x=='f'){
          this.xpos= this.width*5;  
       }
       else if(x=='g'){
        this.xpos= this.width*6; 
       } 
       else if (x=='h'){
        this.xpos= this.width*7;  
       }

       if(y==1){
            this.ypos= 0; 
        } 
        else if (y==2){
            this.ypos= this.width;  
        }
        else if(y==3){
            this.ypos= this.width*2; 
        } 
        else if (y==4){
            this.ypos= this.width*3;  
        }
        else if(y==5){
             this.ypos= this.width*4; 
        }
        else if (y==6){
            this.ypos= this.width*5;  
        }
        else if(y==7){
            this.ypos= this.width*6; 
        } 
        else if (y==8){
            this.ypos= this.width*7;  
        }

    return [this.xpos,this.ypos];
    }

}