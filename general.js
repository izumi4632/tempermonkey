// ==UserScript==
// @name         general
// @version      1.0.0
// @description  izumi's general functions for tempermonkey scripts
// @match        *://*/*
// ==/UserScript==

'use strict';

/**
 * Copies the text content of an element selected by a JavaScript path.
 * @param {string} target_js_path - The JavaScript path to the target element.
 */
function copy_text_by_js_path(target_js_path) {
  copy(
    document.querySelector(
      target_js_path
    )
      .textContent
  )
};