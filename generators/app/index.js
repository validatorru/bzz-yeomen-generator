/**
 * BUZZfriends frontend skeleton generator
 * author: alex@buzzfriends.ru
 */

'use strict';

var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp'); // creates empty directories
var moment = require('moment'); // deals with dates
var now = moment(); // date objects

var generationDate = now.format('DD.MM.YYYY hh:mm:ss'); // date the generator is run

module.exports = yeoman.Base.extend({
  // command line arguments
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    this.argument('projectname', { type: String, required: true });
    this.argument('authoremail', { type: String, required: true });
  },
  // copy src html / css / js files and folder structure
  writing: function () {
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(),
      {
        projectName: this.projectname,
        authorEmail: this.authoremail,
        generationDate: generationDate
      }
    );
    mkdirp.sync(this.destinationPath('src/img'));
  },
  // install node packets
  install: function () {
    this.installDependencies();
  }
});
