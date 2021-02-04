function saveTheme(){
    console.log("Saving Theme...")
    let background = document.querySelector(".background");
    let header = document.querySelector(".header");
    let resultTitle = document.querySelector(".result-title");
    let resultVisited = document.querySelector(".result-visited");
    let resultDesc = document.querySelector(".result-desc");
    let resultURL = document.querySelector(".result-url");
    console.log("Saved Theme")
    alert("Your theme has been saved! Go to duckduckgo.com to see!")
}
document.querySelector("#save").onclick = function (){
    saveTheme()
}
