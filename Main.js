//MAIN--------------------------------------


let canvas = document.querySelector("canvas"); 
canvas.width = window.innerWidth/2; 
canvas.height = window.innerWidth/2; 
let c = canvas.getContext('2d');


// importing all picture paths

let sBonde = 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png';
let sTorn = 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png';
let sLoper = 'https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png';
let sKonge = 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_kdt60.png';
let sDronning = 'https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png';
let sHest = 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png';
let hBonde = 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png';
let htorn = 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png'; 
let hHest = 'https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png';
let hLoper = 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png';
let hDronning = 'https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png'; 
let hKing = 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt60.png';




chessboard = new ChessBoard();
pos = new Position(canvas); 

// initializing all new Pieces

function sortArray(){
    Sort= [];

    for (var i = 'a'.charCodeAt(0); i <= 'h'.charCodeAt(0); i++) {
        Sort.push(new Pieces(sBonde,pos.getposition(String.fromCharCode(i),2)[0],pos.getposition(String.fromCharCode(i),2)[1]));
    }

    Sort.push(new Pieces(sTorn,pos.getposition('a',1)[0],pos.getposition('a',1)[1]));
    Sort.push(new Pieces(sTorn,pos.getposition('h',1)[0],pos.getposition('h',1)[1]));

    Sort.push(new Pieces(sHest,pos.getposition('b',1)[0],pos.getposition('b',1)[1]));
    Sort.push(new Pieces(sHest,pos.getposition('g',1)[0],pos.getposition('g',1)[1]));


    Sort.push(new Pieces(sLoper,pos.getposition('c',1)[0],pos.getposition('c',1)[1]));
    Sort.push(new Pieces(sLoper,pos.getposition('f',1)[0],pos.getposition('f',1)[1]));

    Sort.push(new Pieces(sDronning,pos.getposition('d',1)[0],pos.getposition('d',1)[1]));
    Sort.push(new Pieces(sKonge,pos.getposition('e',1)[0],pos.getposition('e',1)[1]));

    for(i in Sort){
        Sort[i].draw();
    }

    return Sort;
}

function whiteArray(){
    Hvit= []; 
    for (var i = 'a'.charCodeAt(0); i <= 'h'.charCodeAt(0); i++) {
        Hvit.push(new Pieces(hBonde,pos.getposition(String.fromCharCode(i),7)[0],pos.getposition(String.fromCharCode(i),7)[1]));
    }

    Hvit.push(new Pieces(htorn,pos.getposition('a',8)[0],pos.getposition('a',8)[1]));
    Hvit.push(new Pieces(htorn,pos.getposition('h',8)[0],pos.getposition('h',8)[1]));

    Hvit.push(new Pieces(hHest,pos.getposition('b',8)[0],pos.getposition('b',8)[1]));
    Hvit.push(new Pieces(hHest,pos.getposition('g',8)[0],pos.getposition('g',8)[1]));

    Hvit.push(new Pieces(hLoper,pos.getposition('c',8)[0],pos.getposition('c',8)[1]));
    Hvit.push(new Pieces(hLoper,pos.getposition('f',8)[0],pos.getposition('f',8)[1]));

    Hvit.push(new Pieces(hDronning,pos.getposition('d',8)[0],pos.getposition('d',8)[1]));
    Hvit.push(new Pieces(hKing,pos.getposition('e',8)[0],pos.getposition('e',8)[1]));
    for(i in Hvit){
        Hvit[i].draw();
    }
}


sortArray();
whiteArray();
// moving pieces


canvas.addEventListener('mousedown', function(event){

    farge=null;
    for(i in Sort){
        if(Sort[i].xPos<(event.offsetX) && (Sort[i].xPos+width)>(event.offsetX)
        && Sort[i].yPos<(event.offsetY) && (Sort[i].yPos+width)>(event.offsetY)){
            index= i; 
            farge="s"; 
        }
        else if(Hvit[i].xPos<(event.offsetX) && (Hvit[i].xPos+width)>(event.offsetX)
        && Hvit[i].yPos<(event.offsetY) && (Hvit[i].yPos+width)>(event.offsetY)){
            index= i;
            farge = "h";
        }
    }
    canvas.addEventListener('mousemove', onMousemove); 
    canvas.addEventListener('mouseup', onMouseuop); 
})


//variables for pieces
let width = canvas.width/8;
let height = canvas.width/8;



function onMousemove(event){
    console.log(event);
    console.log(farge);
    console.log(index);
    if(farge=="s"){
        c.clearRect(0,0,canvas.width, canvas.height); // clearing canvas
        Sort[index].xPos =event.offsetX- width/2; 
        Sort[index].yPos = event.offsetY-width/2;
        new ChessBoard();
        for(j in Sort){
            Sort[j].draw(); 
            Hvit[j].draw();
        }
    }
    else if(farge== "h"){
        c.clearRect(0,0,canvas.width, canvas.height); // clearing canvas
        Hvit[index].xPos =event.offsetX- width/2; 
        Hvit[index].yPos = event.offsetY-width/2;
        new ChessBoard();
        for(j in Hvit){
            Hvit[j].draw(); 
            Sort[j].draw();
        }
    }
}

function onMouseuop(event){
    canvas.removeEventListener('mousemove', onMousemove); 
    canvas.removeEventListener('mouseup', onMouseuop); 
}
