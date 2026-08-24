// ==UserScript==
// @name         Redirect to pzplus
// @description  Redirect puzz.link to pzplus
// @version      0.0.1
// @author       Pioooooo
// @homepageURL  https://github.com/Pioooooo/userscripts
// @supportURL   https://github.com/Pioooooo/userscripts/issues
// @match        *://puzz.link/p*
// @match        *://pzprxs.vercel.app/p*/*
// @match        *://pzv.jp/p*/*
// @run-at       document-start
// @grant        none
// @license      MIT
// @namespace    https://github.com/Pioooooo/userscripts
// @icon         https://www.google.com/s2/favicons?domain=puzz.link
// @tag          pzprjs
// ==/UserScript==

(function () {
    'use strict';

    location.replace(
        location.href.replace(location.host, 'pzplus.tck.mn')
    );
})();
