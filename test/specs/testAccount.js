'use strict';

import account from '../helpers/account.js';

suite('Test the Login Functionality using helper functions - ', () => {
	test('Test the user login', () => {

      account().login(); //defaults to globals

      browser.getTitle().should.be.equal('craigslist account');
      browser.getText('.bchead>a:nth-of-type(2)').should.be.equal('home of '
         + globalEmail);

   });

   test('Test Logout', () => {

      account().logout();

      browser.getTitle().should.be.equal('craigslist - account log in');

   });

   test('Test Forgot Password Functionality', () => {

      const someEmail = 'some.email@email.com';

      account({email: someEmail}).forgotPassword();

      browser.getText('.alert-success').should.be.equal('A link to create a new password has been emailed to '
         + someEmail + '.');

   });

});
