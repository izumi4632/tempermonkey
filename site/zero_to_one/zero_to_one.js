// ==UserScript==
// @name         zero2one
// @version      1.0.0
// @description  izumi's tempermonkey script for zero2one
// @match        https://zero2one.jp/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zero2one.jp
// @require      https://raw.githubusercontent.com/izumi4632/tempermonkey/master/general.js?token=GHSAT0AAAAAACF67W2MVCVZ3RDM4DGLPEA4ZGQ2HNA
// ==/UserScript==

(function() {
  'use strict';

  /**
   * Copies the text content of a script to the clipboard.
   */
  function copy_text() {
    const target_js_path = "#unit > div:nth-child(4) > div.phrase";
    copy_text_by_js_path(target_js_path);
    console.log("コピーしました");
  }
  
  // 2秒おきに繰り返し
  setInterval(copy_text, 2000);
})();
