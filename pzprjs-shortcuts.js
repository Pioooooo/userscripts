// ==UserScript==
// @name         Pzprjs Keyboard Shortcut
// @description  Add some keyboard shortcuts for pzprjs
// @version      0.0.1
// @author       Pioooooo
// @homepageURL  https://github.com/Pioooooo/userscripts
// @supportURL   https://github.com/Pioooooo/userscripts/issues
// @match        *://puzz.link/p*
// @match        *://pzplus.tck.mn/p*
// @match        *://pzprxs.vercel.app/p*/*
// @match        *://pzv.jp/p*/*
// @license      MIT
// @namespace    https://github.com/Pioooooo/userscripts
// @icon         https://www.google.com/s2/favicons?domain=puzz.link
// @tag          pzprjs
// @grant        none
// ==/UserScript==

/*
    This script adds keyboard shortcuts to the pzprjs puzzle platform:
    - 't': Enter trial mode
    - 'c': Reject the current trial
    - 'a': Accept the current trial
*/

(function() {
    /* globals ui */

    'use strict';

    ui.puzzle.on('ready', ()=>{
        window.addEventListener('keydown', (e) => {
            if (e.repeat) {
                return;
            }
            if(e.key === 't'){
                if(!ui.puzzle.opemgr.atStartOfTrial()) {
                    ui.puzzle.enterTrial();
                }
            } else if(e.key === 'c'){
                ui.puzzle.rejectCurrentTrial();
            } else if(e.key === 'a'){
                ui.puzzle.acceptTrial();
            }
        });
    }, false);
})();