window.addEventListener('DOMContentLoaded', function () {

    'use srict';
    let calc = require('./parts/calc.js'),
        form = require('./parts/form.js'),
        slider = require('./parts/slider.js'),
        tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js'),
        modal = require('./parts/modal.js');

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();

});