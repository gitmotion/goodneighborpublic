(function () {
    'use strict'

    window.APP = window.APP || {}; 
    APP.NAME = "publicApp";

    angular
        .module(APP.NAME, ['ui.router', APP.NAME + '.routes']);

})();