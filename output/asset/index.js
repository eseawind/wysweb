define('index', [
    'require',
    './jquery',
    './jqueryui',
    './etpl'
], function (require) {
    var $ = require('./jquery');
    require('./jqueryui');
    var etpl = require('./etpl');
    $('#hehe').button().click(function (event) {
        alert('Hello World');
        event.preventDefault();
    });
    console.log('hello world');
});