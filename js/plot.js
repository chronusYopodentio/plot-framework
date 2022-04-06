plot = {
	parentDiv: "div#content",
	block1: 
	{
		dlg: 
		{
			title: "title",
			divClass: "dialogue",
			text: "add some text here"
		},

		btn: 
		{
			text: "clicky",
			onClick: function(){
				transition(plot.parentDiv, plot.block2);
			}
		}
	},

	block2:
	{
		dlg:
		{
			title: "block2",
			divClass: "dialogue",
			text: "add more and more text here"
		},

		btn:
		{
		}
	}
};
