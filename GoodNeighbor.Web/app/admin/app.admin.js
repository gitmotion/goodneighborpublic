(function () {
    'use strict'
    window.APP = window.APP || {};
    APP.NAME = "adminApp";

    angular
        .module(APP.NAME, ['ui.router', APP.NAME + '.routes']);
   

})();