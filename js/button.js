function createBtn(btn){
	let button = $("<button>")
		.attr("id", typeof btn.id != 'undefined' ? btn.id : null)
		.addClass(typeof btn.divClass != 'undefined' ? btn.divClass : "button")
		.text(typeof btn.text != 'undefined' ? btn.text : "next")
		.click(typeof btn.onClick != 'undefined' ? btn.onClick : null);

	return button;
}
