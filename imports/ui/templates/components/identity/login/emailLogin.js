import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './emailLogin.html';
import EmailLogin from './EmailLogin.jsx';

Template.emailLogin.helpers({
  EmailLogin() {
    return EmailLogin;
  },
});
