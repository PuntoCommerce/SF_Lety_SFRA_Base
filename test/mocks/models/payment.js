'use strict';

var proxyquire = require('proxyquire').noCallThru().noPreserveCache();

function proxyModel() {
    return proxyquire('../../../cartridges/app_storefront_base/cartridge/models/payment', {
        '~/cartridge/scripts/dwHelpers': {},
        'dw/order/PaymentMgr': {},
        'dw/order/PaymentInstrument': {}
    });
}

module.exports = proxyModel();
