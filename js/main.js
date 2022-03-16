
var page = location.href.split("/").slice(-1)[0];
if (page.length < 1) {
    page = "index.html"
}
var active_obj = document.getElementById(page);
active_obj.className = "active";
