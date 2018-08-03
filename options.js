// 擴充功能選項
// 將這個些顏色建立成button 然後click 改掉我們初始設定
let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
        let button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('click', function() {
            chrome.storage.sync.set({ color: item }, function() {
                console.log('color idds ' + item);
            });
        });
        page.appendChild(button);
    }
}
constructOptions(kButtonColors);
