/// <reference path="../../DefinitelyTyped/node/node.d.ts" />
/// <reference path="../../DefinitelyTyped/jquery/jquery.d.ts" />
define(function(require) {
    var $ = require('./jquery');
    require('./jqueryui');
    var view = require('./common/view');
    var tpl = require('./editor.tpl');
    
    $('#wysweb').html(view.render(tpl, {
        baseUrl: './src'
    }));
    
    var isToolbarOpen = true;
    $('.toolbar-icon').click(function () {
        if (isToolbarOpen) {
            $('.editor-toolbar').animate({'left': '-210px'}, 'fast', function () {
                $('.toolbar-icon').removeClass('glyphicon-chevron-left').addClass('glyphicon-chevron-right');
            });
        } else {
            $('.editor-toolbar').animate({'left': '0px'}, 'fast', function () {
                $('.toolbar-icon').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-left');
            });
        }
        isToolbarOpen = !isToolbarOpen;
    });

    $('.side-bar').click(function () {
        $(this).animate({'right': '-500px'}, 'fast', function () {
            $('.side-bar-bg').hide();
        });
    });
});