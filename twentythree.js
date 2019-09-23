var car = {
    barnd:'BMW',
    color:'Red',
    price:8768789
}

var out = '';
var j;

for(j in car){
    out += car[j]+ " "
}
"BMW Red 8768789 "


var coding = ['JavaScript', 'React', 'Node']
var x ;
for(x of coding){
    console.log(x)
}

function list1(){
    for(i=0; i<= 10; i++){
       console.log(i)
    }
}

function * list(){
    for(i=0; i<= 10; i++){
        yield i
    }
}

var out = list()
out.next()