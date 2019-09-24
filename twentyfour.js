/*var a = 10

for (i=0; i<10;i++){
    console.log(a+i)
}

for (i=11; i<20;i++){
    console.log(a+i)
}*/


//console.log("outsidefunction "+rand)
function add(a,b){
    var rand = 5
    out = rand + a+b
    console.log("insidefunction "+rand)
    return out
}


for (i=11; i<20;i++){
    let rand1 = 10
}

console.log("outsidefor "+rand1)

add(1,2)