;(function(global, $) {
// Starting with IIFE for safe code and passing 2 arguments, the global object and jQuery
// object, and turning into strict mode for not creating global variables accidentally
    "use strict";

    // Greetr is a function that returns new object.init with same properties
    const Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    };

    // Variables with safe values that couldn't be mutate from outside of IIFE
    const languages = ['en', 'am'];

    const greet = {
        en: 'Hello',
        am: 'Բարև'
    };

    const formalGreet = {
        en: 'Greetings',
        am: 'Բարև Ձեզ'
    };

    // The methods that is saved in prototype for saving the memory space, each new
    // object will inherit this methods and will not copy this
    Greetr.prototype = {
        validate: function() {// validates if we have this language
            if (!languages.includes(this.language)) {
                throw 'The language is not supported';
            }

            return this;
        },
        fullname: function() { // returns fullname string
            return `${this.firstname} ${this.lastname}`;
        },
        greeting: function() { // returns greeting string
            return `${greet[this.language]} ${this.firstname}`;
        },
        formalGreeting: function() { // returns formal greetings string
            return `${formalGreet[this.language]}, ${this.fullname()}`;
        },
        logGreet: function(formal)  {// log in console greet
            if (formal) {
                console.log(this.formalGreeting());
            } else {
                console.log(this.greeting());
            }

            return this;
        },
        changeLanguage: function(lang) { // Changing given language
            this.language = lang;
            this.validate();
            return this;
        },
        log: function() { // logs login in console
            if (console) {
                console.log(`Logged in (${this.language}): ${this.fullname()}`);   
            }

            return this;
        }
    };

    // Greetr.init is a function constructor therefor we are assigning its arguments to its
    // object and setting default values
    Greetr.init = function(firstname, lastname, language) {
        const self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
        this.validate();
    };

    // Setting the same prototype for both
    Greetr.init.prototype = Greetr.prototype;

    // Assigning Greetr to global object
    global.Greetr = global.G$ = Greetr;

})(typeof(window) !== 'undefined' ? window : this, jQuery);