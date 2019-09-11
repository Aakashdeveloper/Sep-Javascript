
var city = ["Mumbai", "London", "Zurich", "Davos", "Amsterdam", "NewYor", "delhi", "helsinki"]
for
for in 
for of
while
do while

for(var i=0; i<=10; i++){
    console.log(i)
}


var city = ["Mumbai", "London", "Zurich", "Davos", "Amsterdam", "NewYor", "delhi", "helsinki"]

for(var i =0; i<city.length; i++){
    console.log(city[i].toUpperCase())
}


var city = ["Mumbai", "London", "Zurich", "Davos", "Amsterdam", "NewYor", "delhi", "helsinki"]

for(var i =0; i<city.length; i++){
    console.log(city[i].toUpperCase())
}

VM144:4 MUMBAI
VM144:4 LONDON
VM144:4 ZURICH
VM144:4 DAVOS
VM144:4 AMSTERDAM
VM144:4 NEWYOR
VM144:4 DELHI
VM144:4 HELSINKI

for(i=0; i<50; i++){
    if(i%5==0){
        console.log('Divide by 5')
    }else{
        console.log(i)
    }
}

for(i=0;i<5;i++){
    for(a=0;a<5;a++){
        console.log("i>>>>>",i)
        console.log("a>>>>>",a) 
    }
}

var i =0
while(i<10){
    console.log(i)
    i++
}

do{
    console.log(i)
    i++
}
while(i<10)

Map
filter

You have to create one user list []
you will ask your there name
if that user is in the list print allow access 
else add that user to the list
next time you can check in the same

localStorage.setItem('itemname', item)
localStorage.getItem('itemname')
localStorage.removeItem('itemname')