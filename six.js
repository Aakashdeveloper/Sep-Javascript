var a = 10
if(a == 10){
    console.log('Valid Value')
}else if(a == 11){
    console.log('a is 11 Value')
}
else {
    console.log('InValid Value')
}

var a = 10
if(a == 10){
    console.log('Valid Value')
}
if(a == 11){
    console.log('a is 11 Value')
}

var input = prompt('Please eneter your number')
if(input%2 == 0){
    console.log('Number is even')
}else {
    console.log('Number is odd')
}



var lucknumber = Math.floor(Math.random()*(10-1))+1
var userinput = prompt('Please eneter your number')
if(lucknumber == userinput){
    console.log('you win')
}else {
    console.log('you loose')
}
