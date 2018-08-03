'use strict';

let changeColor = document.getElementById('changeColor');
let mario = document.getElementById('mario');
chrome.storage.sync.get('color', function(data) {
    // 按鈕的顏色
    changeColor.style.backgroundColor = data.color;
    // 將顏色存在attribute
    changeColor.setAttribute('value', data.color);


      // 按鈕的顏色
      mario.style.backgroundColor = data.color;
      // 將顏色存在attribute
      mario.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
    // 從剛剛上面設定在attribute內 取得顏色
    let color = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
            code: 'document.body.style.backgroundColor = "' + color + '";'
        });
    });
};

mario.onclick = function(element) {
  var elem = document.createElement("img");
  elem.setAttribute("src", "images/get_started16.png");   
  elem.setAttribute("height", "768");
  elem.setAttribute("width", "1024");
  // 從剛剛上面設定在attribute內 取得顏色
  let color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        file: "insert.js"
      });
  });
};

