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
  
  // 5秒おきに繰り返し
  setInterval(copy_text, 5000);
})();
