chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        const uri = chrome.extension.getURL('github-extra.css');
        chrome.tabs.executeScript(tabId, {
            code: `
                var link = document.createElement('link');
                link.rel = 'stylesheet'
                link.media = 'all';
                link.href = '${uri}';
                document.body.appendChild(link);
            `
        });
    }
});
