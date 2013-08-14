(function(document) {
    var stylesheets = document.getElementsByTagName("link"),
        m = '', i = 0, len = stylesheets.length;

    for (i; i<len; i++) {
        s = stylesheets[i];
        m = s.getAttribute("media");
        console.log(m);
        s.setAttribute("media", (m === "print" || m ==="all") ? "screen" : "print");
    }
})(document);
