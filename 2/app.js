/*
    Objest.create & full pure prototypal inheritance
*/
var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname + ' ' + this.lastname;
        //if it would be written firstname without 'this', it'll be look on function execution context, not global
    }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);

//OR for older browsers we forced to use polyfill
if(!Object.create) {
    Object.create = function(o) {
        if(arguments.length > 1) {
            throw new Error('Object create implementation ' + 'only accepts the first parameter.')
        }
        function F() {}
        F.prototype = o;
        return new F();
    }
}

/*
Array.prototype.myCustomFeature = 'cool!';

var arr = ['John', 'Jane', 'Jim'];

//don't use for in, cause you'll see extra property of the Array.prototype
for( var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}

//instead use
for(var i = 0; i < arr.length; i++) {
    
}
*/

/*
String.prototype.isLengthGraterThan = function(limit) {
    return this.length > limit;
}

console.log("Jogn".isLengthGraterThan(3));
*/

/*
function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('this finction is invoked');
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ' ' + this.firstname;
}
*/