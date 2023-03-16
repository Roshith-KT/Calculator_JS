var screen=document.getElementById('screen');

function btnClick(value){
    screen.value += value;
}


function clearScreen(){
    screen.value = "";
}

function findResult(){ 
    screen.value=eval(screen.value);
    
}