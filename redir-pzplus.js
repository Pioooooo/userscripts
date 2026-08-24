// ==UserScript==
// @name         Redirect to pzplus
// @namespace    https://pzplus.tck.mn/
// @version      1.0
// @description  Redirect puzz.link to pzplus
// @author       Pioooooo
// @match        *://puzz.link/p*
// @match        *://pzprxs.vercel.app/p*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    location.replace(
        location.href.replace(location.host, 'pzplus.tck.mn')
    );
})();
