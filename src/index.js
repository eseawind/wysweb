/// <reference path="../../DefinitelyTyped/node/node.d.ts" />
/// <reference path="../../DefinitelyTyped/jquery/jquery.d.ts" />
define(function(require) {
    var $ = require('./jquery');
    require('./jqueryui');
    var view = require('./common/view');
    var tpl = require('./index.tpl');
    $('#wysweb').html(view.render(tpl, {}));
});