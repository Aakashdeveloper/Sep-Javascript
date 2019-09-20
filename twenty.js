var person = {
    fullName: function(city,country){
        return this.firstName+" "+this.lastName+" "+city+" "+country
    }
}


var john ={
    firstName:'John',
    lastName:'Doe'
}

person.fullName.call(john,'London','England');
"John Doe London England"


person.fullName.apply(john,['London','England']);
"John Doe London England"
person.fullName.call(john,['London','England']);
"John Doe London,England undefined"