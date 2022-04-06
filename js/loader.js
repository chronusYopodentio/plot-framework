function boxLoader(content, parentDiv){
	let dlg = createDlg(content.dlg);
	if (content.btn != "undefined"){
		let btn = createBtn(content.btn);
		btn.appendTo(dlg);
	}
	dlg.appendTo(parentDiv);
	
	//all dialogue when first created will be hiden
	dlg.hide();
	animation.fadeIn(dlg);
}




function cleanser(parentDiv){
	let div = $(parentDiv + '>');
	animation.fadeOut(div);
}


function transition(parentDiv, next){
	cleanser(parentDiv);
	boxLoader(next, parentDiv);

}
