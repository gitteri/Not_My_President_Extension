var obama = "https://obamawhitehouse.archives.gov/";

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: obama};
    },
    {
        urls: [
            "*://whitehouse.gov/*",
            "*://www.whitehouse.gov/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.update({ url: obama });
});