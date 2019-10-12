'use strict';

const Account = function(login, emeil) {
  this.login = login;
  this.emeil = emeil;
};

const mango = new Account('Mangozedog', 'mango@dog.woof');
const poly = new Account('Poly', 'poly@mail.com');

Account.prototype.getInfo = function() {
  console.log(`Login: ${this.login}, Emeil: ${this.emeil}`);
};

mango.getInfo();
poly.getInfo();
