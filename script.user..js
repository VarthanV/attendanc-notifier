// ==UserScript==
// @name         Attendance Notifier
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Nothing much to say ! !
// @author       Vishnu Varthan Rao
// @match       https://meet.google.com/*
// @grant        none
// ==/UserScript==

window.onload = (function () {
  "use strict";
  let watch = true;
  // Replace this with whichever Video you want to play to alert you
  const VIDEO_URL = "https://www.youtube.com/watch?v=DsI1hWj8424";
  const triggers = ["53", "vishnu varthan", "253", "vishnu", "vishnu vardhan"];
  if (watch) {
    let presentChecker = setInterval(function () {
      const chats = document.querySelectorAll("div[data-message-text]");
      if (chats.length != 0) {
        for (const chat of chats) {
          const content = chat.innerHTML.toString().toLowerCase();

          if (content.includes("present")) {
            window.open(VIDEO_URL);
            document.title = "Attendance Bro";

            alert("Attendance bro");

            watch = false;

            clearInterval(presentChecker);
          }
        }
      }
    }, 3000);
  }

  let nameChecker = setInterval(function () {
    const spans = document.querySelectorAll("span");
    if (spans.length != 0) {
      for (const span of spans) {
        let content = span.innerText.toLowerCase();
        if (triggers.includes(content)) {
          window.open(VIDEO_URL);

          document.title = "Calling bro";

          alert("Calling bro");
          clearInterval(nameChecker);
          setTimeout(nameChecker, 5000);
        }
      }
    }
  }, 3000);

  // Your code here...
})();
