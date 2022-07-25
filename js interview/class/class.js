class Test {
    foo = 123;
    constructor() {
        this.foo = "234";
    }
}
const test = new Test();
console.log(test.foo);



//class-classname profile
class Profile {
    constructor() {
        this.name = " rashyand";
        this.class = " pg ";
        this.place = " coimbatore";
       

    }
    // method - methodname (detail)
    detail() {
        return " my name is " + this.name + " degree is " + this.class
    }
}
//concept - inhertiance
class Profile1 extends Profile {
    constructor(place) {
        super(place) // keyword 
        this.college = " Gasc"
    }
    add() {
        return " my profile update is " + this.college
    }

}


const profoloic = new Profile();
console.log(profoloic.detail()); //  class my name is  rashyand degree is  pg 
const profoloic1 = new Profile1();
console.log(profoloic1.add());  // my profile update  is Gasc 