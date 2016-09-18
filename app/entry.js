'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');

angular.module('portApp', []);

require('./component/main');
require('./component/about-me');
require('./component/resume-page');
require('./component/resume-modal');
// require('./component/contact-page-form');
