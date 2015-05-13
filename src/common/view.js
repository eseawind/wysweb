/**
 * @file view.js
 * @author sekiyika(pengxing@baidu.com)
 * @description
 *
 */

define(function (require) {

    var etpl = require('etpl');
    var _ = require('underscore');

    // 设置 etpl
    etpl.config({
        commandOpen: '{{',
        commandClose: '}}',
        strip: true
    });

    /**
     * toFixed plugin
     * @param {string} text number to be processed
     * @param {number} num number
     *
     * @return {string}
     */
    etpl.addFilter('toFixed', function (text, num) {
        text = parseFloat(text);
        return text.toFixed(num);
    });

    /**
     * 默认的参数
     *
     * @type {Object}
     */
    var defaultData = {};

    var exports = {};

    /**
     * 根据模板获取target名称
     *
     * @param {string} tpl 模板
     * @return {string}
     */
    exports.getTarget = function (tpl) {
        /* eslint-disable */
        if (!/\s*target:\s*([a-z0-9\/_-]+)\s*(\(\s*master\s*=\s*([a-z0-9\/_-]+)\s*\))?\s*/i.test(tpl)) {
            throw new Error('Invalid ' + this.type + ' syntax: ' + tpl);
        }
        /* eslint-enable */
        return RegExp.$1;
    };

    /**
     * 渲染模板
     *
     * @param {string} tpl 模板
     * @param {Object=} options 数据
     *
     * @return {Function|string} 如果有数据，则
     */
    exports.render = function (tpl, options) {
        var data = _.extend({}, defaultData, options);

        var renderer = this.getRenderer(tpl);
        if (!options) {
            return renderer;
        }
        return renderer(data);
    };

    /**
     * 根据模板获取renderer函数
     *
     * @param {string} tpl 模板
     * @return {Error|Function}
     */
    exports.getRenderer = function (tpl) {
        var target = this.getTarget(tpl);
        var renderer = etpl.getRenderer(target);

        if (!renderer) {
            renderer = etpl.compile(tpl);
        }

        return renderer;
    };

    /**
     * 根据target获取renderer
     *
     * @param {string} target target名称
     * @return {Function|null}
     */
    exports.getRendererByTarget = function (target) {
        return etpl.getRenderer(target);
    };

    /**
     * 给view添加默认参数
     *
     * @param {Object} data 默认数据
     */
    exports.addDefaultData = function (data) {
        _.extend(defaultData, data);
    };

    /**
     * 编译template
     * @param {string} tpl 模板
     */
    exports.compile = function (tpl) {
        etpl.compile(tpl);
    };

    return exports;
});
