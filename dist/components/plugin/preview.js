'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('../index');

var _preview = require('../directive/preview');

var _preview2 = _interopRequireDefault(_preview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue, $root) {
    Vue.set($root, 'RADON_PREVIEW', {
        show: false,
        current: {
            title: '在实际传输数据之前，需要完成几个步骤',
            src: 'http://covteam.u.qiniudn.com/poster.png'
        },
        list: []
    });
    Vue.component('rd-preview', _index.rdPreview);
    (0, _preview2.default)(Vue, $root);
};