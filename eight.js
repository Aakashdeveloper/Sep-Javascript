var a = 10
var b = 20
var out = a+b
console.log(out)

var a = [1,2,3,4,5]
var b = ["a","b","c","d"]
var c = [true, false, false, true]

var d = [1,2,3,"fD",3,"Dv","d", true,2]

var d = [1,2,3,"fD",3,"Dv","d", true,2]
undefined
d.length
9
d[0]
1
d[9]
undefined
d[d-1]
undefined
d[d.length-1]
2

push always add at the end of the array
pop always remove from the end of the array
unshift always add at the begning of the array
shift always remove from the begining of the array

var city = ["London", "NewYor", "delhi","helsinki"]
var city = ["London", "NewYor", "delhi","helsinki"]
undefined
city.push('amsterdam')
5
city
(5) ["London", "NewYor", "delhi", "helsinki", "amsterdam"]
city.pop(1)
"amsterdam"
city
(4) ["London", "NewYor", "delhi", "helsinki"]
city.pop(100000000)
"helsinki"
city.pop()
"delhi"
var city = ["London", "NewYor", "delhi","helsinki"]
undefined
city.unshift('Mumbai')
5
city
(5) ["Mumbai", "London", "NewYor", "delhi", "helsinki"]
city
(5) ["Mumbai", "London", "NewYor", "delhi", "helsinki"]
city.shift()
"Mumbai"
city.shift()
"London"

var city = ["Mumbai", "London", "NewYor", "delhi", "helsinki"]
undefined
city.slice(1,3)
(2) ["London", "NewYor"]
city.slice(1,4)
(3) ["London", "NewYor", "delhi"]

var city = ["Mumbai", "London", "NewYor", "delhi", "helsinki"]

undefined
city.splice(2,0,'Zurich','Davos','Amsterdam')
[]
city
(8) ["Mumbai", "London", "Zurich", "Davos", "Amsterdam", "NewYor", "delhi", "helsinki"]
city.splice(3,1,'Venic','Sydeny')
["Davos"]
city
(9) ["Mumbai", "London", "Zurich", "Venic", "Sydeny", "Amsterdam", "NewYor", "delhi", "helsinki"]
city.splice(4,3,'Boston')
(3) ["Sydeny", "Amsterdam", "NewYor"]
city
(7) ["Mumbai", "London", "Zurich", "Venic", "Boston", "delhi", "helsinki"]

var city = ["Mumbai", "London", "NewYor", "delhi", "helsinki"]
undefined
city.indexOf
ƒ indexOf() { [native code] }
city.indexOf('delhi')
3
city.indexOf('London')
1
city.indexOf('amsterdam')
-1
city.indexOf('Boston')
-1
var city = ["Mumbai", "London", "NewYor", "delhi", "helsinki"]
undefined
var a = [1,2,3,4]
undefined
city+a
"Mumbai,London,NewYor,delhi,helsinki1,2,3,4"
city.concat(a)
(9) ["Mumbai", "London", "NewYor", "delhi", "helsinki", 1, 2, 3, 4]
a.concat(city)
(9) [1, 2, 3, 4, "Mumbai", "London", "NewYor", "delhi", "helsinki"]
var b = ["a","b","c"]
undefined
a.concat(b,city)
(12) [1, 2, 3, 4, "a", "b", "c", "Mumbai", "London", "NewYor", "delhi", "helsinki"]
b.concat(city,a)


var a = [1, 2, 3, 4, "a", "b", "c", "Mumbai", "London", "NewYor", "delhi", "helsinki"]
undefined
a.sort()
(12) [1, 2, 3, 4, "London", "Mumbai", "NewYor", "a", "b", "c", "delhi", "helsinki"]
var a = [1, 2, 3, 4,true,5,1, "a",false, "b", "c", "mumbai", "london", "newYork", "delhi", "helsinki"]
undefined
a.sort()
(16) [1, 1, 2, 3, 4, 5, "a", "b", "c", "delhi", false, "helsinki", "london", "mumbai", "newYork", true]
var b = a.sort()
undefined
b
(16) [1, 1, 2, 3, 4, 5, "a", "b", "c", "delhi", false, "helsinki", "london", "mumbai", "newYork", true]
b.reverse()
(16) [true, "newYork", "mumbai", "london", "helsinki", false, "delhi", "c", "b", "a", 5, 4, 3, 2, 1, 1]


[a,b] = [1,2]
[a,b,c] = [1,2]
[a,b,c] = [1,2,3,4]
