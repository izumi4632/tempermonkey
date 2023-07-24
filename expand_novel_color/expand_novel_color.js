// ==UserScript==
// @name         Expand Novel Color
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Expand the width of elements with class 'novel_color'
// @match        https://novel18.syosetu.com/*
// @grant        none
// ==/UserScript==
"use strict";

// 初期ページの要素に対する処理
applyStyles();

// ページが更新された時（autopagerize）に処理を再適用
const observer = new MutationObserver(function (mutations) {applyStyles();});
observer.observe(document.body, {childList: true, subtree: true});


function applyStyles() {
    console.log("関数実行");

    // colorはautopagerizeで追加されないっぽい
    const color = document.getElementById("novel_color");
    if (color) {
        color.style.margin  = "0px";
        color.style.padding = "0px";
        color.style.width   = "100%";
    }

    // idが同一なので、classで取得後にIDで判断する
    Array.from(document.getElementsByClassName("novel_view")).map(element => {
        if (element.id === "novel_honbun") {
            element.style.width    = "60%";
            element.style.padding  = "100px";
            element.style.fontSize = "20px";
        }
    });
}
