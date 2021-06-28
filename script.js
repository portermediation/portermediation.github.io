function toggleCollapsed(id) {
    var element = document.getElementById(id);
    if (element != null) {
        var style = element.style.display;
        if (style == "block") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    }
}
