'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp'); // creates empty directories
var moment = require('moment'); // deals with dates
var now = moment();

var projectName = 'BUZZfriends frontend'; // default project name
var generationDate = now.format('DD.MM.YYYY hh:mm:ss'); // date the generator is run
var authorEmail = 'alex@buzzfriends.ru'; // defult author email

module.exports = yeoman.Base.extend({
  // note: arguments and options should be defined in the constructor.
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    // This makes `projectname` a required argument.
    this.argument('projectname', { type: String, required: true });
    this.argument('authoremail', { type: String, required: false });
  },
  // prompting: function () {
  //   // Have Yeoman greet the user.
  //   // this.log(yosay(
  //   //   'Welcome to the terrific ' + chalk.red('generator-bzz-frontend') + ' generator!'
  //   // ));
  //
  //   var prompts = [{
  //     type: 'confirm',
  //     name: 'someAnswer',
  //     message: 'Would you like to enable this option?',
  //     default: true
  //   }];
  //
  //   return this.prompt(prompts).then(function (props) {
  //     // To access props later use this.props.someAnswer;
  //     this.props = props;
  //   }.bind(this));
  // },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(),
      { projectName : this.projectname, authorEmail : this.authoremail, generationDate : generationDate }
    );
    mkdirp.sync(this.destinationPath('src/img'));
  },

  install: function () {
    //this.installDependencies();
  }
});
