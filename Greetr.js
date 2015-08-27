(function(global, $) {
    
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }
    
    var supportedLang = ['en', 'us'];
    
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    var formalGreetings = {
        en: 'Greetings',
        es: 'Salutos'
    };
    
    vat logMasseages = {
        en: 'Logged in',
        es: 'Spanish logged in'
    };
    
    Greetr.prototype = {
        fullName: function() {
            return this.firstname + ' ' + this.lastname;
        },
        vaidate: function () {
            if(supportedLang.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstname + '!';
        },
        formalGreeting: function() {
            return formalGreetings[this.language] + ' ' + this.fullName + '!';
        },
        greet: function(formal) {
            var msg;
            //if undefined or null it will be coerced to 'false'
            if(formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            
            if(console) {
                console.log(msg);
            }
            
            //'this' refers to the calling object at axacution time
            //makes the method chainable
            return this;
        }
    };
    
    Greetr.init = function(firstname, lastname, language) {
        var self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
    }
    
    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery)); //'()' — for invocing the function