# MailerQ Pug Plugin

## Installation

```bash
npm install mailer-q-pug --save
```

## Usage

- This plugin is an extension of the [MailerQ](https://github.com/mailer-q/mailer-q) module for sending email.
- It enables MailerQ to use Pug templating to send email.
- To use this extension, simply require the module and call the resulting function with the path to your email templates as an argument.

Example configuration:

```javascript
const path = require("path");
const MailerQ = require("mailer-q")();
const MailerQPug = require("mailer-q-pug");

const options = {
  ...otherOptionsHere,
  renderer: MailerQPug(path.join(__dirname, "./email_templates"))
};

module.exports = MailerQ.config(options);
```
