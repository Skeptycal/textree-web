'use strict';
require('./scss/main.scss');

let React = require('react');
let ReactDOM = require('react-dom');
let App = require('./js/app');

ReactDOM.render(<App/>, document.getElementById('app'));

