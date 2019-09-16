function calc(operator){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    if( isNaN(a) == false && isNaN(b)==false){
        if(operator == 'add'){
            out = parseInt(a)+ parseInt(b)
        }
        if(operator == 'sub'){
            out = parseInt(a) - parseInt(b)
        }
    }else{
        out = "Please enter valid input"
    }
    
    document.getElementsByTagName('p')[0].innerText='Out is '+ out
}
/*
function add(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    out = parseInt(a)+ parseInt(b)
    document.getElementsByTagName('p')[0].innerText='Out is '+ out
}

function sub(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    out = parseInt(a)- parseInt(b)
    document.getElementsByTagName('p')[0].innerText='Out is '+ out
}*/