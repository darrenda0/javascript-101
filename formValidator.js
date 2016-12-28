
var login = "John";
var email = "hh";
var tel = "";

var firstRule = login.length >= 3 && login.length < 20;
var secondRule = email.length > 0 || tel.length > 0;

console.log (firstRule, secondRule);

