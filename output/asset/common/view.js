define('common/view', [
    'require',
    'etpl',
    'underscore'
], function (require) {
    var etpl = require('etpl');
    var _ = require('underscore');
    etpl.config({
        commandOpen: '{{',
        commandClose: '}}',
        strip: true
    });
    etpl.addFilter('toFixed', function (text, num) {
        text = parseFloat(text);
        return text.toFixed(num);
    });
    var defaultData = {};
    var exports = {};
    exports.getTarget = function (tpl) {
        if (!/\s*target:\s*([a-z0-9\/_-]+)\s*(\(\s*master\s*=\s*([a-z0-9\/_-]+)\s*\))?\s*/i.test(tpl)) {
            throw new Error('Invalid ' + this.type + ' syntax: ' + tpl);
        }
        return RegExp.$1;
    };
    exports.render = function (tpl, options) {
        var data = _.extend({}, defaultData, options);
        var renderer = this.getRenderer(tpl);
        if (!options) {
            return renderer;
        }
        return renderer(data);
    };
    exports.getRenderer = function (tpl) {
        var target = this.getTarget(tpl);
        var renderer = etpl.getRenderer(target);
        if (!renderer) {
            renderer = etpl.compile(tpl);
        }
        return renderer;
    };
    exports.getRendererByTarget = function (target) {
        return etpl.getRenderer(target);
    };
    exports.addDefaultData = function (data) {
        _.extend(defaultData, data);
    };
    exports.compile = function (tpl) {
        etpl.compile(tpl);
    };
    return exports;
});