window.addEventListener("message", function (event) {
	if (event.data.module != GetParentResourceName()) return;
    if (event.data.action == "SHOW_UI") return $("#UI").fadeIn(500);
    if (event.data.action == "HIDE_UI") return $("#UI").fadeOut(500);
});
$("#UI").hide();