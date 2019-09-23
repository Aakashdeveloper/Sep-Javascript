function language(name,country){
    this.name = name;
    this.country = country
}

var hindi = new language('Hindi','India');

////////Es6//////////
class geo{
    constructor(name,country){
        this.name = name;
        this.country = country
    }
}

class language extends geo{
    constructor(name,country,lat,long){
        super(name,country)
        this.lat = lat;
        this.long = long
    }

}

var english = new language('English','USA',34.435646,45.4678);





//////////////

class language {
    constructor(name,country,lat,long){
        this.name = name;
        this.country = country
    }

    info(){
        return `${this.name} is offical lang of ${this.country}`
    }

}

var english = new language('English','USA');