(function(global, $) {

    "use strict";

    const Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }

    const supportedLangs = ['en', 'am'];

    const greetings = {
        en: 'Hello',
        am: 'Barev'
    };

    const formalGreetings = {
        en: 'Greetings',
        am: 'Bari or'
    };

    const logMessages = {
        en: 'Logged in',
        am: 'Logged in'
    };

    Greetr.prototype = {
        fullname: function() {
            return `${this.firstname} ${this.lastname}`;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },

        greeting: function() {
            return `${greetings[this.language]} ${this.firstname}!`;
        },

        formalGreeting: function() {
            return `${formalGreetings[this.language]}, ${this.fullname()}.`;
        },

        greet: function(formal) {
            let msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            return this; //For chaining
        },

        log: function() {
            if (console) {
                console.log(`${this.language}: ${this.fullname()}`);
            }

            return this;
        },

        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        },

        HTMLgreet: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }
            if (!selector) {
                throw 'No selector';
            }

            let msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }
    };

    Greetr.init = function(firstname, lastname, language) {
        const self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
        self.validate();
    };

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

})(typeof(window) !== 'undefined' ? window : this, jQuery);
