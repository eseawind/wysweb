/// <reference path="../../DefinitelyTyped/node/node.d.ts" />
/// <reference path="../../DefinitelyTyped/jquery/jquery.d.ts" />>

define(function(require) {
	var $ = require('./jquery');
	require('./jqueryui');
	var etpl = require('./etpl');
	
	$('#hehe').button().click(function( event ) {
		alert("Hello World");
    	event.preventDefault();
  	});
	
	console.log("hello world");
});