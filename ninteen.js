firstname="John"
var bob = {
    firstname:'bob',
    age:23,
    greet:function(){
        return "Hi from "+this.firstname
    }
}
undefined
bob
{firstname: "bob", age: 23, greet: ƒ}
bob.greet()
"Hi from bob"


function calc(){
    this.add = function(a,b){ return a+b},
    this.sub = function(a,b){ return a-b},
    this.insert = function(table,name){
        out = `Select * from ${table} where name is ${name}`
        return out
    }

}


var mycalc = new calc();
mycalc.add(1,2)
mycalc.sub(1,2)
mycalc.insert('Student','John')


var thiscalc = new calc();

