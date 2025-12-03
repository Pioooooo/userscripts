// ==UserScript==
// @name         Pzprjs Keyboard Shortcut
// @namespace    https://github.com/Pioooooo
// @version      2025-12-03
// @description  Add some keyboard shortcuts for pzprjs
// @author       Pioooooo
// @source	     https://github.com/Pioooooo/userscripts
// @match        *://puzz.link/p*
// @match        *://pzplus.tck.mn/p*
// @match        *://pzprxs.vercel.app/p*/*
// @match        *://pzv.jp/p*/*
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