var resources = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageList = resources.getDirectoryListing();

// win 2
var win2 = Ti.UI.createWindow({
	backgroundColor : "#ffffff",
	bottom : "0dp",
	title : "Movies",
	fullscreen : true
});
/////////////////////////////////////////

// red bottom view and button
var dataView = Ti.UI.createView({
	backgroundColor : "#ff0000",
	height : "60dp",
	width : "100dp",
	bottom : "0dp"
});

var button2 = Ti.UI.createButton({
	title : "Login"
});

dataView.add(button2);

button2.addEventListener("click", function() {
	win2.open();
	//////////////////////////////////////////////

	for (var i = 0; i < imageList.length; i++) {
		var views = Ti.UI.createImageView({
			image : "images/" + imageList[i],
			backgroundColor : "#ffffff",
			top : "20dp"

		});
	}

	var getDetail = function(views) {
		var detail = Ti.UI.createWindow({
			backgroundColor : "#ffffff",
			barColor : "#ff0000",
			fullscreen : true,
		});

		// info labels
		var detailText = Ti.UI.createLabel({
			text : views.title,
			color : "#000000",
			textAlign : "center",
			width : "350dp",
			font : {
				fontSize : "30dp",
				fontFamily : "Arial",
				fontWeight : "bold",
			},
			top : "230dp"

		});

		detail.add(views);
		detail.add(detailText);

		var detailText2 = Ti.UI.createLabel({
			text : views.desc,
			color : "#000000",
			width : "350dp",
			font : {
				fontSize : "20dp",
				fontFamily : "Arial",
				fontWeight : "bold",
			},
			top : "300dp"

		});
		detail.add(detailText2);
		///////////////////////////////////////////

		// large image area
		var largeView = Ti.UI.createImageView({
			image : views.image,
			backgroundColor : "#ffffff",
			top : "10dp"

		});
		detail.add(largeView);
		/////////////////////////////////////////////

		// red banner on bottom of detail
		var redView2 = Ti.UI.createView({
			backgroundColor : "#ff0000",
			height : "45dp",
			bottom : "0dp"
		});
		detail.add(redView2);

		detail.open();
		detail.addEventListener("click", function() {
			this.close();
		});
	};
	/////////////////////////////////////////////////

	// table
	var table = Ti.UI.createTableView({
		bottom : "70dp",
	});

	win2.open(table);

	var tableSections = [];
	for (var n in data) {
		var tvs = Ti.UI.createTableViewSection({
			headerTitle : data[n].title,
			footerTitle : data[n].footer
		});

		for (var i = 0; i < data[n].items.length; i++) {
			var row = Ti.UI.createTableViewRow({

			});
			

			var smallImage = Ti.UI.createImageView({
				leftImage : data[n].items[i].image,
				left : "400dp",
				height : "90dp",
				title : data[n].items[i].title,
				desc : data[n].items[i].desc,
				image : data[n].items[i].image,
				details : {
					title : data[n].items[i].title,
					desc : data[n].items[i].desc,
					image : data[n].items[i].image,
				},
				hasChild : true
			});

			var rowText = Ti.UI.createLabel({
				text: data[n].items[i].title,
				left: "30dp",
				color: "#000000",
				font : {
				fontSize : "20dp",
				fontFamily : "Arial",
				fontWeight : "bold",
			},
			});
			row.add(rowText);

			var divider = Ti.UI.createView({
				height : "2dp",
				width : "100%",
				backgroundColor : "#eee",
				left : 0,
				bottom : 0
			});
			row.add(divider);

			row.add(smallImage);
			tvs.add(row);

			row.addEventListener("click", function(e) {
				getDetail(e.source);
			});
			
		};
		tableSections.push(tvs);
		table.setData(tableSections);
	};
	
	
	
	// Longpress Event Listener
win2.addEventListener("longpress", function(e) {
	var character = e.source,
	    optionDialog = Ti.UI.createOptionDialog({
		options : ["Edit", "Delete", "Cancel"],
		destructive : 1,
		cancel : 2
	});
	optionDialog.show();
	optionDialog.addEventListener("click", function(e) {
		if (e.index === 1) {
			alertDialog = Ti.UI.createAlertDialog({
				title : "Are you sure you want to delete?",
				buttonNames : ["Delete", "Cancel"],
			});
			alertDialog.addEventListener("click", function(e) {
				if (e.idex === 0) {
					alert("deleted");
				}
			});
			alertDialog.show();
		} else if (e.index === 0) {
			alert("Please enter new information!");
		} else {
		}
	});
});
//////////////////////////////////////////////


	// red banner on bottom of win2
	var redView = Ti.UI.createView({
		backgroundColor : "#ff0000",
		height : "45dp",
		bottom : "0dp"
	});

	win2.add(redView);
	win2.add(table);
	win2.open();
});
win1.add(dataView);
