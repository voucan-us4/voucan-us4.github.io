if (localStorage.getItem("Ads") === null) {
    localStorage.setItem("Ads", "true");
}

if (localStorage.getItem("Ads") === "false") {
    const script = document.querySelector("script[src='//pl26618098.profitableratecpm.com/9b/d6/dd/9bd6dd1837226b9fe69dcbb4f296d85a.js']");
    if (script) script.remove();
}
