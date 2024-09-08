document.addEventListener("DOMContentLoaded",function(){
    
    let btn_popup=document.querySelector("#popup");
    btn_popup.addEventListener("click",function(){
        let size=getSize();
        createBoard(size);
    });
    
});

function createBoard(size){
    let board=document.querySelector(".board");
    board.style.gridTemplateColumns=`repeat(${size},1fr)`;
    board.style.gridTemplateRows=`repeat(${size},1fr)`;
    
    board.innerHTML='';
    for(let i=0;i<size*size;i++){
        const cell=document.createElement('div');
        
        cell.classList.add('cell');
        board.appendChild(cell);
    }

}
function getSize(){
    let input=prompt("What will be the size of the board");
    let message=document.querySelector("#message");
    if(input==""){
        message.innerHTML="Plz provide number";
        return null;
    }
    else if(input<0||input>100){
        message.innerHTML="Plz provide a number >0 and <100";
        return null;
    }
    else{
        message.innerHTML="Now go on";
        return input;
    }
}