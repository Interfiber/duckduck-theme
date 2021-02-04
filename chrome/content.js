// Check for chrome storage
function isEmptyObject(value) {
    return Object.keys(value).length === 0 && value.constructor === Object;
}
console.log("DuckDuck-Theme: Checking for Chrome Storage...");
chrome.storage.sync.get("background", function (backgroundHex){
    if (!isEmptyObject(backgroundHex)){
        console.log("DuckDuck-Theme: Setting cookies for DuckDuck-Theme background color");
        document.cookie = `7=${backgroundHex.background.toString().replace("#", "")}`
    }else {
        console.log("DuckDuck-Theme: No background color set");
    }
})
chrome.storage.sync.get("header", function (headerHex){
    if (!isEmptyObject(headerHex)){
        console.log("DuckDuck-Theme: Setting cookies for DuckDuck-Theme header color");
        document.cookie = `j=${headerHex.header.toString().replace("#", "")}`
    }else {
        console.log("DuckDuck-Theme: No header color set");
    }
})
chrome.storage.sync.get("resultTitle", function (titleHex){
    if (!isEmptyObject(titleHex)){
        console.log("DuckDuck-Theme: Setting cookies for DuckDuck-Theme result title color");
        document.cookie = `9=${titleHex.resultTitle.toString().replace("#", "")}`
    }else {
        console.log("DuckDuck-Theme: No result-title color set");
    }
})
chrome.storage.sync.get("resultURL", function (urlHex){
    if (!isEmptyObject(urlHex)){
        console.log("DuckDuck-Theme: Setting cookies for DuckDuck-Theme result url color");
        document.cookie = `x=${urlHex.header.toString().replace("#", "")}`
    }else {
        console.log("DuckDuck-Theme: No result-url color set");
    }
})
chrome.storage.sync.get("resultVisited", function (visitedHex){
    if (!isEmptyObject(visitedHex)){
        console.log("DuckDuck-Theme: Setting cookies for DuckDuck-Theme result url visited color");
        document.cookie = `aa=${visitedHex.header.toString().replace("#", "")}`
    }else {
        console.log("DuckDuck-Theme: No result url visited color set");
    }
})
chrome.storage.sync.get("resultDesc", function (descHex){
    if (!isEmptyObject(descHex)){
        console.log("DuckDuck-Theme: Setting cookies for DuckDuck-Theme result url desc color");
        document.cookie = `aa=${descHex.header.toString().replace("#", "")}`
    }else {
        console.log("DuckDuck-Theme: No result url desc color set");
    }
})
chrome.storage.sync.get("themeName", function (themeName){
    if(!isEmptyObject(themeName)){
        console.log("DuckDuck-Theme: Loaded theme: " + themeName.themeName)
    }else {
        console.log("DuckDuck-Theme: No Theme Name Set");
    }
})