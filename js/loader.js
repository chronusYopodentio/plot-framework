function boxLoader(content, parentDiv){
	let dlg = createDlg(content.dlg);
	if (content.btn != "undefined"){
		let btn = createBtn(content.btn);
		btn.appendTo(dlg);
	}
	dlg.appendTo(parentDiv);
}
