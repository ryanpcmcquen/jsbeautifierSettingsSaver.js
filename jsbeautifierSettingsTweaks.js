/*! jsbeautifierSettingsTweaks.js v0.3.2 by ryanpcmcquen */
window.addEventListener('load', function () {
    'use strict';
    // Set any vars you want to change here:
    var jslintCheckbox = document.getElementById('jslint-happy');
    var tabSize = document.getElementById('tabsize');
    var wrapLength = document.getElementById('wrap-line-length');

    // Set your values for those vars here:
    tabSize.value = 4;
    jslintCheckbox.checked = true;
    wrapLength.value = 0;
});
