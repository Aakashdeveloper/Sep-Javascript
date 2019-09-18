//literal
var country = {
    name:'India',
    capital:'Delhi',
    population:868686876
}
undefined
typeof(country)
"object"
country.name
"India"
country.capital
"Delhi"
country.population
868686876
country['name']
"India"
country['capital']
"Delhi"
country.language="hindi"
"hindi"
country
{name: "India", capital: "Delhi", population: 868686876, language: "hindi"}
country.population=100000000
100000000
country
{name: "India", capital: "Delhi", population: 100000000, language: "hindi"}
delete country.population
true
country
{name: "India", capital: "Delhi", language: "hindi"}

//constructor
var car = new Object();
car.brand="BMW"
car.color="red"
"red"
typeof(car)
"object"
car
{brand: "BMW", color: "red"}
car['brand']
"BMW"
car.color
"red"

var bob = {
    firstname:'bob',
    age:23,
    greet:function(){
        return "Hi from bob"
    }
}
undefined
bob
{firstname: "bob", age: 23, greet: ƒ}
bob.greet()
"Hi from bob"


var city = [
    {name:'delhi',country:'India'},
    {name:'paris',country:'France'},
    {name:'helsinki',country:'Finland'}
]


var city = [
    {name:'delhi',country:'India'},
    {name:'paris',country:'France'},
    {name:'helsinki',country:'Finland'}
]
undefined
city
(3) [{…}, {…}, {…}]0: {name: "delhi", country: "India"}1: {name: "paris", country: "France"}2: {name: "helsinki", country: "Finland"}length: 3__proto__: Array(0)
city[1].name
"paris"