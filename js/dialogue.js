function createDlg(dlg){

	//create dialogue <div>
	let divDlg = $("<div>")
		.attr("id", typeof dlg.id != "undefined" ? dlg.id : null)
		.addClass(typeof dlg.divClass != "undefined" ? dlg.divClass : "dialogue")
	if (dlg.title != 'undefined'){
		let d = $("<div>").addClass("dialogue-title");
		d.text(dlg.title);
		d.appendTo(divDlg);
	}
	if (dlg.text != 'undefined'){
		let p = $("<p>").text(dlg.text);
		p.appendTo(divDlg);
	}
	return divDlg;
	
	//return dialogue object
}
