/*! jsbeautifierSettingsTweaks.js v0.1.1 by ryanpcmcquen */
(function () {

  'use strict';

  window.addEventListener('load', function () {
    // set any vars you want to change here
    var jslintCheckbox = document.getElementById('jslint-happy');
    var tabSize = document.getElementById('tabsize');

    // set your values for those vars here
    tabSize.value = 2;
    jslintCheckbox.checked = true;
  });

}());
