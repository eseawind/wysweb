/**
 * @file base.js
 * @author clarkt (clarktanglei@163.com)
 * @description
 *
 */

// 初始化require
require.config({
        'baseUrl': '../../asset',
        'paths': {
            'etpl': '../dep/etpl/3.0.0/asset/etpl',
            'jquery': '../dep/jquery-2.1.3.min',
            'jqueryui': '../dep/jquery-ui-1.10.4.custom.min',
            'underscroe': '../dep/underscore/1.8.5/asset/underscore'
        },
        'shim': { 'jqueryui': { 'deps': ['jquery'] } },
        'packages': [
            {
                'name': 'etpl',
                'location': '../dep/etpl/3.0.0/asset',
                'main': 'main'
            },
            {
                'name': 'underscore',
                'location': '../dep/underscore/1.8.5/asset',
                'main': 'underscore'
            }
        ]
    });