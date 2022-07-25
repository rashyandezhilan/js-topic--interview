const country = {
    countryname: function () {
     return this.country + " " 
    }
}
const place1 = { 
    country: ' uk'
    
}
const place2 = { 
    country  : ' ussr'
    
}
console.log(country.countryname.call(place1));

//appy
const country1 = {
    countryname: function (speed,color) {
        return this.country + " " ;
    }
}
const place3 = { 
    country: ' uk'
    
}
const place4 = { 
    country  : ' ussr'
    
}
console.log(country1.countryname.apply(place2,[5,'red']));

// blind 
var inform = {
    company : " abbc" ,
   
    form:function(){
        return " company  is " + " " + this.company 
    }
}
var inform1 = {
    company : " bbc",
   
    
}
var detail = inform.form.bind(inform1) 
var x  = console.log.bind(Document)
x(detail())






