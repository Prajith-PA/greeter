(function (global, $) {
	'use strict';

	var Greetr = function (firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	};

	var supportedLang = ['en', 'es'];

	var greetings = {
		en: 'Hello',
		es: 'SpanHello'
	};

	var formalgreetings = {
		en: 'Hey',
		es: 'Span Hey'
	};

	var logMessage = {
		en: 'Log message in english',
		es: 'Log message in spanish'
	};

	Greetr.prototype = {
		fullName: function () {
			return this.firstName + ' ' + this.lastName;
		},
		validateLang: function () {
			if (supportedLang.indexOf(this.language) === -1) {
				throw 'Invalid Language';
			}
		},

		fnGreetings: function () {
			return greetings[this.language] + ' '
			this.firstName + '!';
		},

		fnFormalGreetings: function () {
			return formalgreetings[this.language] + ' ' + this.fullName();
		},

		fnGreet: function (formal) {
			var msg;
			if (formal) {
				msg = this.fnFormalGreetings();
			} else {
				msg = this.fnGreetings();
			}

			if (console) {
				console.log(msg);
			}

			return this;
		},

		fnLogger: function () {
			if (console) {
				console.log(logMessage[this.language] + ' ' + this.fullName());
			}
			return this;
		},

		fnsetLang: function (lang) {
			this.language = lang;
			this.validateLang();
			return this;
		},

		fngreetHTML: function (selector, formal) {
			if (!$) {
				throw 'jQuery not loaded.';
			}

			if (!selector) {
				throw 'Selector doesnot exist!';
			}

			var msg;
			if (formal) {
				msg = this.fnFormalGreetings();
			} else {
				msg = this.fnGreetings();
			}

			$(selector).html(msg);

			return this;
		}

	};

	Greetr.init = function (firstName, lastName, language) {
		var self = this;

		this.firstName = firstName || '';
		this.lastName = lastName || '';
		this.language = language || 'en';
	};

	Greetr.init.prototype = Greetr.prototype;

	global.Greetr = global.G$ = Greetr;

})(window, jQuery);