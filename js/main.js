

function openNewTabWithVideo(videoUrl) {
    // 創建一個新的頁籤
    var newTab = window.open();

    // 構建新頁籤的內容
    var content = `
        <!DOCTYPE html>
        <html lang="zh-TW">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>影片播放</title>
        </head>
        <body>
            <h1>"${videoUrl}"</h1>
            <video controls width="200">
                <source src="${videoUrl}" type="video/mp4">
                您的瀏覽器 不支援 HTML5 影片標籤。
            </video>
        </body>
        </html>
    `;

    // 將內容寫入新頁籤中
    newTab.document.open();
    newTab.document.write(content);
    newTab.document.close();
}

