function robot(name){
    this.name= name;
    this.legs =2
    this.color='White'
}

function human(name){
    this.name= name;
    this.hands = 2
}

human.prototype = new robot();

robot.prototype = new human()

var pepper = new robot('pepper')

var nao = new human('john')



/*
__proto
classes
constructor
for in/of

geoloaction

transpile
import export

async await

ajax
*/