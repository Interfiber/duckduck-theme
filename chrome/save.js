function saveTheme(){
    console.log("Saving Theme...")
    let themeName = document.querySelector(".theme-name");
    let background = document.querySelector(".background");
    let header = document.querySelector(".header");
    let resultTitle = document.querySelector(".result-title");
    let resultVisited = document.querySelector(".result-visited");
    let resultDesc = document.querySelector(".result-desc");
    let resultURL = document.querySelector(".result-url");
    chrome.storage.sync.set({ 
        themeName: themeName.value,
        background: background.value,
        header: header.value,
        resultTitle: resultTitle.value,
        resultVisited: resultVisited.value,
        resultDesc: resultDesc.value,
        resultURL: resultURL.value,
     });
    console.log("Saved Theme")
    alert("Saved theme! Visit duckduckgo.com to see")
}   
document.querySelector("#save").onclick = function (){
    saveTheme()
}
